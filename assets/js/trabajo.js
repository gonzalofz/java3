//1
let exampleEXpr = function (a,B,C){
    return a+b+c ;
};

//2
let sumaArrow = (a,b) => a+b;

//3.1
tres = document.getElementById("tres")
function pintar(){
   tres.style.backgroundColor = 'yellow'
   }
   tres.addEventListener("click", pintar);
   


//3.2
tres = document.getElementById("tres")
   function pintar(color = "green"){
   tres.style.backgroundColor = color
   }
   
   tres.addEventListener("click", function(){
    pintar("yellow")
   });

   let  generalColor = '';

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'q') {
        generalColor = "blue"
    } else if (event.key === 'w') {
        generalColor = "red"
    } else if (event.key === 'e') {
        generalColor = "green"
    } else if (event.key === 'r') {
        generalColor = "yellow"
    }
    });

let box1 = document.querySelector ('#box1')
box1.addEventListener('click', () => (box1.style.backgroundColor =  generalColor));

let box2 = document.querySelector ('#box2')
box2.addEventListener('click', () => (box2.style.backgroundColor =  generalColor));

let box3 = document.querySelector ('#box3')
box3.addEventListener('click', () => (box3.style.backgroundColor =  generalColor));

let  box4 = document.querySelector ('#box4')
box4.addEventListener('click', () => (box4.style.backgroundColor =  generalColor));