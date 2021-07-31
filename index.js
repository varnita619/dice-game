var startBtn = document.querySelector(".startBtn");
var dice = document.querySelector("h3");
var result = document.querySelector("p");

startBtn.addEventListener("click",()=>{
    var randomnumber1 = Math.floor(Math.random() * 6) +1;
     var imagesrc1 = "Images/" + randomnumber1 +".jpeg";

     var x = document.querySelectorAll("img")[0];

     x.setAttribute("src", imagesrc1);

     var y = document.querySelectorAll("img")[1]; 

     var randomnumber2 = Math.floor(Math.random() * 6) +1;
 
     var imagesrc2 = "Images/" + randomnumber2 + ".jpeg";
 
     y.setAttribute("src",imagesrc2);
 
     if(randomnumber1 > randomnumber2){
        //  result.style.fontSize = "30px";
         result.innerHTML= `<div style="background-color: rgba(214, 240, 255, 0.774);font-size:30px;color: blue">Player 1 Won the match🚩</div>`;
     }
     else if(randomnumber2 > randomnumber1){
        result.style.fontSize = "30px";
         result.innerHTML= `<div style="background-color: rgba(255, 218, 218, 0.842);font-size:30px;color: red">Player 2 Won the match🚩</div>`;
     }
     else {
        result.style.fontSize = "30px";
         result.innerHTML= `<div style="background-color: rgba(204, 255, 197, 0.767);font-size:30px;color: green">It's a tie 😄</div>`;
     }
})
