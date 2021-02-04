var footer = new Vue({
    el: '#footer',
    data: {
        auteur:'Hugo Proulx',
        informationPertinante:'Cette page web a été créée dans le cadre d\'un cours d\'approfondissement de la technologie. Dans ce cas, la technologie qui a été approfondie est le Framework Vue.JS.',
        technoUtiliser:'Cette page utilise les technologies suivantes :',
        technos:[
            {info:'Html'},
            {info:'JavaScript'},
            {info:'Css'},
            {info:'Vue.JS'},
            {info:'Bootstrap'},
            {info:'JQuery'}
        ]
    }
})