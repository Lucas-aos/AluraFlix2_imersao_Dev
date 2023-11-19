//listas 

var listaNomes = ['Kingdom of the Planet of the Apes','Madam Web','Napoleon',]
var listaImg = ['https://s.yimg.com/ny/api/res/1.2/2sumt3J4gz_rXAYEJjtEZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/comingsoon_net_477/3ad97cf36c768e78c2395869d0237772','https://i.pinimg.com/736x/20/6d/59/206d5998f3a61661dc744e9a0f73b0fb.jpg','https://macmagazine.com.br/wp-content/uploads/2023/07/10-napoleon-trailer.jpg',]
var listaTrailer = ['https://www.youtube.com/embed/NQ_HvTBaFoo?si=NfYCvrNvFrtMx3Q8','https://www.youtube.com/embed/s_76M4c4LTo?si=D52-Qkm85b0tF-0I','https://www.youtube.com/embed/LIsfMO5Jd_w?si=kWF5pLoSrdMis5I8',]
 
//função de adicionar filmes
function adicionarFilme(){
  var novoNome = document.getElementById('nome').value;
  var novaImg = document.getElementById('imagem').value;
  var novoTrailer = document.getElementById('trailer').value;

//condições de aceitação dos inputs
  if (novoNome === ""){
    alert ("Coloque o nome do Filme")
    
  } else if (novaImg === ""){
    alert ("Coloque o Poster do Filme")     
    
  } else if  (novoTrailer === ""){
    alert ("Coloque o link do Trailer")
        
  } else if (novaImg.endsWith('jpg') || novaImg.endsWith('jpeg') && novoTrailer.includes('embed')){   //condição genérica de aceitação jpg ou jpeg
    document.getElementById('Alerta').innerHTML='';
    listaNomes.push(novoNome);
    listaImg.push(novaImg);
    listaTrailer.push(novoTrailer);
       
    reload();                                                                         //uma vez aceitos os inputs, inicia-se a função de carregar os dados
    limparDados();                                                                    // limpa-se os inputs 
        
  } else {
    document.getElementById('Alerta').innerHTML = "Favor inserir formato de Imagem .JPG | .JPEG.";
  }
}


//principal função de adição dos inputs
function reload(){ 
  var elementoListaFilmes = document.getElementById('listaFilmes')
  var botaoRemover=document.getElementsByClassName('remover')
  elementoListaFilmes.innerHTML = '';  
  
for (var i = 0; i < listaNomes.length; i++) {
  
  var filmeDiv = document.createElement("div");
      filmeDiv.classList.add("filme");   //insere classe div
  
  var titulo = document.createElement('h2'); //insere classe título
      titulo.className = 'titulo';
      titulo.textContent = listaNomes[i];
      elementoListaFilmes.appendChild(titulo);

  var link = document.createElement('a'); //insere classe âncora e associa à imagem, permitindo também que abra em outra janela
      link.href = listaTrailer[i];
      link.target = '_blank';

  var imagem = document.createElement('img');
      imagem.src = listaImg[i];
  
      link.appendChild(imagem);  //associa o link do trailer à imagem
  
  var botaoRemover = document.createElement('button');
      botaoRemover.classList.add('remover');
      botaoRemover.textContent = 'Remover Filme';
      botaoRemover.addEventListener('click', removerFilme(i,listaNomes[i])); //fornece referência de onde será excluído os dados
       
  
      filmeDiv.appendChild(titulo);  //associa o título ao Div
      filmeDiv.appendChild(link);   //associa o Link ao Div
      filmeDiv.appendChild(botaoRemover); //associa o botão de Remover ao Div
      elementoListaFilmes.appendChild(filmeDiv); //associa o Div ao elemento
}
}

//função de remoção de dados
function removerFilme(index,novoNome){ //busca a referência e remove na ordem determinada
  return function(){
   listaNomes.splice(index, 1);
   listaImg.splice(index, 1);
   listaTrailer.splice(index, 1);
   reload();
   limparDados();
  }
}

 function adicionarEventos() {
  var botaoAdicionar = document.getElementById('adicionar');
  botaoAdicionar.addEventListener('click', adicionarFilme);
}

function limparDados(){
  document.getElementById('nome').value = '';
  document.getElementById('imagem').value = '';
  document.getElementById('trailer').value = '';
}

reload();