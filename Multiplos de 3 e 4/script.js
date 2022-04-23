let min = document.querySelector("#min")
let max = document.querySelector("#max") 

function Multiplos(){
    document.querySelector("#resultadoFinal").innerHTML=" "
    document.querySelector("#alert").style.opacity="0"
    max.style.border ="1px solid black";
    min.style.border ="1px solid black";
    if(max.value.length>0 && min.value.length>0){
   
        if((parseInt(max.value)) > (parseInt(min.value))){
            Calculo();
        }
        else{
            alert("Seu numero mínimo deve ser menor que seu numero máximo")
        }
    }
    else{
        document.querySelector("#alert").style.opacity="100%"
        if(max.value.length==0){
            max.style.border ="1px solid red";
        }
        if(min.value.length==0){
            min.style.border ="1px solid red";
        }
    }
}


function Calculo(){
    let multiplos = []
    for(let i= parseInt(min.value)+1; i< parseInt(max.value); i++){
        if((i%2==0) && (i%3==0)){
            multiplos.push(i)
        }
    }
    (multiplos.length>0)? document.querySelector("#resultadoFinal").innerHTML=
    `Existe ${multiplos.length} valores entre esses numeros que são multilpos de 2 e 3. <br><br>Segue a lista:<br> 
    ${multiplos.join(" , ")}`:document.querySelector("#resultadoFinal").innerHTML= "NÃO EXISTE NUMEROS MULTIPLOS DE 2 E 3 ENTRE ESSES VALORES";
}
