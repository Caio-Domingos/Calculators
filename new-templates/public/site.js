function handleClear(elHide) {
	const form = document.querySelector('.c-form');
	// Limpar o formulário
	form.reset();

	if (elHide) {
		document.getElementById('resultTable').classList.add('hide');
	}
}

const maskInput = document.querySelectorAll('.c-mask-input');
maskInput.forEach((input) => {
	VMasker(input).maskMoney({
		precision: 2,
		separator: ',',
		delimiter: '.',
		zeroCents: false,
	});
});

function parseVMMaskerValue(value) {
	return !isNaN(
		parseFloat(value.replace('R$ ', '').replace('.', '').replace(',', '.'))
	)
		? parseFloat(value.replace('R$ ', '').replace('.', '').replace(',', '.'))
		: 0;
}
