var Lugar = (function(){
	var self = Object.create({});

	//Atributos y metodos Obcionales
	var nomLugar;
	self.getNomLugar=function (){
		return nomLugar;
	}
    self.setNomLugar=function (valor){
		nomLugar=valor;
	}

	var listCont;
	self.getListCont=function (){
		return listCont;
	}
    self.setListCont=function (valor){
		listCont=valor;
	}
	
});
module.exports = Lugar;