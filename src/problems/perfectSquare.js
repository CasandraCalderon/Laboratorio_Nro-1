const CuadradoPerfecto = (numero) =>{
	let raiz = Math.sqrt(numero);
    let resultado;
	raiz === parseInt(raiz)? 
    resultado = numero + ( (raiz + 1) * 2 ) - 1 : 
    resultado = (`-1 since ${numero} is not a perfect square`);
    return resultado;		
};
let main = () =>{
    console.log(CuadradoPerfecto(121));
}
export default main;