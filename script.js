// =====================================================
// MENU PARA TELEMÓVEL
// =====================================================
const botaoMenu = document.querySelector('#botao-menu');
const menuPrincipal = document.querySelector('#menu-principal');

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener('click', () => {
    const menuEstaAberto = menuPrincipal.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', menuEstaAberto);
    botaoMenu.setAttribute(
      'aria-label',
      menuEstaAberto ? 'Fechar menu' : 'Abrir menu'
    );
  });

  // Fecha o menu quando uma categoria é escolhida.
  const linksDoMenu = menuPrincipal.querySelectorAll('a');
  linksDoMenu.forEach((link) => {
    link.addEventListener('click', () => {
      menuPrincipal.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
      botaoMenu.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// =====================================================
// ANO AUTOMÁTICO NO RODAPÉ
// =====================================================
const anoAtual = document.querySelector('#ano-atual');
if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}
