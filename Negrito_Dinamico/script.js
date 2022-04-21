let li = document.querySelectorAll(".li");
let resulLi =[]; 

// Pegando apenas o texto dos elementos html
for(let i=0; i<li.length; i++){
    resulLi[i] = li[i].innerHTML;
}

function Negritar(){
    let input = document.getElementById("input").value;
    if(input.length !=0){
        for(let i=0; i< resulLi.length; i++){
            li[i].style.fontWeight = "5";
            li[i].style.textDecoration = "none"
        }
        for (let i=0; i<input.length; i++){
            for(let j=0; j<resulLi.length; j++){
                if (resulLi[j].toUpperCase().substr(0, input.length) == input.toUpperCase()){
                    li[j].style.fontWeight = "900";
                    li[j].style.textDecoration = "underline"
                }
            }
        }
    }
    else{
        for(let i=0; i< li.length; i++){
            li[i].style.fontWeight = "5";
            li[i].style.textDecoration = "none"
        }
    }
}

