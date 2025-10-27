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
    }
]
const arrayViajes = [
    {
        id: 1,
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'Carta 1',
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta alias quis optio ipsa, porro quae mollitia non? Similique, eaque"
    },
    {
        id: 2,
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'Carta 2',
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta alias quis optio ipsa, porro quae mollitia non? Similique, eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta alias quis optio ipsa, porro quae mollitia non? Similique, eaque"
    },
    {
        id: 3,
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'Carta 3',
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam soluta alias quis optio ipsa, porro quae mollitia non? Similique, eaque Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 4,
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'Carta 4',
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        id: 5,
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'Carta 5',
        texto: "Lorem ipsum dolor sit amet. "
    }
    ,
    {
        id: 6,
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'Carta 6',
        texto: "Lorem ipsum "
    }
]
const arrayDestinos = {}


/* EVENTOS */

/* FUNCIONES */
const aleatorio = () => {
    const indice = Math.round(Math.random()*(7-0)+0);
    return indice
}

const pintarBanner = () => {

    const indice = aleatorio()
    const elemento = arrayBanners[indice]

    // console.log(elemento.alt)
    // console.log(elemento.src)

    imagenBanner.setAttribute('src', elemento.src)
    imagenBanner.alt = elemento.alt
    // console.log(imagenBanner)

}

const pintarCards = ()=>{

    ///* recorrer los elementos del array/*
    for (var i = 0; i < arrayViajes.length; i++) {
        
        ///* por cada elemento crear:/*
        /* un article   */
        let tagArticle=document.createElement("article");
        /* un div   */
        let tagDiv=document.createElement("div");
        /* una imgen asignando sus atributos   */
        let tagDivImg=document.createElement("img")
        tagDivImg.setAttribute("src",arrayViajes[i].src);
        tagDivImg.setAttribute("alt",arrayViajes[i].alt);
        
        /* un h3 asignar su valor   */
        let tagTitulo3=document.createElement("h3");
        tagTitulo3.textContent="Viaje "+arrayViajes[i].id;

        /* un p asignar su valor   */
        let tagP=document.createElement("p");
        tagP.textContent=arrayViajes[i].texto;

        /* meter la imagen en el div */
        tagDiv.append(tagDivImg);
        /* meter el div en el artigle */
        tagArticle.append(tagDiv);
        /* meter el h3 y el p en el article */
        tagArticle.append(tagTitulo3);
        tagArticle.append(tagP);

        /* añadir el artícle fragmento */
        let fragment = document.createDocumentFragment();
        fragment.append(tagArticle);

        //console.log(tagArticle);

        /* dejo de recorrer el array */


        /* añadir el fragmento al div flexContainer */
        document.querySelector(".flexContainer").append(fragment)
    }
        

    

}

const pintarDestinos = ()=> {

    //Array para nombre destinos
    let nombreDestinos=["Sevilla","Malaga","Bilbao", "Madrid","Barcelona","Valencia"]

    let fragment = new DocumentFragment();

    //Append de nombre destinos en etiqueta select
    for (var i = 0; i < nombreDestinos.length; i++) {

        //crea etiqueta option
        let tagOption=document.createElement("option")
        //setea el nombre del destino como el atributo value
        tagOption.setAttribute("value",nombreDestinos[i])
        //El texto a mostrar al usuario
        tagOption.textContent=nombreDestinos[i];
        //insercion de tag option dentro del fragmento
        fragment.append(tagOption);
    }

    /* añadir el fragmento al div flexContainer */
    document.querySelector("#destinos div select").append(fragment)
}

/* INVOCACIÓN A LAS FUNCIONES */
pintarBanner()
console.log("Numero indice aleatorio para la imagen: "+aleatorio())
pintarCards();
pintarDestinos();