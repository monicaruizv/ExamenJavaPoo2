class Persona {
    //Metodos
    nombre;
    apellidos;
    edad

    getDetalle(){
        return (this.nombre + ' ' + this.apellidos + ' de ' + this.edad + ' años ')
    }

    constructor(nombre,apellidos,edad) {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;

     }


}
class Empleado extends Persona{
    //
     Tipo;


    constructor(nombre,apellidos,edad,Tipo) {
        super(nombre,apellidos,edad);
        this.Tipo=Tipo;
    }

    getDetalle() {
       /**/

        return(super.getDetalle() + ' ' + ' - ' + this.Tipo) ;
    }

}
class Nomina{
    dias;
    Empleados;


    constructor(Empleados) {
        this.Empleados = Empleados;

    }
    calcularSalario(){
       let fImpuestos=0
       let sTipo=''
       let  fTotal=0
       let fSubtotal=0
      //  console.log(this.Empleados[1].getDetalle());

        for (let i=0;i<this.Empleados.length;i++){
            this.dias = Math.round ((Math.random()* 5+15)+1);
           // console.log(this.Empleados[i]);

            if (this.Empleados[i].Tipo =='C')
                this.sTipo = 'Empleado de confianza'

                this.fSubtotal = (this.dias * 500);
                this.fImpuestos = this.fSubtotal * 0.10;
                this.fTotal = this.fSubtotal - this.fImpuestos;
            if (this.Empleados[i].Tipo=='S')
                this.sTipo='Sindicato';
                this.fSubtotal = (this.dias * 350);
                this.fImpuestos = this.fSubtotal * 0.13;
                this.fTotal = this.fSubtotal - this.fImpuestos;
            console.log(this.Empleados[i].getDetalle() + ' ' + ' pertenece a ' + this.sTipo + ' con un sueldo de $' + this.fTotal + ' por ' + this.dias + ' días trabajados')
        }
    }


}

let empleados = [
    new Empleado('María','Carvajal','33','C'),
    new Empleado('Juan','Almeira','23','C'),
    new Empleado('Dulce','Salguero','42','S'),
    ]
let nomina = new Nomina(empleados);
nomina.calcularSalario();