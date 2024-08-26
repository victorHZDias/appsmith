export default {
	myFun1 (){
		dataEntrada=data_table.selectedRow.ANIVERSARIO
		const partesData = dataEntrada.split("/");
		const dia = parseInt(partesData[0]);
		const mes = parseInt(partesData[1]) - 1; 
		const ano = parseInt(partesData[2]);

		const data = new Date(ano, mes, dia);
		const dataISO = data.toISOString(); 
		const dataISOComFusoHorario = dataISO.replace("Z", "-03:00");

		console.log(dataISO);           // Saída: 1986-06-03T00:00:00.000Z
		console.log(dataISOComFusoHorario); 
		return dataISOComFusoHorario
	},

}