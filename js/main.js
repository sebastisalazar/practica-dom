/* VARIABLES */
/* capturar elementos DOM */
const imagenBanner = document.querySelector('#bienvenidos img')
/* Acceder al elemento del DOM para crear los artículos de viajes */


/* Acceder al elemento del DOM para crear añadir los options */

const arrayBanners = [
    {
        id: 1,
        src: 'assets/banner/1.jpg',
        alt: 'Banner uno'
    },
    {
        id: 2,
        src: 'assets/banner/2.jpg',
        alt: 'Banner uno'
    },
    {
        id: 3,
        src: 'assets/banner/3.jpg',
        alt: 'Banner uno'
    },
    {
        id: 4,
        src: 'assets/banner/4.jpg',
        alt: 'Banner uno'
    },
    {
        id: 5,
        src: 'assets/banner/5.jpg',
        alt: 'Banner uno'
    },
    {
        id: 6,
        src: 'assets/banner/6.jpg',
        alt: 'Banner uno'
    },
    {
        id: 7,
        src: 'assets/banner/7.jpg',
        alt: 'Banner uno'
    },
    {
        id: 8,
        src: 'assets/banner/8.jpg',
        alt: 'Banner uno'
    },
]
const arrayViajes = {

}
const arrayDestinos = {}


/* EVENTOS */

/* FUNCIONES */
const aleatorio = () => {
    const indice = '********'
    return indice
}

const pintarBanner = () => {

    const indice = aleatorio()
    const elemento = arrayBanners[0]

    // console.log(elemento.alt)
    // console.log(elemento.src)

    imagenBanner.setAttribute('src', elemento.src)
    imagenBanner.alt = elemento.alt
    // console.log(imagenBanner)

}

const pintarCards = {
    /* recorrer los elementos del array/*
    /* por cada elemento crear:/*
    /* un article   */
    /* un div   */
    /* una imgen asignando sus atributos   */
    /* un h3 asignar su valor   */
    /* un p asignar su valor   */

    /* meter la imagen en el div */
    /* meter el div en el artigle */
    /* meter el h3 y el p en el article */

    /* añadir el artícle fragmento */
    /* dejo de recorrer el array */

    /* añadir el fragmento al div flexContainer */

}
const pintarDestinos = {

}



/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
// pintarCards()