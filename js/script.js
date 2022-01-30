// Script para expansão e redução da barra lateral

var menu = window.document.getElementById('menu') // Botão de Menu


// Elementos gerais da página a serem alterados
var barra = window.document.getElementById('barra-lateral')
var corpo = window.document.getElementById('corpo-pag')
var prod = window.document.querySelectorAll('div.box-prod')
var item = window.document.getElementById('item-')
var img_prod = window.document.getElementById('imgL')

// Elementos da barra lateral a serem alterados
var inicio = window.document.getElementById('inicio')
var perfil = window.document.getElementById('perfil')
var streaming = window.document.getElementById('streaming')
var carrinho = window.document.getElementById('carrinho')
var categ = window.document.getElementById('categ')
var config = window.document.getElementById('config')

// Ao clicar no botão de menu a função controle será ativada
menu.onclick = controle

function controle(){
    
    // Verificação do tamanho da barra lateral para definir se ela irá expandir ou comprimir
    if (barra.style.width === "160px") {
        diminuir()
    } else{
        aumentar()
    }
    
    // Comprime a barra lateral e altera a estrutura da página para se adequar a isso
    function diminuir(){
        barra.style.width = "50px"
        corpo.style.width = "97%"
        corpo.style.marginLeft = "60px"
        inicio.innerHTML = '<abbr title="Início"><a href="pagina-inicial.html"><img src="../imagens/casa.png" alt="Imagem da Home"></a></abbr>'
        perfil.innerHTML = '<abbr title="Perfil"><a href="login.html"><img src="../imagens/perfil.png" alt=""></a></abbr>'
        streaming.innerHTML = '<abbr title="Streaming"><a href="streaming.html"><img src="../imagens/livro-fechado-objeto-preto.png" alt=""><p></p></a></abbr>'
        carrinho.innerHTML = '<abbr title="Carrinho"><a href="carrinho.html"><img src="../imagens/contorno-do-simbolo-da-interface-comercial-do-carrinho-de-compras.png" alt=""><p></p></a></abbr>'
        categ.innerHTML = '<abbr title="Categorias"><a href="#"><img src="../imagens/menu-de-pontos.png" alt=""><p></p></a></abbr>'
        config.innerHTML = '<abbr title="Configurações"><a href="#"><img src="../imagens/botao-de-roda-dentada-de-configuracoes.png" alt=""></a></abbr>'
        inicio.style.width = "50px"
        perfil.style.width = "50px"
        streaming.style.width = "50px"
        carrinho.style.width = "50px"
        categ.style.width = "50px"
        config.style.width = "50px"
        img_prod.style.marginLeft = "120px"
        item.style.marginLeft = "50px"
    }

    // Expande a barra lateral e altera a estrutura da página para se adequar a isso
    function aumentar(){
        barra.style.width = "160px"
        corpo.style.width = "88%"
        corpo.style.marginLeft = "170px"
        inicio.innerHTML = '<abbr title="Início"><a href="pagina-inicial.html"><img src="../imagens/casa.png" alt="Imagem da Home"><p>Início</p></a></abbr>'
        perfil.innerHTML = '<abbr title="Perfil"><a href="login.html"><img src="../imagens/perfil.png" alt=""><p>Perfil</p></a></abbr>'
        streaming.innerHTML = '<abbr title="Streaming"><a href="streaming.html"><img src="../imagens/livro-fechado-objeto-preto.png" alt=""><p>Streaming</p></a></abbr>'
        carrinho.innerHTML = '<abbr title="Carrinho"><a href="carrinho.html"><img src="../imagens/contorno-do-simbolo-da-interface-comercial-do-carrinho-de-compras.png" alt=""><p>Carrinho</p></a></abbr>'
        categ.innerHTML = '<abbr title="Categorias"><a href="#"><img src="../imagens/menu-de-pontos.png" alt=""><p>Categorias</p></a></abbr>'
        config.innerHTML = '<abbr title="Configurações"><a href="#"><img src="../imagens/botao-de-roda-dentada-de-configuracoes.png" alt=""><p>Configurações</p></a></abbr>'
        inicio.style.display = "flex"
        perfil.style.display ="flex"
        perfil.style.width = "160px"
        inicio.style.width = "160px"
        streaming.style.width = "160px"
        carrinho.style.width = "160px"
        categ.style.width = "160px"
        config.style.width = "160px"
        img_prod.style.marginLeft = "10px"
        item.style.marginLeft = "160px"
    }
}
