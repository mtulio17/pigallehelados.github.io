import sabores from './sabores.json' assert {type:'json'};
import productos from './productos.json' assert {type:'json'};
import locales from './locales.json' assert {type:'json'};
const divSabores = document.getElementById('divSabores');
const cardsDiv = document.getElementById('productsCards');
const divPadre = document.getElementById('locales');


const drawTable = () => {
    sabores.forEach(sabores=>{
        divSabores.innerHTML +=  `
        <div class="col-sm-12 col-md-4">
            <h5 class="color5">${sabores.titulo}</h5>
                <ul>
                    <li>
                         <p class="color5">${sabores.sabores}.
                         </p>
                  </li>
                <ul>
        <div>
        `
    })
    console.log(sabores);

}

drawTable()

const productsCards = () =>{
    console.log(productos);
    productos.forEach(productos =>{
        if(productos.id < 10){
            let palitos = document.getElementById('producto1');
            palitos.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 my-4">
                        <div class="card mx-auto">
                            <img src="${productos.imagen}" class="card-img-top" alt="${productos.imagen}">
                            <div class="card-body">
                                <h4 class="card-title color5">${productos.nombre}</h4>
                                <p class="color5">${productos.detalle}</p>
                            </div>
                        </div>
                    </div>
            `
        }else{
            let familiares = document.getElementById('producto2');
            familiares.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3 my-4">
                        <div class="card mx-auto">
                            <img src="${productos.imagen}" class="card-img-top" alt="${productos.imagen}">
                            <div class="card-body">
                                <h4 class="card-title color5">${productos.nombre}</h4>
                                <p class="color5">${productos.detalle}</p>
                            </div>
                        </div>
                    </div>

            `

        }
        console.log(productos);
    } )
}

productsCards()


const draw = (valor) => {
    console.log(valor);
}

const divLocales = () => {
    locales.forEach (locales => {
        divPadre.innerHTML += `
        <div class="text-center divLocales">
            <a href="${locales.mapa}" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-geo-alt-fill color5" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <h4 class="color5">${locales.localidad}</h4>
                <p class="color5" >${locales.direccion}</p>
            </a>
        </div>
         `
    } )  
}
divLocales()