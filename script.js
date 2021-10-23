function gjtogglepopup()
{
    document.getElementById("gj").classList.toggle("active");
}

function dltogglepopup()
{
    document.getElementById("dl").classList.toggle("active");
}

function pbtogglepopup()
{
    document.getElementById("pb").classList.toggle("active");
}

function mptogglepopup()
{
    document.getElementById("mp").classList.toggle("active");
}

function rjtogglepopup()
{
    document.getElementById("rj").classList.toggle("active");
}

function uptogglepopup()
{
    document.getElementById("up").classList.toggle("active");
}



// For Quiz

var skip = document.getElementById('skip');
var score = document.getElementById('score');
var total = document.getElementById('total');
var count = document.getElementById('count');

var c = 0;
var scorecount = 0;
var duration = 0;
var qass = document.querySelectorAll('.qas');
var anss = document.querySelectorAll('.qas .ans input');

skip.addEventListener('click',function(){
  step();
})

anss.forEach(function(anssSingle){
  anssSingle.addEventListener('click' , function(){
    setTimeout(function(){
step();

}, 500)

var valid = this.getAttribute("valid");
if(valid == "valid"){
  scorecount += 20;
  score.innerHTML = scorecount;
  total.innerHTML = scorecount ;
}
else{
  scorecount += 20;
  score.innerHTML = scorecount;
  total.innerHTML = scorecount ;

}
  })
});

function step() {
  c += 1;
  for (var i = 0; i < qass.length; i++) {
    qass[i].className = 'qas';
  }
  qass[c].className = 'qas active';
  if (c == 5) {
    skip.style.display = 'none';
  }
}