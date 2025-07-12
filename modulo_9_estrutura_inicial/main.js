$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideToggle();
});

$('#botao-cancelar').click(function() {
    $('form').slideUp();
});

$('form').on('submit', function(event) {
    event.preventDefault(); // Impede o envio do reset do formulário
    const enderecoNovaImagem = $('#endereço-imagem-nova').val();
    const novoItem = $('<li></li>');
    $(`<img scr="${enderecoNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-images-link">
        <a href="${enderecoNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
})
})

