const t={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]")};let e=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startButton.addEventListener("click",(function(){t.startButton.setAttribute("disabled",!1),t.stopButton.removeAttribute("disabled"),e=setInterval(o,1e3)})),t.stopButton.addEventListener("click",(function(){t.startButton.removeAttribute("disabled"),t.stopButton.setAttribute("disabled",!1),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.4fe02f53.js.map