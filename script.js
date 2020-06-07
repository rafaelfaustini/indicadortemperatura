var h = 10
var apikey = 'aa1220301e053325a145f304dd01622f';
var url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apikey}`;
var dados = [];

function preload() {
   axios
    .get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
        })
    .then(response => {
      dados = response
    })
    .catch(error => {
      console.log(error)
      this.errored = true
    })

   // loadJSON(url, getDado, 'jsonp')
  }
function getDado(data){
    console.log(data);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(dados)
    background(0);
    noStroke();
    fill(102);
  }
  
  function draw() {
    rect((width/2)-27.5, height/2, 55, h);
  }