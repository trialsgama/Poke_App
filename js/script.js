function agregarCompartir() {
    //var input = '<input type="hidden" name="nasa_id" value="' + nasa_id + '">'
    var boton = '<button class="btncompartir" type="submit">Compartir</button>';
    var form = '<form action="compartir.html" method="get">' + boton + '</form>';
    $(form).appendTo('.resp');

}