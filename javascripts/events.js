$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

  let btnImprimir = document.getElementById('btnImprimir');
  let avanca = document.getElementById('avanca');
  let tela1 = document.getElementById('tela1');
  btnImprimir.addEventListener('click', fnImprimir);
  avanca.addEventListener('click', fnAvanca);

  function fnAvanca(){
    tela1.style.opacity = '1';
    tela1.style.display = 'block';
    let titulo = document.querySelectorAll('#tela1 h4')[0];
    setTimeout(function(){
      console.log('teste')
       titulo.scrollIntoView();
     }, 200);
  }

  function fnImprimir(){
    window.print();
  }


})
