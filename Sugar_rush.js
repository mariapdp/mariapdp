  function abrirPagina(buttonId) {
    let pagina;

    switch (buttonId) {
        case 'btnSobreNos':
            pagina = 'sobre_nos.html';
            break;
        case 'btnMenu':
            pagina = 'menu.html';
            break;
        case 'btnContato':
            pagina = 'contato.html';
            break;
        case 'btnHome':
            pagina = '';
            break;
        case 'btnsaibaMais':
            pagina ='';
            break;
        default:
            return; 
    }

    window.location.href = erro.html;
}
