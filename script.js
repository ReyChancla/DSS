function getElementValueParsedInt (id) {
  return parseInt(document.getElementById(id).value)
}

const defaultAction = () => console.log('Pestaña normal de 30 cm')

const sizeMinimunAlert = () => alert('Cuidado la pestaña debe de ser de 40 cm')

const canalesNumberAction = {
  EB: sizeMinimunAlert,
  BC: sizeMinimunAlert
}

function calcular () {
  const ancho = getElementValueParsedInt('ancho')
  const largo = getElementValueParsedInt('largo')
  const alto = getElementValueParsedInt('alto')
  const x = ancho * 2 + largo * 2
  const y = alto + largo * 2
  const canalesNumberOption = document.getElementById('canales').value

  document.getElementById('planchaSize').innerHTML = x + 'x' + y

  const action = canalesNumberAction[canalesNumberOption] || defaultAction
  action()
}
