
function calculaFibo(valorInicial, valorFinal)
{
	

	let f = 1;
	let aux = 0;
	let aux2 = 0;
	
	while(f < valorFinal)
	{
		let p = document.getElementById("resposta"); 
		
		if(f > valorInicial)
		{
			p.innerHTML += f + ", ";
		}
		
		aux = f;
		f += aux2;
		aux2 = aux;
		
	}
}

function load()
{
	let valorInicial2 = document.getElementById("valorInicial");
	let valorInicial = valorInicial2.value;
	//console.log(valorInicial);
	let valorFinal2 = document.getElementById("valorFinal");
	let valorFinal = valorFinal2.value;
	//console.log(valorFinal);
	
	let botao = document.getElementById("botao");
	botao.addEventListener("click", calculaFibo(valorInicial, valorFinal), false);
	
}
 
