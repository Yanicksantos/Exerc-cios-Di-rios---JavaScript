const $tbody = document.querySelector("tbody")
for(let i=0; i<20; i++){
    const $tr = document.createElement("tr")
    $tr.classList.add("tr")
    $tbody.appendChild($tr)
}

document.querySelector("button").addEventListener("click", ()=>{

    const alunos =[]
    for(let i = 1; i <= 20; i++){
        let al = (Math.random()*100).toFixed(2);
        alunos.push(al);
    }

    function situacao(_nota) {
		return _nota >= 50 ?'Aprovado' : 'Reprovado'
	}

    function PreenchetTabela(_nota){
        const $aprovado = document.querySelector("#aprovado")
        const $reprovado = document.querySelector("#reprovado")
        const $trow = document.querySelectorAll(".tr")
        let aprovado=0
        for(let i=0; i<20; i++){
            $trow[i].innerHTML =  `<td> aluno ${i+1}</td> <td> ${_nota[i]} </td> <td>${situacao(_nota[i])}</td>`
            if(situacao(_nota[i])=='Aprovado'){
                aprovado++
            }
        }
       $aprovado.innerHTML= `APROVADOS: ${aprovado} (${((aprovado/20)*100).toFixed(0)}%)`
       $reprovado.innerHTML= `REPROVADOS: ${20 - aprovado} (${(100 - ((aprovado/20)*100)).toFixed(0)}%)`
    }
    
    PreenchetTabela(alunos)
})

