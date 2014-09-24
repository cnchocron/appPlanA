var Contacto = (function(){
	var self = Object.create({});

	//Atributos y metodos Obcionales
	
	var nombre;
	self.getNombre=function(){
	    return nombre;
	}
	self.setNombre=function(valor){
	    nombre=valor;
	}
		
	var apellido;
	self.getApellido=function(){
	    return apellido;
	}
	self.setApellido=function(valor){
	    apellido=valor;
	}
	
	var numero;
	self.getNum=function(){
	    return numero;
	}
	self.setNum=function(valor){
	    numero=valor;
	}
	return self;
});
module.exports = Contacto;