let contador = 00;
let intervalo;

const actualizarContador = () => {
	if (contador < 10) {
		document.getElementById('mostrarContador').innerText = '0' + contador;
	} else {
		document.getElementById('mostrarContador').innerText = contador;
	}
	if (contador < 0) {
		cancelar();

		mensaje.innerText = 'Temporizador finalizado';
	} else {
		contador--;
	}
};
const iniciar = () => {
	let valor = temporizador.value;
	if (valor < 10) {
		mostrarContador.innerText = '0' + valor;
	} else {
		mostrarContador.innerText = valor;
	}
	contando.innerText = 'segundos';
	contador = valor;

	intervalo = setInterval(actualizarContador, 1000);
	mensaje.innerText = '';
};
const cancelar = () => {
	clearInterval(intervalo);
	mostrarContador.innerText = '00';
	mensaje.innerText = '';
};
const reanudar = () => {
	intervalo = setInterval(actualizarContador, 1000);
};
const pausar = () => {
	clearInterval(intervalo);
};
