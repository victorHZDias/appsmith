export default {
	selectCargo () {
		const cargos = []; 
		for(let i=0;i < cargo.data.length;i++){
    	const element = cargo.data[i].CARGO;
			cargos.push({
							label: element,
							value: element
						});
    }
		return cargos.sort((a, b) => a.label.localeCompare(b.label));
	},
	
		selectReporte () {
		const cargos = []; 
		for(let i=0;i < reporte.data.length;i++){
    	const element = reporte.data[i].Nome_Colaborador;
			cargos.push({
							label: element,
							value: element
						});

    }
			
		return cargos.sort((a, b) => a.label.localeCompare(b.label));
	},
	
			selectEquipe () {
		const cargos = []; 
		for(let i=0;i < equipe.data.length;i++){
    	const element = equipe.data[i].EQUIPE;
			cargos.push({
							label: element,
							value: element
						});
    }
		return cargos.sort((a, b) => a.label.localeCompare(b.label));
	},
	
				selectSit () {
		const cargos = []; 
		for(let i=0;i < situacao.data.length;i++){
    	const element = situacao.data[i].SIT_ATUAL;
			cargos.push({
							label: element,
							value: element
						});
    }
		return cargos.sort((a, b) => a.label.localeCompare(b.label));
	},
}