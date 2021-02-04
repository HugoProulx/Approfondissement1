var carrouselIMG = new Vue({
    el: '#carrouselIMG',
    data: {
        img1: 'image/img1.jpg',
        img2: 'image/img2.jpg',
        img3: 'image/img3.jpg',
        titre: 'Bienvenue !',
        descriptionPage: 'Sur cette page web, vous serez en mesure de voir :',
        items:[
            {info: 'Des résumés de contes et légende de l\'époque médiévale.'},
            {info: 'Des photos reliées à ces contes'},
            {info: 'Des petites manipulations web produites grâce au Framework Vue.JS'}
        ],
        finDescription : 'En espérant que vous passez un bon moment!'
    }
})