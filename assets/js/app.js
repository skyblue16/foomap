$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    });

   
    $(document).ready(function () {
        $('select').material_select();
    });
   
    var cont = $('#container');

    $('#categorias').on('change', function () {
        var selection = $('#categorias').val();
        //cont.text(selection);
        if (selection === "Italiano") {
            cont.html('<p class="parrafo">Hola esto es un append Chino</p><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal1"  src="img/pizza.jpg"/><img class="responsive-img" src="http://www.viajaraitalia.com/wp-content/uploads/2009/09/lasagna.jpg"/>');
        }
        if (selection === "Extranjeras") {
            cont.html('<p>Hola esto es un append Venezolano</p> <img class="responsive-img waves-effect waves-light  modal-trigger"  href="#modal1" src="https://img.pystatic.com/header-backgrounds/mobile/chinese-1.jpg"/> <img class="responsive-img" src="https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/Descubre-por-que-la-comida-mexicana-y-el-alcohol-te-pueden-ayudar-a-perder-peso-1.jpg?itok=j5uPVFtv"/>');
        }
        if (selection === "Comida-Rapida") {
            cont.html('<p>Hola esto es un append Árabe</p> <img class="responsive-img" src="https://www.planetajoy.com/upload/image/673x6731455556838_maaaaaaaaaaaaaac.jpg"/><img class="responsive-img" src="http://www.elpoderdelasideas.com/wp-content/uploads/subway-600x400.jpg"/>');
        }
        if (selection === "Vegano") {
            cont.html('<p>Hola esto es un append Peruano</p> <img class="responsive-img" src="http://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/03/28/Recortada/img_lferro_20170328-122230_imagenes_lv_terceros_el_vergel-kP7B--656x819@LaVanguardia-Web.jpg"/><img class="responsive-img" src="http://cdn1.buuteeq.com/upload/2021553/comedor-2-1.jpg.1920x810_default.jpeg"/>');
        }
    });
    $(".ja").mouseover(function(){
        $("p").show();
    });
    $("img").mouseout(function () {
        $("p").hide();
    });
    $(function () {
        setTimeout(function () {
            $('#splash').fadeOut(500);
        }, 2000);
    });
    

