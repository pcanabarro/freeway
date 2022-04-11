let xCarros = [630,630,630,630,630,630,830,850,890,930];
let yCarros = [40,96,150,210,270,318,40,150,318,40];
let velCarros = [2,2.5,3.2,5,3.5,2.2,2,3.2,2.2,2];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40)
  }
}

function movimentarCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velCarros[i];  }
}

function voltaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;}  }
}

function passouTela(xCarros){
  return xCarros < -50;
}