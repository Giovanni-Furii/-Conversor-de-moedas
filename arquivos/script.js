const body = document.querySelector('body');
body.setAttribute('onload' , 'request()')

//tag main
const main= document.createElement('main');
main.setAttribute('id' , 'tela principal');

//Titulo
const titulo = document.createElement('h1');
titulo.innerHTML = 'Convert to me';
titulo.setAttribute('id','pagTitulo')
const header = document.createElement('header');
header.innerHTML='<img src="./arquivos/logoprova2.png" class="img" alt="logo"/>';
header.appendChild(titulo);
body.appendChild(header);

//Menu
const menuContainer = document.createElement('div');
menuContainer.setAttribute('id' , 'pagMenu')
menuContainer.classList.add('menu-container');
header.appendChild(menuContainer);

const ul = document.createElement('ul');
menuContainer.appendChild(ul);

const principal = document.createElement('li');
principal.setAttribute('id', 'menu0')
ul.appendChild(principal);
principal.innerHTML='<h3 id="btnPrin" class="principal">Principal</h3>';

var btn1 = document.getElementById("btnPrin");


btn1.addEventListener('click' , function(e){
    el = e.target;
    if(el.classList.contains('principal')){
        var addInicio =document.getElementById("inicio");
        var removeContato =document.getElementById("contContainer");
        var removeSobre =document.getElementById("sobreCont");
        var telaPrincipal =document.getElementById("btnPrin");
        var telaSobre =document.getElementById("btnSob");
        var telaContato =document.getElementById("btnContato");

        addInicio.style.display="flex";
        removeContato.style.display="none"
        removeSobre.style.display = "none";

        telaSobre.style.color="grey"
        telaPrincipal.style.color="red"
        telaContato.style.color="grey"

}})



const sobre = document.createElement('li');
sobre.setAttribute('id' , 'menu1');
ul.appendChild(sobre);
sobre.innerHTML='<h3 id="btnSob" class="sobre" name= "ovo">Sobre</h3>';

var btn2 = document.getElementById("btnSob");


btn2.addEventListener("click" , function(e){
    el = e.target;
    if(el.classList.contains('sobre')){
        var apresentaSobre =document.getElementById("sobreCont");
        var removeContato =document.getElementById("contContainer");
        var removeInicio =document.getElementById("inicio");
        var telaPrincipal =document.getElementById("btnPrin");
        var telaSobre =document.getElementById("btnSob");
        var telaContato =document.getElementById("btnContato");

        apresentaSobre.style.display="flex";
        removeContato.style.display="none"
        removeInicio.style.display="none"
        
        telaSobre.style.color="red"
        telaPrincipal.style.color="grey"
        telaContato.style.color="grey"
    
}})


const faleConosco = document.createElement('li');
faleConosco.setAttribute('id' , 'menu2');
ul.appendChild(faleConosco);
faleConosco.innerHTML='<h3 id="btnContato" class="contato" name= "ovo" >Contato</h3>';

var btn3 = document.getElementById("btnContato");


btn3.addEventListener("click" , function(e){
    el = e.target;
    
    if(el.classList.contains('contato')){
        var apresentaContato =document.getElementById("contContainer");
        var removeSobre =document.getElementById("sobreCont");
        var removeInicio =document.getElementById("inicio");
        var telaPrincipal =document.getElementById("btnPrin");
        var telaSobre =document.getElementById("btnSob");
        var telaContato =document.getElementById("btnContato");

        apresentaContato.style.display="flex";
        removeInicio.style.display="none";
        removeSobre.style.display = "none";

        telaSobre.style.color="grey"
        telaPrincipal.style.color="grey"
        telaContato.style.color="red"
    
}})


//Modo escuro
const dark = document.createElement('li');
dark.setAttribute('id' , 'chk');
ul.appendChild(dark);
dark.innerHTML='<input type="checkbox">DARK</input>'

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

// Cria a div inicio
const inicio = document.createElement('div');
inicio.setAttribute('id' , 'inicio')
inicio.classList.add('inicio');
body.appendChild(inicio);

//cria div remover 
const remover= document.createElement('div');
remover.setAttribute('id' , 'remover')
remover.classList.add('remover')
inicio.appendChild(remover)

// Cria a div input-container
const inputContainer = document.createElement('div');
inputContainer.classList.add('container');
remover.appendChild(inputContainer);

const inputForm = document.createElement('form');
inputForm.setAttribute('id', 'input-form');
inputContainer.appendChild(inputForm);

const inputNumber = document.createElement('input');
inputNumber.setAttribute('type', 'number');
inputNumber.setAttribute('id', 'input-number');
inputNumber.setAttribute('placeholder', 'R$');
inputForm.appendChild(inputNumber);

//Cria div radio-container
const radioContainer=document.createElement('div')
radioContainer.classList.add('radio-container')
remover.appendChild(radioContainer)

const inputEuro = document.createElement('input');
inputEuro.setAttribute('type' , 'radio');
inputEuro.setAttribute('id' , 'radio0');
inputEuro.setAttribute('name' , 'r');
radioContainer.innerHTML='<label for "euro" >Euro</label>';
radioContainer.appendChild(inputEuro);

//cria div dollar-container
const dollarContainer=document.createElement('div')
dollarContainer.classList.add('dollar-container')
remover.appendChild(dollarContainer)

const dollar = document.createElement('input')
dollar.setAttribute('type' , 'radio');
dollarContainer.innerHTML='<label for "dollar" >Dólar</label>';
dollar.setAttribute('id' , 'radio1');
dollar.setAttribute('name' , 'r');
dollarContainer.appendChild(dollar);

//cria div libra container
const libraContainer=document.createElement('div')
libraContainer.classList.add('libra-container')
remover.appendChild(libraContainer)

const libra = document.createElement('input')
libra.setAttribute('type' , 'radio');
libraContainer.innerHTML='<label for "libra" >Bitcoin</label>';
libra.setAttribute('id' , 'radio2');
libra.setAttribute('name' , 'r');

libraContainer.appendChild(libra);



// Cria a div botoes
const botoes=document.createElement('form')
botoes.classList.add('botoes')
remover.appendChild(botoes)

const converter = document.createElement('button');
converter.setAttribute('type', 'submit');
//converter.setAttribute("onclick",'getSeleciona()');
converter.setAttribute('id','btnConverter');
converter.innerText = 'Converter';
botoes.appendChild(converter);

const limpar = document.createElement('button');
limpar.setAttribute('type', 'reset');
limpar.setAttribute('id' , 'btnLimpar')
limpar.innerText = 'Limpar';
botoes.appendChild(limpar);

//botao volta ao topo
const topoDiv=document.createElement('div');
botoes.appendChild(topoDiv)

const topo = document.createElement('div');
topo.setAttribute('class' , 'topo')
topoDiv.appendChild(topo)
topo.innerHTML='<button onclick="topFunction()" id="myBtn" title="Go to top">↑</button>'


let mybutton = document.getElementById("myBtn");


document.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


limpar.addEventListener('click', function() {
    inputNumber.focus()
    inputNumber.value = ''
})

//Cria a div resultado
const res=document.createElement('div')
res.classList.add('res')
remover.appendChild(res)

const pular = document.createElement('br')
res.appendChild(pular)

const animei = document.createElement('div');
animei.setAttribute('id' , 'animaDiv')
remover.appendChild(animei)

const animei1= document.createElement('div');
animei.appendChild(animei1);

const animei2= document.createElement('div');
animei.appendChild(animei2);

animei1.innerHTML='<img src="./arquivos/bitcoin.png" alt="bit" class="animar" id="bitAnima"/>';
animei2.innerHTML='<img src="./arquivos/dolar.png" alt="Moeda Estrangeira" class="animar" id="dolarAnima"/>';


// classe sobre 
const sobreConteudo = document.createElement('div');
sobreConteudo.setAttribute('id' , 'sobreCont')
sobreConteudo.classList.add('sobreCont');
body.appendChild(sobreConteudo);

const textoSobre = document.createElement('p');
textoSobre.setAttribute('id', 'texto-sobre');
textoSobre.setAttribute('class' , 'sobre');
textoSobre.innerText='Esta pagina foi desenvolvida com o intuito de auxiliar na conversãodo real para outras moedas , a pagina possui uma api que atualiza o valor das moedas a cada 30 segundos. A pagina possui botões que trocam o conteudo sem dar reload na pagina , possui um botão que volta ao topo da pagina. '
sobreConteudo.appendChild(textoSobre);

const imgSobre = document.createElement('div')
imgSobre.setAttribute('id' , 'imgsobre')
imgSobre.innerHTML="<img src='./arquivos/sobrelogo.png' alt='sla'/>"
textoSobre.appendChild(imgSobre);

// Div contContainer

const contatoMen=document.createElement('div')
contatoMen.setAttribute('id' , 'contContainer')
contatoMen.classList.add('contCont');
body.appendChild(contatoMen);


const textoCont = document.createElement('p');
textoCont.setAttribute('id', 'texto-contato');
textoCont.setAttribute('class' , 'sobreCont');
contatoMen.innerHTML="<img src='./arquivos/zap.png' class='zap' alt='zap'/>"
textoCont.innerText='whatsapp empresa desenvolvedora : 19 40028922'
contatoMen.appendChild(textoCont);

const git = document.createElement('div');
git.setAttribute('id' , 'gitdiv');
contatoMen.appendChild(git);

const gitimg=document.createElement('p')
git.appendChild(gitimg)
gitimg.innerHTML="<img src='./arquivos/git-img.jpg' class='git' alt='git'/>"

const git2 = document.createElement('div');
git2.setAttribute('id' , 'gitdiv2');
git2.innerHTML='<a href= "https://github.com/Giovanni-Furii">LINK GITHUB</a>'
contatoMen.appendChild(git2);


function getSeleciona(){
    
 
    var selecionado = -1;
    for(var i=0;i<3;i++) {
        var element = document.getElementById('radio'+i);
        console.log(element)

        if(element.checked === true) selecionado = i; 
           
    }

    if(selecionado != -1){
        if(selecionado == 0){
            converta1();
        }
        if(selecionado == 1){
            converta2();
        }
        if(selecionado == 2){
            converta3();
        }

    }
}


async function converta1() {
    var realValor =document.getElementById('input-number');
    var api = valor['EURBRL']['bid'];
    realValor2=Number(realValor.value) / api;
    realValor3=realValor2.toFixed(2)
   res.innerHTML=`<p>Conertendo temos : ${realValor3} € </p>`;
   
}

async function converta2() {
    var realValor =document.getElementById('input-number');
    var api = valor['USDBRL']['bid'];
    realValor2=Number(realValor.value) / api;
    realValor3=realValor2.toFixed(2)
   res.innerHTML=`<p> Convertendo temos: ${realValor3} US$ </p>`;
   
}

async function converta3() {
    var realValor =document.getElementById('input-number');
    var api = valor['BTCBRL']['bid'];
    realValor2=Number(realValor.value) / api;
    realValor3=realValor2.toFixed(2)
   res.innerHTML=`<p>Convertendo temos : ${realValor3} ฿ </p>`;
   
}

function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

botoes.addEventListener('submit',  (ev) => {
    ev.preventDefault();
    getSeleciona()
});


async function request(type){

    var msgRecebida = "";

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var a = await fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`, requestOptions)

     valor = await a.json();
 

    console.log(valor['USDBRL'])

    
    console.log(valor['USDBRL']['bid'])
    console.log(valor['EURBRL']['bid'])
    console.log(valor['BTCBRL']['bid'])
      
    return msgRecebida;

}
