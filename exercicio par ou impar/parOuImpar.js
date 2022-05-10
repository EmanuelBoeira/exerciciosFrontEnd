function parImpar()
{
	let num = prompt("digite um número: ");
	
	if(num % 2 == 0)
	{
		document.getElementById("parImpar").innerHTML = "É par!!!";
		
	}
	else
	{
		document.getElementById("parImpar").innerHTML = "É impar!!!";
	}
}