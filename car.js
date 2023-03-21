var caracceleratorsound= document.getElementById("caraccelator");
var carsound= document.getElementById("carsound");
var carbreaksound= document.getElementById("carbreak");
var carhornsound= document.getElementById("carhorn");
function Caraccelerator(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(135deg); background-color: red; transition: 3s";
    document.getElementById("point").style.cssText="background-color: red; animation: 0.1s vibrate1 linear infinite;";
    caracceleratorsound.play();
    carsound.pause();

}
function Cardeaccelerate(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(-135deg); background-color: #89ff00; transition: 3s";
    document.getElementById("point").style.cssText="background-color: #89ff00; animation: 0s vibrate1 linear infinite;";
    caracceleratorsound.pause();
    caracceleratorsound.currentTime = 1;
    carsound.play();
}
function Carbreak(){
    document.getElementById("needle").style.cssText="transform-origin: bottom; transform: rotate(-134deg); background-color: #89ff00; transition: 0.5s";
    document.getElementById("point").style.cssText="background-color: #89ff00; animation: 0s vibrate1 linear infinite;";
    caracceleratorsound.pause();
    caracceleratorsound.currentTime = 1;
    carbreaksound.play();
    carsound.pause();

}
function Cardebreak(){
    carbreaksound.pause();
    carbreaksound.currentTime= 0 ;
    caracceleratorsound.currentTime= 0 ;
    carsound.pause();
}
  
function Carhorn(){
    carhornsound.play();
}
function Cardehorn(){
    carhornsound.pause();
    carhornsound.currentTime=0;  
}
