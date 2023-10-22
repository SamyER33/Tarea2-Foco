const cambiarImagenFoco = (img) => {
  document.getElementById('img-foco').src = img
}

window.onload = () => {
  const btnEncender = document.getElementById('btn-encender-foco')
  const btnApagar   = document.getElementById('btn-apagar-foco')

  btnEncender.addEventListener('click', () => cambiarImagenFoco('assets/foco-on.png'))
  btnApagar.addEventListener('click',   () => cambiarImagenFoco('assets/foco-off.png'))
}
