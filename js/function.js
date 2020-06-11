//Função para adicionar a barra inferior e cor no menu selecionado
$(function() {
    $('nav ul li a').click(function() {
        $('nav ul li').removeClass('selected')
        $(this).parent().addClass('selected')
    })
})

//Função para mostrar o menu
$(function() {
    $('.menu-icon').click(function() {
        $('.menu-M ul').slideToggle()
    })
})