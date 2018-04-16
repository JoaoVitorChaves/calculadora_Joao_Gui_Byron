document.getElementById("calculate_button").onclick = function() {
	//Get numbers to input
	let elem1 = document.getElementById('elem_1');
	let elem2 = document.getElementById('elem_2');
	let operation_choice = document.querySelector('input[name="operation"]:checked');

	//Defines that the values inside elem1 and elem2 are only numbers with the parseInt
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

	//Defines variables to show the result with function getResult below 
	let operation_choice_value = operation_choice.value;
	let operation_choice_valueResult = getResult(val1, val2, operation_choice_value);

	//Display the result inside the element with id 'result'
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operation_choice_valueResult;

	function getResult(val1, val2, operation_choice_value) { 
		if (operation_choice_value==='+') {
			return val1 + val2
		} else if (operation_choice_value==='-') {
			return val1 - val2
		} else if (operation_choice_value==='×') {
			return val1 * val2
		} else if (operation_choice_value==='÷') {
			return val1 / val2
		}
	}

	//Display an alert when one of the input is empty, solution got from stackoverflow
	if (isNaN(val1)) {
        alert("Coloque os valores na caixa para realizar a operação!");
        document.getElementById("elem_1").focus();
    } else if (isNaN(val2)) {
        alert("Coloque os valores na caixa para realizar a operação!");
        document.getElementById("elem_2").focus();
    }
}
		


