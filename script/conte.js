var app = new Vue({
    el: '#conte',
    data: {
        recherche: '',
        titre: 'Liste de contes et de légendes.',
        contes: [
            {
                id: 0,
                nom: 'Beowulf ',
                description: 'Poème épique anglo-saxon, probablement écrit au VIIIe siècle, qui raconte les combats du guerrier Beowulf, et qui a inspiré J.R.R. Tolkien pour son roman Le Seigneur des anneaux en 1954-55.\n',
                image: 'image/conte/beowulf.jpg',
                affichage: false
            },
            {
                id: 1,
                nom: 'La Chanson de Roland',
                description: 'Poème épique de la fin du XIe siècle. Il chante les exploits du chevalier Roland, neveu et fidèle serviteur de Charlemagne. À travers la figure historique de cet empereur et celle de Roland, l\'œuvre vise à exalter les valeurs de fidélité à des guides guerriers et politiques, et stigmatise les valeurs négatives : lâcheté, trahison, félonie, mensonge, ruse.',
                image: 'image/conte/LaChansonDeRoland.jpg',
                affichage: false
            },
            {
                id: 2,
                nom: 'Le Conte du Graal',
                description: 'Geoffroy de Monmouth écrit en 1133 une Vie de Merlin, puis Chrétien de Troyes rédige son Perceval ou le conte du Graal en 1180. Nombreux sont les autres romans, dits « de la table ronde », qui évoquent la geste d\'Arthur et de ses chevaliers, dédiée à la quête d\'un vase qui aurait contenu le sang du Christ avant la mise au tombeau : le Graal. Arthur, Merlin, Lancelot, Perceval et les autres chevaliers ont été associés dans la légende, mais le sont rarement dans un roman unique de l\'époque.\n',
                image: 'image/conte/LeConteDuGraal.jpg',
                affichage: false
            },
            {
                id: 3,
                nom: 'Tristan et Iseut',
                description: 'Le Normand Béroul écrit le Roman de Tristan vers 1170, d’après une légende d’origine celtique. C’est la magie d’une potion d’amour qui rapproche Tristan de la femme de son oncle, la jeune Iseut. Le couple « légal » est celui d’Iseut et du roi Marc, le couple « d’esprit » celui de Tristan & Iseut. Les jeunes gens, très respectueux du roi, vivent ce conflit comme un destin auquel leur loyauté peut mettre fin, ce qui s’avérera impossible.\n',
                image: 'image/conte/TristanEtIseut.jpg',
                affichage: false
            },
            {
                id: 4,
                nom: 'Le Poème du Cid',
                description: 'Inspiré d’un personnage historique, Le Poème du Cid, composé vers 1200, est la seule chanson de geste de l’Espagne médiévale. Il développe les idéaux intimes de la chevalerie et prône les valeurs issues du « mérite » contre celles de la « naissance » et du lignage. C’est en cela que le thème intéressera Corneille pour sa célèbre pièce Le Cid, en 1637.\n',
                image: 'image/conte/LePoèmeDuCid.jpg',
                affichage: false
            },
            {
                id: 5,
                nom: 'La Chanson des Nibelungen',
                description: 'Cette légende est d’origine scandinave, mais sa version du XIIIe siècle en vieil allemand imprègne toute une part « nordique » de la culture germanique, notamment à travers les exploits de Siefgried. Elle est à l’origine de centaines d’œuvres, dont l’Anneau du Nibelung, cycle de quatre opéras de Richard Wagner. Le réalisateur allemand Fritz Lang réalise en 1924 deux films muets à grand spectacle.',
                image: 'image/conte/LaChansonDesNibelungen.jpg',
                affichage: false
            },
            {
                id: 6,
                nom: 'Le Roman de Renart',
                description: 'Recueil de récits des XIIe et XIIIe siècles français, dont les protagonistes sont des animaux agissant en humains. Le monde animal traité est bien sûr le miroir du monde humain, et sert avant tout à le critiquer : chevaliers, pèlerins, courtisans, y sont moqués dans leur hypocrisie.',
                image: 'image/conte/LeRomanDeRenart.jpg',
                affichage: false
            },
            {
                id: 7,
                nom: 'Le Roman de la Rose',
                description: 'Œuvre poétique en vers d’ancien Français très raffinés, écrite par Guillaume de Lorris et Jean de Meung, de 1237 à 1280. On y devise sur l’amour de façon allégorique, et la cour que fait un homme à son aimée est traitée comme tentative de pénétrer dans un jardin clôturé. L’ensemble de ces allégories essaye de dépasser « l’amour courtois » de l’époque, pour atteindre la réflexion mystique.',
                image: 'image/conte/LeRomanDeLaRose.jpg',
                affichage: false
            },
            {
                id: 8,
                nom: 'Robin des Bois',
                description: 'Héros archétypal du Moyen Âge anglais, dont les aventures sont célébrées dès le début du XIVe siècle dans des ballades populaires.',
                image: 'image/conte/RobinDesBois.png',
                affichage: false
            },
            {
                id: 9,
                nom: 'Le Decameron',
                description: 'Œuvre allégorique italienne écrite par Boccace entre 1349 et 1353. Il s’agit d’une centaine de récits étalés sur dix journées (d’où le titre), mettant en présence, pendant l’épidémie de Peste noire à Florence, des caractères de la vie quotidienne : marchands, banquiers, artisans, paysans venus à la ville, etc.',
                image: 'image/conte/LeDecameron.jpg',
                affichage: false
            },

        ]
    },

    computed: {
        //Vérifie si les contes de la liste contient le contenue dans la barre de recherche.
        computedList: function () {
            var vm = this
            return this.contes.filter(function (item) {
                return item.nom.toLowerCase().indexOf(vm.recherche.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        fullDesc: function (afficher) {
            for (var i = 0; i < app.contes.length; i++) {
                if (afficher === i) {
                    app.contes[i].affichage = true;
                } else {
                    app.contes[i].affichage = false;
                }

            }
        },
        //Ces methodes proviennent de vue.js et celle-ci sont des animations.
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }


    },
})