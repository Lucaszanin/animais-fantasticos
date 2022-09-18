import outsideClick from "./outsideclick.js";

export function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {

        ['tochstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    })


    function handleClick(e) {
        e.preventDefault();
        this.classList.add('active');
        outsideClick(this,['tochstart', 'click'], () => {
            this.classList.remove('active')
        });
    }

}



