function toggleTheme() {
    //ALTERA TEMA DO BODY
    const body = document.body;

    const currentTheme = body.classList.contains("w3-light-grey")
      ? "w3-light-grey"
      : "w3-dark-grey";
    const newTheme =
      currentTheme === "w3-light-grey" ? "w3-dark-grey" : "w3-light-grey";
    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    //ALTERA TEMA DO CARD À ESQUERDA
    const cardLeft = document.getElementById("cardLeft");
    const temaAtualCardLeft = cardLeft.classList.contains("light-theme-card")
      ? "light-theme-card"
      : "dark-theme-card";
    const novoTemaCardLeft =
      temaAtualCardLeft === "light-theme-card"
        ? "dark-theme-card"
        : "light-theme-card";
    cardLeft.classList.remove(temaAtualCardLeft);
    cardLeft.classList.add(novoTemaCardLeft);

    //ALTERA TEMA DOS CARD À DIREITA
    const temaClaroTexto = document.getElementsByClassName("w3-card");
    for (const tema of temaClaroTexto) {
      const temaAtual = tema.classList.contains("w3-white")
        ? "w3-white"
        : "dark-theme-card";

      const novoTema =
        temaAtual === "w3-white" ? "dark-theme-card" : "w3-white";
      tema.classList.remove(temaAtual);
      tema.classList.add(novoTema);
    }

    const h2TemaClaroFundo = document.getElementsByClassName("w3-padding-16");
    for (const tema of h2TemaClaroFundo) {
      const temaAtual = tema.classList.contains("w3-text-grey")
        ? "w3-text-grey"
        : "dark-theme-card";
      const novoTema =
        temaAtual === "w3-text-grey" ? "dark-theme-card" : "w3-text-grey";
      tema.classList.remove(temaAtual);
      tema.classList.add(novoTema);
    }

    //ALTERA ÍCONE
    const iconeSpan = document.getElementById("icone");
    if (newTheme === "w3-light-grey") {
      iconeSpan.textContent = "🌙";
      iconeSpan.title = "Mudar para Tema Escuro";
    } else {
      iconeSpan.textContent = "☀️";
      iconeSpan.title = "Mudar para Tema Claro";
    }
  }    