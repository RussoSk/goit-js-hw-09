!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function a(){var t=document.body,n="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));t.style.backgroundColor=n}t.addEventListener("click",(function(){t.disabled=!0,e=setInterval(a,1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.1f07c5a7.js.map