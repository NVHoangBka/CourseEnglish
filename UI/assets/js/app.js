const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const iconNotify = $('.navbar-right__notify--icon')
const notifyList = $('.notify-list')
const iconUser = $('.navbar-right__user--icon')
const userList = $('.user-list')
const iconSearch = $('.navbar-search__icon')
const inputSearch = $('.navbar-search__input')

iconNotify.onclick = function   () {
    const display = notifyList.style.display.toString();
    switch (display) {
        case "flex":
            notifyList.style.display = "none";
            break;
    
        default:
            notifyList.style.display = "flex";
            userList.style.display = "none";
            break;
    }
}

iconUser.onclick =  () => {
    const display = userList.style.display.toString();
    switch (display) {
        case "block":
            userList.style.display = "none";
            break;
    
        default:
            userList.style.display = "block";
            notifyList.style.display = "none";
            break;
    }
}

// iconSearch.onclick = () => {
//     const display = inputSearch.style.display.toString();
//     switch (display) {
//         case "flex":
//             inputSearch.style.display = "none";
//             break;
    
//         default:
//             inputSearch.style.display = "flex";
//             notifyList.style.display = "none";
//             userList.style.display = "flex";
//             break;
//     }
// }
