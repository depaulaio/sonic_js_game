const sonic = document.querySelector('.sonic') //atribui a constante o novo elemento
const eggman = document.querySelector('.eggman')
const fundo = document.querySelector('.fundo')

const jump = () => {
  //funçao  anonima para chamar o jump
  sonic.classList.add('jump') //adiciona o junp dentro do sonic
  sonic.src = './files/Sonic-Jump.gif' //utiliza o arquivo Sonic-Jump.gif no jump

  setTimeout(() => {
    //pega a execução e determina o seu tempo
    sonic.classList.remove('jump') //remove o jump de dentro do sonic
    sonic.src = './files/Sonic.gif' //utiliza o arquivo Sonic.gif (normal)
  }, 900)
}

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft //para posição esquerda encosta no sonic
  const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '') //acessa o bottom para verificar a posição do sonic convertendo de pixel para números.

  if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
    //faz a estrutura condicional para verificar as posições do Sonic e do Eggman
    eggman.style.animation = 'none' //retira animação atribuindo a 'none'.
    eggman.style.left = `${eggmanPosition}px` //eggman par onde ele bateu no Sonic acessando a posição do eggman.

    sonic.style.animation = 'none'
    sonic.src = './files/Sonic-Loss.gif' //imagem chamada assim que a condicional passar Sonic-Loss
    sonic.style.width = '256px'

    fundo.src = './files/GameoverSMB-1.png' //imagem chamada troca do fundo do game assim que o Sonic perder
  }
}, 10) //10 é o intervalo de tempo do looping

document.addEventListener('click', jump) //pega qualquer botão do teclado ou mouse e faz com que ele se torne um evento
