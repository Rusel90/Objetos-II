var assert = require('assert');

function ejercicio1(numInicial,numFinal){
	if(numInicial>numFinal){
		var tmp=numInicial;
		numInicial = numFinal;
		numFinal=tmp;
	}
	var objeto={
		inicio:numInicial,
		final:numFinal
	};

	var sum=0;
	for(var i=objeto.inicio;i<=objeto.final;i++)
		sum+=i;
	return sum;
}

describe("Ejercicio 1",function(){
		it("Debe retornar la suma de los numeros que estan entre 1 y 10 incluídos.",function(){
			assert.equal(55,ejercicio1(1,10));
		});
		it("Si numInicial es mayor que numFinal debe retornar igual la suma",function(){
			assert.equal(55,ejercicio1(10,1));
		});
});

function ejercicio2(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
    this.mensaje = function() {
        return (this.edad > 17 && this.genero.toLowerCase() == "femenino" &&
            (this.ocupacion.toLowerCase() == "web developer" ||
                this.ocupacion.toLowerCase() == "estudiante laboratoria")) ? "You are awesome" : "Upsiii";
    }
}

describe("Ejercicio 2", function() {
    it("para Tamara deberia ser You're awesome", function() {
        var coder = new ejercicio2("Tamara", 22, "Estudiante Laboratoria", "Femenino");
        assert.equal("You are awesome", coder.mensaje());
    })
    it("para Ana deberia ser Upsiii", function() {
        var coder = new ejercicio2("Ana", 22, "web developer", "Femenino");
        assert.equal("You are awesome", coder.mensaje());
    })

    it("para Nayti deberia ser Upsiii por que su edad es menor de 17", function() {
        var coder = new SuperCoder("Nayti", 16, "Enfermera", "Femenino");
        assert.equal("Upsiii", coder.mensaje());
    })
})

function ejercicio3(array)
{
	var texto=new Object();
	for(i in array){
		var j=parseInt(i)+1;
		texto["propiedad"+j]=array[i];
	}
	var propiedades=Object.keys(texto)
	var str = "";
	for(j in propiedades){
		str += propiedades[j]+"-->"+texto[propiedades[j]];
		if(j<propiedades.length-1)
			str+=";";
	}
	if(propiedades.length==0)
		return "El objeto está vacío";
	return str;

}
describe("Ejercicio 3",function(){
  it("Debe imprimir propiedades y su contenido",function(){
    assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1",ejercicio3([6,5,4,3,2,1]));
  });
  it("Si le pasamos un array vacio debe imprimir que el objeto esta vacío",function(){
    assert.equal("El objeto está vacío",ejercicio3([]));
  });
});

function ejercicio4(nombre, apellido, edad, genero, ciudad, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.ficha = function() {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Pais: " + this.pais;
    }
}

var blanca = new ejercicio4("Blanca", "Perez", 19, "Femenino", "Santiago", "Chile");
console.log(blanca.ficha());

describe("Ejercicio 4",function(){
  it("Debe imprimir el nombre, edad y país",function(){
    var persona = new ejercicio4("Blanca","Pérez",19,"Femenino","Santiago","Chile");
    assert.equal("Nombre: Blanca Pérez\nEdad: 19\nPaís: Chile",persona.ficha());
  });
});
