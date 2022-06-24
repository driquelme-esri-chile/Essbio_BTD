//Ejecutar función en el evento click
document.getElementById("cont_btns").addEventListener("click", open_close_menu);

//Declaramos variables
var body = document.getElementById("body");
var side_menu = document.getElementById("menu_side");
var menu_form = document.getElementById("menu");
var btn_side = document.getElementById("cont_btns");
var title_side = document.getElementById("cont_title");



//Evento para mostrar y ocultar menú

function open_close_menu(){
    body.classList.toggle("body_move");
   

    title_side.classList.toggle("cont_title_move");
    title_side.classList.toggle("cont_title");

    btn_side.classList.toggle("cont_btns_move");
    btn_side.classList.toggle("cont_btns");

    side_menu.classList.toggle("menu__side_move");

    menu_form.classList.toggle("options__menu1");
    menu_form.classList.toggle("options__menu3");
}
