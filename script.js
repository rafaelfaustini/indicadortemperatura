var h = 10
var apikey = '';
var url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Riad,SA&units=metric&appid=${apikey}`;

var temperatura = 0;
function mapearTemperatura(t){
    return map(t, -20, 100, 0, windowHeight/2, true);
}
async function preload() {
   const dados = await axios
    .get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
        })
    temperatura = dados.data.main.temp;
    h = mapearTemperatura(temperatura);
  }
function getDado(data){
    console.log(data);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255,255,255);
    noStroke();
    fill(102);
  }
  
  function draw() {
    clear(); 
    rect((width/2)-27.5, (height/2)-(h/2), 55, h);
    textSize(32);
    textAlign(CENTER)

    let x = (width/2)
    let y = (height/2)+(h/2)+30

    if(temperatura < 0){
        y = (height/2)-(h/2)-5
    }
    text(`${str(temperatura)}°C`, x, y);
    if(temperatura >= 0){
        fill(0, 102, 153);
    } else{
        fill(150, 0, 0); 
    }
  }