!function(){var e={openModalBtn:document.querySelectorAll(".data-modal-open"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")},n=!0,t=!1,o=void 0;try{for(var d,l=e.openModalBtn[Symbol.iterator]();!(n=(d=l.next()).done);n=!0)d.value.addEventListener("click",c)}catch(e){t=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(t)throw o}}function c(){e.modal.classList.toggle("is-hidden")}e.closeModalBtn.addEventListener("click",c)}(),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob")};function n(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.4099d022.js.map
