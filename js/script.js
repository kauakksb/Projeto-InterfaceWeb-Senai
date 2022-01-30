// var menu = window.document.getElementById('menu')
// var clik = null
// menu.addEventListener('click', controle_menu)
// var clik = false
// function controle_menu(){

//     if (clik == false){
//         var clik = true
//         // abrir("250px")
//     } else if( clik == true){
//         clik = null
//         // abrir("50px")
//     }
// }

var clik = false
var apoio = true
// function controle_menu(){
//     while (apoio == true){
//         if (clik == false){
//             abrir("250px")
//             clik = true
//         } else if( clik == true){
//             abrir("50px")
//             clik = false
//             apoio = false
//         }
//     }
while (apoio == true){
    if (clik == false){
        console.log('abrir 250px')
        clik = true
    } else if( clik == true){
        console.log('abrir 50px')
        clik = false
        apoio = false
    }
}

// while (true){
//     if (clik == false){
//         var clik = true
//         // abrir("250px")
//     } else if( clik == true){
//         clik = null
//         // abrir("50px")
//     }
// }


// function abrir(largura){
//     var barra = window.document.getElementById('barra-lateral')
//     barra.style.width = largura
// }
