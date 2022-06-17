// Funciones que se ejecutan al cargar la página



function my_function() {
  num = 4;
  review = 0;
  slide = new Array(num);
    date_today();
    go();
    init_view(num, review);
}

if (window.attachEvent) {window.attachEvent('onload', my_function);}
else if (window.addEventListener) {window.addEventListener('load', my_function, false);}
else {document.addEventListener('load', my_function, false);}

function date_today() {
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    document.getElementById("date").innerHTML = d + " de " + months[m] + " de " + y;
}

let reviews = document.getElementsByClassName("collumn");

function init_view(num, review) {
    no_view();
    for (let i = review; i < review + num; i++) {
        reviews[i].style.display = "inline-block";
    }
}

function no_view() {
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
}

let rev = 0;

window.addEventListener('resize', go);

function go(){
    if (document.documentElement.clientWidth > 1200) {
        num = 4;
    }
    else if (document.documentElement.clientWidth > 900) {
        num = 3;
    }
    else if (document.documentElement.clientWidth > 600) {
        num = 2;
    }
    else {
        num = 1;
    }
    //console.log("review = " + review);
    //console.log("num = " + num);
    slide = new Array(num);
    init_view(num, review);
}

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

function carousel(review) {

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }

    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }

    no_view();

    // Calculo cuantos me quedan a la derecha
    aux = reviews.length - review - 1;

    // Sime quedan por lo menos num + 1 a la derecha los muestro
    if (aux > num - 2) {
        j = 0;
        for (i = review; i < review + num; i++) {
            slide[j] = i;
            j++;
          }
    }
    // Si me quedan menos de num + 1
    else {
        // muestro los que me quedan
        j = 0;
        for (i = review; i < reviews.length; i++) {
            slide[j] = i;
            j++;
        }
        // muestro del principio los que me faltan para llegar a 4
        for (k = (review - num + aux); k < review - 1; k++) {
            /*console.log("k = " + k);*/
            slide[j] = k;
            j++;
        }
    }
    /*console.log("slide = " + slide);*/
    for (i = 0; i < slide.length; i++) {
        index = slide[i];
        reviews[index].style.display = "inline-block";
        document.getElementById(index.toString()).style.order = i.toString();
    }
}

//check for navigation time API support
/*
if (window.performance) {
  console.info("window.performance work's fine on this browser");
}*/
// Detecting refresh
if (performance.navigation.type == 1) {
    console.info( "This page is reloaded" );
    //console.log("num = " + num);
    //console.log("review = " + review);

    //go();

}
