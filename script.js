window.onload=function(){

    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2")
    
    function disappear(){
        div1.style.display = "none";
    }
    div1.addEventListener('click', disappear);
    function increaseHeight(){
        div2.style.height = "500px";
    } 
    function reverseHeight(){
        div2.style.height = "200px";
    }
    div2.addEventListener('mouseover', increaseHeight)
    
}

