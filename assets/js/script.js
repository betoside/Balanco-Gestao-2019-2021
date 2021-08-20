$(document).ready(function(){

    $('.nav-page a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 20
        }, 500);
    });

    
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 500) {
            document.querySelector('.botao-topo').style.display = 'block';
        } else {
            document.querySelector('.botao-topo').style.display = 'none';
        }
    });

    document.querySelector('.botao-topo').addEventListener('click',()=>{
        jQuery('body,html').animate({
            scrollTop: 0
          }, 800);
         return false;
    });

});


let areas = document.querySelectorAll('.template-titulo .assunto');
let menu = document.querySelector('.menu');
let menuItens = '';
let menuTxt = '';
let menuTxtAtual = '';
for(i in areas){
    if (areas[i].innerHTML != undefined) {
        menuTxt = areas[i].innerHTML;
        if (menuTxt != menuTxtAtual) {
            areas[i].id = 'menu'+i;
            menuItens += `<a href="#${areas[i].id}">${areas[i].innerHTML}</a>`;
        }
    }
    menuTxtAtual = menuTxt;
}
menu.innerHTML = menuItens;
// console.log(menuItens);
// menu.classList.add('show');
// menu.classList.remove('show');

document.querySelector('.menu-mobile').addEventListener('click', ()=>{
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});