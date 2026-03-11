
(function() {
  const arrowCodes = {
    ArrowUp:   38,
    ArrowDown: 40,
    ArrowLeft: 37,
    ArrowRight:39,
  };

  function makeSynthetic(e) {
    return new KeyboardEvent(e.type, {
      // key:       e.key,
      code:      e.code,
      // keyCode:   arrowCodes[e.key],
      // which:     arrowCodes[e.key],
      bubbles:   true,
      // cancelable: true
    });
  }

  function forwardArrow(e) {
    if ( !e.key.startsWith("Arrow")) return;
    if (!e.isTrusted || !e.key.startsWith("Arrow")) return;
    const c = document.getElementById("canvas");
    console.log('event is:', e, 'activeElement is:', document.activeElement);
    if (c && document.activeElement === c) {
      // for pyxel don't actually need to prevent default, it already won't scroll
      // e.preventDefault();
      c.dispatchEvent(makeSynthetic(e));
    }
  }

  function patchCanvas(c) {

    console.log('patching canvas', c);

    c.tabIndex = -1;

    document.addEventListener("keydown", forwardArrow);
    document.addEventListener("keyup",   forwardArrow);
  }




  window.addEventListener("load", () => patchCanvas(document.getElementById("canvas")));
})();
