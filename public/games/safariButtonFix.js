
(function() {
  const arrowCodes = {
    ArrowUp:   38,
    ArrowDown: 40,
    ArrowLeft: 37,
    ArrowRight:39,
  };

  function makeSynthetic(e) {
    return new KeyboardEvent(e.type, {
      key:       e.key,
      code:      e.code,
      keyCode:   arrowCodes[e.key],
      which:     arrowCodes[e.key],
      bubbles:   true,
      cancelable: true
    });
  }

  function forwardArrow(e) {
    if (!e.isTrusted || !e.key.startsWith("Arrow")) return;
    // only forward when the canvas is supposed to have focus
    const c = document.getElementById("canvas");
    if (c && document.activeElement === c) {
      e.preventDefault();                    // stop Safari scrolling
      c.dispatchEvent(makeSynthetic(e));     // give SDL a clean event
    }
  }

  function patchCanvas(c) {
    if (!c || c._patched) return;
    c._patched = true;

    c.tabIndex = 0;                // make it a normal focus target
    c.style.outline = "none";      // hide the focus ring
    c.style.cursor  = "none";      // keep whatever cursor style pyxel wants
    c.addEventListener("pointerdown", () => c.focus());

    // install the forwarders on document so they fire before SDL’s handlers
    document.addEventListener("keydown", forwardArrow, true);
    document.addEventListener("keyup",   forwardArrow, true);
  }

  // monkey‑patch the helper so we catch the canvas right as pyxel.js creates it
  if (window._createScreenElements) {
    const orig = window._createScreenElements;
    window._createScreenElements = async function(...args) {
      const canvas = await orig.apply(this, args);
      patchCanvas(canvas);
      return canvas;
    };
  }

  // also observe the DOM in case pyxel.js creates/replaces the element later
  const obs = new MutationObserver(() => patchCanvas(document.getElementById("canvas")));
  obs.observe(document.body, { childList: true, subtree: true, attributes: true });

  window.addEventListener("load", () => patchCanvas(document.getElementById("canvas")));
})();


(function() {
  // log whatever _addVirtualGamepad does
  const origAdd = window._addVirtualGamepad;
  window._addVirtualGamepad = function(mode) {
    console.log('_addVirtualGamepad called with', mode);
    const ret = origAdd(mode);
    // once the images exist, watch the touch handler
    const cross = document.querySelector('img[src$="gamepad_cross_98x98.png"]');
    const button = document.querySelector('img[src$="gamepad_button_98x98.png"]');
    if (cross && button) {
      console.log('virtual‑gamepad images', cross, button);
    }
    return ret;
  };

  // instrument the touch handler by re‑registering our own
  document.addEventListener('touchstart', logTouch, {passive:false});
  document.addEventListener('touchmove',  logTouch, {passive:false});
  document.addEventListener('touchend',   logTouch, {passive:false});

  function logTouch(e) {
    console.log('touch', e.type, 'points:', Array.from(e.changedTouches).map(t => [t.clientX, t.clientY]));
    // you can compute rects here yourself and print the angle/sector
    const cRect = cross ? cross.getBoundingClientRect() : {left:0,top:0};
    const x = e.changedTouches[0].clientX - cRect.left;
    const y = e.changedTouches[0].clientY - cRect.top;
    console.log('relative', x, y);
  }
})();
