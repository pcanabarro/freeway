//Ator:
let xAtor = 100;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30)
}

function movimentarAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3; }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()){
      yAtor += 3; } }
}
function verificarColisao() {
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15)
    if (colisao) {
      voltaSpawn();
      somColisao.play();
      if (pontosMaiorZero()){
        meusPontos -=1; }    }  }
}

function voltaSpawn(){
  yAtor = 368;
}

function incluiPontos(){
  fill(153,50,204);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos,width/2, 26);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos+=1;
    somPonto.play();
    voltaSpawn();  }
}

function pontosMaiorZero(){
  return meusPontos > 0
}

function podeMover(){
  return yAtor < 368;
}