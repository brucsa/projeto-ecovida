//EXIBIR MENU HAMB
function exibeMenu() {
    //CAPTURA O MENU E ESCONDE
    hamburguerIcon.style.display = "none"
    //APARECE O X (FECHAR) AO CLICAR
    fecharIcon.style.display = "inline"
    // APARECE OS LINKS
    menu.style.display = "block"
}

function ocultaMenu() {
    //APARECE O MENU AO CLICAR
    hamburguerIcon.style.display = "inline"
    //CAPTURA NO X E ESCONDE
    fecharIcon.style.display = "none"
    // ESCONDE OS LINKS
    menu.style.display = "none"
}

//AO CLICAR NO MENU DO MENU E APARECE LINKS
hamburguerIcon.addEventListener("click", exibeMenu)
//FECHA O MENU AO CLICAR
fecharIcon.addEventListener("click", ocultaMenu)