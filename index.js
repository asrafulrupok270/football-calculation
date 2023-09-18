
 let count = 0;
 function player(id){
    

    const name = document.getElementById(id).innerText
    const ol = document.getElementById("ol")
    const li = document.createElement("li")
    li.innerText = name;
    ol.appendChild(li)
    count=count+1;

 }
document.getElementById("neymar").addEventListener("click",function(){
   
    // const name = document.getElementById("name").innerText
    player("name")
    
   
  
     
})
 
 
 
document.getElementById("messi-btn").addEventListener("click",function(){
 
    player("messi")
    
    
     
})
 
document.getElementById("ronaldo-btn").addEventListener("click",function(){
 

    player("ronaldo")
     
})
document.getElementById("dybala-btn").addEventListener("click",function(){
 
    player("dybala")
     
})
document.getElementById("ozil-btn").addEventListener("click",function(){
 
    player("ozil")
     
})
document.getElementById("icardi-btn").addEventListener("click",function(){
 

    player("icardi")
     
})
document.getElementById("maria-btn").addEventListener("click",function(){
 

    player("maria")
})
 
document.getElementById("bappe-btn").addEventListener("click",function(){
 

    player("bappe")
})
 
document.getElementById("salah-btn").addEventListener("click",function(){
 

    player("salah")
})
document.getElementById("calculate").addEventListener("click",function(){

    const playerPrice = document.getElementById("player-input").value 
    const expance = document.getElementById("expanse") 
 const playerExpance = playerPrice*count;
 expance.innerText = playerExpance


})
 
 