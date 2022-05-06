const $button = document.querySelector("button")
const $input = document.querySelector("input")
let t1, t2;

$button.addEventListener("click", () => {
    if ($input.value){
  
        let result=1
        for(let i=0; i<$input.value; i++){
            if(i==0){
                t1 = performance.now()
                console.log(t1)
            }
            result *= (i+1)
        }
        t2 = performance.now()
        let time = t2-t1
        console.log(t2)
        console.log(time)
        document.querySelector("p").textContent =`${$input.value}! = ${result} (${time} milisegundos)`
    }
    else{
        document.querySelector("p").textContent ="...Esperando um numero!!!"
    }
   
})
