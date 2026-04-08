function safariButtonFix() {

  function makeSynthetic(e) {
    return new KeyboardEvent(e.type, {
    key: e.key,
    code: e.code,
    location: 0,
    keyCode: e.keyCode,
    which: e.which,
    repeat: e.repeat,
    isComposing: e.isComposing,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    metaKey: e.metaKey,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    });
  }

  function forwardArrow(e) {
    if (!e.isTrusted || !e.key.startsWith("Arrow")) return;
    const c = document.getElementById("canvas");
    if (c && document.activeElement === c) {
      // for pyxel don't actually need to prevent default, it already won't scroll
      // and if not dispatching to the window where the listener is, bubbles needs to be true
      window.dispatchEvent(makeSynthetic(e));
    }
  }

  function patchCanvas(c) {
    c.tabIndex = -1;

    document.addEventListener("keydown", forwardArrow);
    document.addEventListener("keyup",   forwardArrow);
  }


  window.addEventListener("load", () => patchCanvas(document.getElementById("canvas")));
};
safariButtonFix();
