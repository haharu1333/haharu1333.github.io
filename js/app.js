var carrot = 0;
var attack = 0;
var resis = 0;
var critchance = 0;
var critdamage = 0;
var all = parseInt(10);

function update() {
  all = parseInt(all);
  document.querySelector("#hoduCount").value = carrot.toLocaleString();
  document.querySelector("#needpoint-1").innerHTML= "요구 포인트 : "+parseInt(all);
  document.querySelector("#needpoint-2").innerHTML= "요구 포인트 : "+parseInt(all);
  document.querySelector("#needpoint-3").innerHTML= "요구 포인트 : "+parseInt(all);
  document.querySelector("#needpoint-4").innerHTML= "요구 포인트 : "+parseInt(all);
  document.querySelector("#nowAttack").innerHTML= "공격력 : +"+attack;
  document.querySelector("#nowResis").innerHTML="방어력 : +"+resis;
  document.querySelector("#nowCritChance").innerHTML="치명타 확률 : +"+critchance+"%";
  document.querySelector("#nowCritDamage").innerHTML="치명타 피해 : +"+critdamage+"%";
}

function add(){
  carrot = carrot + 1;
  update()
}


function buyAttack(){
  if (carrot >= all){
    carrot = carrot - all;
    attack = attack + 1;
    all = all*1.5;
  } else {
    alert ("소지한 포인트가 부족합니다.");
  }
  update()
}
function buyResis(){
  if (carrot >= all){
    carrot = carrot - all;
    resis = resis + 1;
    all = all*1.5;
  } else {
    alert ("소지한 포인트가 부족합니다.");
  }
  update()
}


function save(){
  alert("저장에 성공했습니다.")
  localStorage.setItem("carrot",carrot);
  localStorage.setItem("gold",gold);
  localStorage.setItem("silver",silver);
}

function load(){
  alert("불러오기에 성공했습니다.")
  carrot = localStorage.getItem("carrot");
  carrot = parseInt(carrot);
  gold = localStorage.getItem("gold");
  gold = parseInt(gold);
  silver = localStorage.getItem("silver");
  silver = parseInt(silver);
  update()
}
