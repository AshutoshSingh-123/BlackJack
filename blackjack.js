var you=0;
var computer=0;
var win=0;
var lose=0;
var draw=0;

mysound= new sound()

function reset(){


if(you>computer&&you<=21){
  win++;
  document.getElementById('td1').innerHTML=win;
  var x = document.createElement('audio');
  x.src = "./Ta Da-SoundBible.com-1884170640.mp3";
  x.play();
}
if(you<computer&&computer<=21){
  lose++;
  document.getElementById('td2').innerHTML=lose;
var x=document.createElement('audio');
  x.src ="./studio-audience-awwww-sound-fx.mp3";
  x.play();

}
if(you==computer){
  draw++;
  document.getElementById('td3').innerHTML=draw;
}
if(computer>21){
  win++;
  document.getElementById('td1').innerHTML = win;
  var x = document.createElement('audio');
  x.src = "./Ta Da-SoundBible.com-1884170640.mp3";
  x.play();
}
if(you>21){
  lose++;
  document.getElementById('td2').innerHTML = lose;
  var x = document.createElement('audio');
  x.src = "./studio-audience-awwww-sound-fx.mp3";
  x.play();
}


 you=0;
document.getElementById('p1').innerHTML='You:'+you;
 computer=0;
document.getElementById('p2').innerHTML='Dealer:'+computer;
 
var aa= document.getElementById('h11');
aa.style="color.teal"
 aa.innerHTML = "Let's Play";

 var node= document.getElementById("d12");
 while (node.firstChild) {
  node.removeChild(node.firstChild);
 }
 var node= document.getElementById("d13");
 while (node.firstChild) {
  node.removeChild(node.firstChild);

 }


}

function mycards() {
  var x = document.createElement('audio');
  x.src = "./Button-SoundBible.com-1420500901.mp3";
  x.play();
 if(you<21){
  var Forsuits = randomNumber1();
  var Forvalues = randomNumber2();

  var suits = selectSuits(Forsuits);
  var values = selectValues(Forvalues);

  if (suits === "spades") {
    onscreenSpades(values);
  }
  if (suits === "diamonds") {
    onscreenDiamonds(values);
  }
  if (suits === "hearts") {
    onscreenHearts(values);
  }
  if (suits === "clubs") {
    onscreenClubs(values);
  }
  console.log(suits);
  console.log(values);


 }
  // console.log(you);


  // cardOnScreen(selectedCard);

   /*var i1=document.createElement('img');
 i1.style="width:70px;height:100px;margin-top:2px"
 
 
 i1.src = "./Images/spade-8.png";
 var a=document.getElementById('d12');
 
a.appendChild(i1);

var x=1;
var aa=document.getElementById('p1');
aa.innerHTML="You:"+x;
*/
}

function randomNumber1() {
  var num1 = Math.floor(Math.random() * 4);

  return num1;
}
function randomNumber2() {
  var num2 = Math.floor(Math.random() * 13);

  return num2;
}

function selectSuits(n1) {
  var suit = ["spades", "diamonds", "clubs", "hearts"];
  return suit[n1];
}
function selectValues(n2) {
  var value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  return value[n2];
}

function onscreenSpades(v) {
 // console.log(v);
  var d = document.getElementById('d12');

  var para=document.getElementById('p1');

  var head=document.getElementById('h11');
 

  var i2 = document.createElement("img");
  i2.src = "./Images/spade-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/spade-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/spade-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/spade-5.jpg";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/spade-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/spade-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/spade-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/spade-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/spade-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/spade-A.png";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/spade-k.jpg";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/spade-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/spade-j.jpg";
  iJ.classList.add("imgCards");

  if (v === '2') {
   you+=2;
   if(you>21){
    head.style = "color:red";
head.innerHTML='You Busted!';
   }
   para.innerHTML='You:'+you;
    d.appendChild(i2);
  }
  if (v === '3') {
   you += 3;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i3);
  }
  if (v === '4') {
   you += 4;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i4);
  }
  if (v === '5') {
   you += 5;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i5);
  }
  if (v === '6') {
   you += 6;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i6);
  }
  if (v === '7') {
   you += 7;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i7);
  }
  if (v === '8') {
   you += 8;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i8);
  }
  if (v === '9') {
   you += 9;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i9);
  }
  
  if (v === '10') {
   you += 10;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(i10);
  }

  if (v === 'A') {
   you += 11;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(iA);
  }
  if (v === 'K') {
   you += 10;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(iK);
  }
  if (v === 'Q') {
   you += 10;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(iQ);
  }
  if (v === 'J') {
   you += 10;
   if (you > 21) {
    head.style = "color:red";
    head.innerHTML = 'You Busted!';
   }
   para.innerHTML = 'You:' + you;
    d.appendChild(iJ);
  }


}
function onscreenDiamonds(v) {
 var d = document.getElementById('d12');

 var para = document.getElementById('p1');

 var head = document.getElementById('h11');


 var i2 = document.createElement("img");
 i2.src = "./Images/diamond-2.png";
 i2.classList.add("imgCards");

 var i3 = document.createElement("img");
 i3.src = "./Images/diamond-3.png";
 i3.classList.add("imgCards");

 var i4 = document.createElement("img");
 i4.src = "./Images/diamond-4.png";
 i4.classList.add("imgCards");

 var i5 = document.createElement("img");
 i5.src = "./Images/diamond-5.png";
 i5.classList.add("imgCards");

 var i6 = document.createElement("img");
 i6.src = "./Images/diamond-6.png";
 i6.classList.add("imgCards");

 var i7 = document.createElement("img");
 i7.src = "./Images/diamond-7.png";
 i7.classList.add("imgCards");

 var i8 = document.createElement("img");
 i8.src = "./Images/diamond-8.png";
 i8.classList.add("imgCards");

 var i9 = document.createElement("img");
 i9.src = "./Images/diamond-9.png";
 i9.classList.add("imgCards");

 var i10 = document.createElement("img");
 i10.src = "./Images/diamond-10.png";
 i10.classList.add("imgCards");

 var iA = document.createElement("img");
 iA.src = "./Images/diamond-A.jpg";
 iA.classList.add("imgCards");

 var iK = document.createElement("img");
 iK.src = "./Images/diamond-k.jpg";
 iK.classList.add("imgCards");

 var iQ = document.createElement("img");
 iQ.src = "./Images/diamond-q.jpg";
 iQ.classList.add("imgCards");

 var iJ = document.createElement("img");
 iJ.src = "./Images/diamond-j.jpg";
 iJ.classList.add("imgCards");

 if (v === '2') {
  you += 2;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i2);
 }
 if (v === '3') {
  you += 3;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i3);
 }
 if (v === '4') {
  you += 4;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i4);
 }
 if (v === '5') {
  you += 5;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i5);
 }
 if (v === '6') {
  you += 6;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i6);
 }
 if (v === '7') {
  you += 7;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i7);
 }
 if (v === '8') {
  you += 8;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i8);
 }
 if (v === '9') {
  you += 9;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i9);
 }

 if (v === '10') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i10);
 }

 if (v === 'A') {
  you += 11;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iA);
 }
 if (v === 'K') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iK);
 }
 if (v === 'Q') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iQ);
 }
 if (v === 'J') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iJ);
 }

}
function onscreenHearts(v) {
  var d = document.getElementById('d12');

 var para = document.getElementById('p1');

 var head = document.getElementById('h11');


 var i2 = document.createElement("img");
 i2.src = "./Images/heart-2.png";
 i2.classList.add("imgCards");

 var i3 = document.createElement("img");
 i3.src = "./Images/heart-3.png";
 i3.classList.add("imgCards");

 var i4 = document.createElement("img");
 i4.src = "./Images/heart-4.png";
 i4.classList.add("imgCards");

 var i5 = document.createElement("img");
 i5.src = "./Images/heart-5.png";
 i5.classList.add("imgCards");

 var i6 = document.createElement("img");
 i6.src = "./Images/heart-6.png";
 i6.classList.add("imgCards");

 var i7 = document.createElement("img");
 i7.src = "./Images/heart-7.png";
 i7.classList.add("imgCards");

 var i8 = document.createElement("img");
 i8.src = "./Images/heart-8.png";
 i8.classList.add("imgCards");

 var i9 = document.createElement("img");
 i9.src = "./Images/heart-9.png";
 i9.classList.add("imgCards");

 var i10 = document.createElement("img");
 i10.src = "./Images/heart-10.png";
 i10.classList.add("imgCards");

 var iA = document.createElement("img");
 iA.src = "./Images/heart-A.png";
 iA.classList.add("imgCards");

 var iK = document.createElement("img");
 iK.src = "./Images/heart-k.png";
 iK.classList.add("imgCards");

 var iQ = document.createElement("img");
 iQ.src = "./Images/heart-q.jpg";
 iQ.classList.add("imgCards");

 var iJ = document.createElement("img");
 iJ.src = "./Images/heart-j.jpg";
 iJ.classList.add("imgCards");

 if (v === '2') {
  you += 2;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i2);
 }
 if (v === '3') {
  you += 3;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i3);
 }
 if (v === '4') {
  you += 4;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i4);
 }
 if (v === '5') {
  you += 5;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i5);
 }
 if (v === '6') {
  you += 6;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i6);
 }
 if (v === '7') {
  you += 7;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i7);
 }
 if (v === '8') {
  you += 8;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i8);
 }
 if (v === '9') {
  you += 9;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i9);
 }

 if (v === '10') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(i10);
 }

 if (v === 'A') {
  you += 11;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iA);
 }
 if (v === 'K') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iK);
 }
 if (v === 'Q') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iQ);
 }
 if (v === 'J') {
  you += 10;
  if (you > 21) {
   head.style = "color:red";
   head.innerHTML = 'You Busted!';
  }
  para.innerHTML = 'You:' + you;
  d.appendChild(iJ);
 }

}
function onscreenClubs(v) {
  var d = document.getElementById('d12');

  var para = document.getElementById('p1');

  var head = document.getElementById('h11');


  var i2 = document.createElement("img");
  i2.src = "./Images/clubs-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/clubs-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/clubs-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/clubs-5.png";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/clubs-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/clubs-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/clubs-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/clubs-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/clubs-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/clubs-A.jpg";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/clubs-k.png";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/clubs-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/clubs-j.png";
  iJ.classList.add("imgCards");

  if (v === '2') {
    you += 2;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i2);
  }
  if (v === '3') {
    you += 3;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i3);
  }
  if (v === '4') {
    you += 4;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i4);
  }
  if (v === '5') {
    you += 5;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i5);
  }
  if (v === '6') {
    you += 6;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i6);
  }
  if (v === '7') {
    you += 7;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i7);
  }
  if (v === '8') {
    you += 8;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i8);
  }
  if (v === '9') {
    you += 9;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i9);
  }

  if (v === '10') {
    you += 10;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(i10);
  }

  if (v === 'A') {
    you += 11;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(iA);
  }
  if (v === 'K') {
    you += 10;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(iK);
  }
  if (v === 'Q') {
    you += 10;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(iQ);
  }
  if (v === 'J') {
    you += 10;
    if (you > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + you;
    d.appendChild(iJ);
  }

}




function dealer(){
  var s = Math.floor(Math.random() * (21 - 14 + 1)) + 14;
  if (you <= 21) {
for(var i=0;i<8;i++)
{
  
  console.log(s);
  if(computer<21&&computer<s&&computer<you){
   var Forsuits = randomNumber1();
   var Forvalues = randomNumber2();

   var suits = selectSuits(Forsuits);
   var values = selectValues(Forvalues);
   console.log(suits);
   if(suits=='diamonds'){
     sColorD(values);
   }
   if(suits=='spades'){
     sColorS(values);
   }
   if(suits=='hearts'){
     sColorH(values);
   }
   if(suits=='clubs'){
     sColorC(values);
   }
  }
 }
}
}


function sColorD(v){
  var d = document.getElementById('d13');

  var para = document.getElementById('p2');

  var head = document.getElementById('h11');


  var i2 = document.createElement("img");
  i2.src = "./Images/diamond-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/diamond-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/diamond-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/diamond-5.png";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/diamond-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/diamond-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/diamond-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/diamond-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/diamond-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/diamond-A.jpg";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/diamond-k.jpg";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/diamond-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/diamond-j.jpg";
  iJ.classList.add("imgCards");

  if (v === '2') {
    computer += 2;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i2);
  }
  if (v === '3') {
    computer += 3;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i3);
  }
  if (v === '4') {
    computer += 4;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i4);
  }
  if (v === '5') {
    computer += 5;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i5);
  }
  if (v === '6') {
    computer += 6;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i6);
  }
  if (v === '7') {
    computer += 7;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i7);
  }
  if (v === '8') {
    computer += 8;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i8);
  }
  if (v === '9') {
    computer += 9;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i9);
  }

  if (v === '10') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i10);
  }

  if (v === 'A') {
    computer += 11;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iA);
  }
  if (v === 'K') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iK);
  }
  if (v === 'Q') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iQ);
  }
  if (v === 'J') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iJ);
}
}

// for spades

function sColorS(v) {
  var d = document.getElementById('d13');

  var para = document.getElementById('p2');

  var head = document.getElementById('h11');


  var i2 = document.createElement("img");
  i2.src = "./Images/spade-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/spade-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/spade-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/spade-5.jpg";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/spade-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/spade-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/spade-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/spade-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/spade-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/spade-A.png";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/spade-k.jpg";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/spade-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/spade-j.jpg";
  iJ.classList.add("imgCards");

  if (v === '2') {
    computer += 2;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i2);
  }
  if (v === '3') {
    computer += 3;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i3);
  }
  if (v === '4') {
    computer += 4;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i4);
  }
  if (v === '5') {
    computer += 5;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i5);
  }
  if (v === '6') {
    computer += 6;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i6);
  }
  if (v === '7') {
    computer += 7;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i7);
  }
  if (v === '8') {
    computer += 8;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i8);
  }
  if (v === '9') {
    computer += 9;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i9);
  }

  if (v === '10') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i10);
  }

  if (v === 'A') {
    computer += 11;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iA);
  }
  if (v === 'K') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iK);
  }
  if (v === 'Q') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iQ);
  }
  if (v === 'J') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iJ);
  }
}

// for hearts

function sColorH(v) {
  var d = document.getElementById('d13');

  var para = document.getElementById('p2');

  var head = document.getElementById('h11');


  var i2 = document.createElement("img");
  i2.src = "./Images/heart-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/heart-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/heart-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/heart-5.png";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/heart-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/heart-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/heart-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/heart-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/heart-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/heart-A.png";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/heart-k.png";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/heart-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/heart-j.jpg";
  iJ.classList.add("imgCards");

  if (v === '2') {
    computer += 2;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i2);
  }
  if (v === '3') {
    computer += 3;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i3);
  }
  if (v === '4') {
    computer += 4;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i4);
  }
  if (v === '5') {
    computer += 5;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i5);
  }
  if (v === '6') {
    computer += 6;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i6);
  }
  if (v === '7') {
    computer += 7;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i7);
  }
  if (v === '8') {
    computer += 8;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i8);
  }
  if (v === '9') {
    computer += 9;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i9);
  }

  if (v === '10') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i10);
  }

  if (v === 'A') {
    computer += 11;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iA);
  }
  if (v === 'K') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iK);
  }
  if (v === 'Q') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iQ);
  }
  if (v === 'J') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iJ);
  }
}

// for clubs
function sColorC(v) {
  var d = document.getElementById('d13');

  var para = document.getElementById('p2');

  var head = document.getElementById('h11');


  var i2 = document.createElement("img");
  i2.src = "./Images/clubs-2.png";
  i2.classList.add("imgCards");

  var i3 = document.createElement("img");
  i3.src = "./Images/clubs-3.png";
  i3.classList.add("imgCards");

  var i4 = document.createElement("img");
  i4.src = "./Images/clubs-4.png";
  i4.classList.add("imgCards");

  var i5 = document.createElement("img");
  i5.src = "./Images/clubs-5.png";
  i5.classList.add("imgCards");

  var i6 = document.createElement("img");
  i6.src = "./Images/clubs-6.png";
  i6.classList.add("imgCards");

  var i7 = document.createElement("img");
  i7.src = "./Images/clubs-7.png";
  i7.classList.add("imgCards");

  var i8 = document.createElement("img");
  i8.src = "./Images/clubs-8.png";
  i8.classList.add("imgCards");

  var i9 = document.createElement("img");
  i9.src = "./Images/clubs-9.png";
  i9.classList.add("imgCards");

  var i10 = document.createElement("img");
  i10.src = "./Images/clubs-10.png";
  i10.classList.add("imgCards");

  var iA = document.createElement("img");
  iA.src = "./Images/clubs-A.jpg";
  iA.classList.add("imgCards");

  var iK = document.createElement("img");
  iK.src = "./Images/clubs-k.png";
  iK.classList.add("imgCards");

  var iQ = document.createElement("img");
  iQ.src = "./Images/clubs-q.jpg";
  iQ.classList.add("imgCards");

  var iJ = document.createElement("img");
  iJ.src = "./Images/clubs-j.png";
  iJ.classList.add("imgCards");

  if (v === '2') {
    computer += 2;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i2);
  }
  if (v === '3') {
    computer += 3;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i3);
  }
  if (v === '4') {
    computer += 4;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i4);
  }
  if (v === '5') {
    computer += 5;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i5);
  }
  if (v === '6') {
    computer += 6;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i6);
  }
  if (v === '7') {
    computer += 7;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i7);
  }
  if (v === '8') {
    computer += 8;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i8);
  }
  if (v === '9') {
    computer += 9;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i9);
  }

  if (v === '10') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(i10);
  }

  if (v === 'A') {
    computer += 11;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iA);
  }
  if (v === 'K') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iK);
  }
  if (v === 'Q') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iQ);
  }
  if (v === 'J') {
    computer += 10;
    if (computer > 21) {
      head.style = "color:red";
      head.innerHTML = 'You Busted!';
    }
    para.innerHTML = 'You:' + computer;
    d.appendChild(iJ);
  }
}
