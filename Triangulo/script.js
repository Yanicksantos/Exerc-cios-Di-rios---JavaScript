const $ladoA = document.querySelector("#ladoA")
const $ladoB = document.querySelector("#ladoB")
const $ladoC = document.querySelector("#ladoC")
const $resultado = document.querySelector("#resultado")
const $imagem = document.querySelector("img")
const $span = document.querySelector("span")

function definirTriangulo(){
	console.log()
	if($ladoA.value.length == 0 || $ladoB.value.length == 0 || $ladoC.value.length == 0){
		alert("Existe campo vazio")
	}
	else{
		$resultado.style.display="block"
		if(ladoA.value == ladoB.value && ladoB.value == ladoC.value){
			$imagem.src="img/triangulo-equilatero.png"
			$span.textContent="EQUILÁTERO"
		} 
		else {
			if(ladoA.value != ladoB.value && ladoB.value != ladoC.value && ladoA.value != ladoC.value) {
				$imagem.src="img/triangulo-escaleno.png"
				$span.textContent="ESCALENO"
			} else {
				$span.textContent="ISOSCELE"
				
				if($ladoA.value == $ladoB.value){
					if($ladoA.value > $ladoC.value){
						$imagem.src="img/triangulo-isoscele-base-menor.png"
					}
					else{
						$imagem.src="img/Triángulo-Isosceles-base-maior.jpg"
					}
				}
				else if($ladoA.value == $ladoC.value){
					if($ladoA.value > $ladoB.value){
						$imagem.src="img/triangulo-isoscele-base-menor.png"
					}
					else{
						$imagem.src="img/Triángulo-Isosceles-base-maior.jpg"
					}
				}
				else{
					if($ladoB.value > $ladoA.value){
						$imagem.src="img/triangulo-isoscele-base-menor.png"
					}
					else{
						$imagem.src="img/Triángulo-Isosceles-base-maior.jpg"
					}
				}	
			}
		}
	}
}