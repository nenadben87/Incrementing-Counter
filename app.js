
const countingFb = document.querySelector('.counting-fb')
const countingYt = document.querySelector('.counting-yt')
const countingTw = document.querySelector('.counting-tw')

let fb = 6800;
let yt = 11300;
let tw = 18300;

const incrementFb = setInterval(() => {
  fb++;

  if(fb > 7200) {
    clearInterval(incrementFb);
  }

  countingFb.innerText = `${fb}`;

},1)

const incrementYt = setInterval(() => {
  yt++;

  if(yt > 11788) {
    clearInterval(incrementYt);
  }

  countingYt.innerText = `${yt}`;
},1);

const incrementTw = setInterval(() => {
  tw++;

  if(tw > 18893) {
    clearInterval(incrementTw);
  }

  countingTw.innerText = `${tw}`
},1)