/* copied from https://stackoverflow.com/questions/23963208/nextsibling-with-class-not-working */
function hasClass(elem, cls) {
    var str = " " + elem.className + " ";
    var testCls = " " + cls + " ";
    return (str.indexOf(testCls) != -1);
  }
  
  function nextByClass(node, cls) {
    while (node = node.nextSibling) {
      if (hasClass(node, cls)) {
        return node;
      }
    }
    return null;
  }
  
  function showBibTex(toggleLinkElement) {
    display = nextByClass(toggleLinkElement, "bibtex");
    display.style.display = display.style.display == "block" ? "none" : "block";
  }
