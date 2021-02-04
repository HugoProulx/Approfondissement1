var navbar = new Vue({
    el: '#narbarVue',
    data: {
        currentRoute: window.location.pathname,
        pages: [
            {nom: "Accueil", url: "index.html", class : "nav-item "},
            {nom: "Contes Mythiques", url: "conte.html" , class : "nav-item "},
            {nom: "Divertissement", url: "divertissement.html" , class : "nav-item "},
        ]
    }
});
$(document).ready(function (){
    for(let i = 0; i < navbar.pages.length;i++){
        if (navbar.pages[i].url.substring(navbar.pages[i].url.length-8, navbar.pages[i].url.length) ===
            navbar.currentRoute.substring(navbar.currentRoute.length-8, navbar.currentRoute.length)){
            navbar.pages[i].class += " active"
        }

    }
});