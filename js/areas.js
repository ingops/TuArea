
// resultado tipo String que se imprime al alfinal 
    let resultado = 0;
    let numeroFigura = 0;
//numero el cual va ser el resultado de la operacion de la segunda fase
    let numeroFinal = 0;
//base y altura de la figura la cual se pide en la segunda fase
    let base = 0;
    let altura = 0;
//recibe las medidas en las que vienen y en las que se vanm a convertir
    let medida = 0;

    function calcular(){
        //recoge los datos escritos 
        base = document.getElementById("Base").value;
        altura = document.getElementById("Altura").value;
        //recoge los datos sobre las medidas
        medida = document.getElementById("medida").value;
        
        switch(numeroFigura){
            case 1: //cuadrado
                numeroFinal = altura * altura;
                break;
            case 2: //triangulo
                numeroFinal = (base * altura)/2;
                break;
            case 3: // rectangulo
                numeroFinal = base * altura;
                break;
            case 4: //Rombo
                numeroFinal = (base * altura)/2;
                break;
        }
        igualar();
    }
    function igualar(){ 
        resultado = numeroFinal +" "+medida;    
        mostrar();
    }

    function mostrar(){
        document.getElementById("resultado").innerHTML = resultado;
    }
//define el que figura escogue
    function noFigura1(){
        numeroFigura = 1;
        console.info(numeroFigura);
    }
    function noFigura2(){
        numeroFigura = 2;
        console.info(numeroFigura);
    }
    function noFigura3(){
        numeroFigura = 3;
        console.info(numeroFigura);
    }
    function noFigura4(){
        numeroFigura = 4;
        console.info(numeroFigura);
    }
    
//CONVERSION:
function obtener() { 
    
    medida1 = document.getElementById("medida1").value;
    medida2 = document.getElementById("medida2").value;
    dato1 = document.getElementById("dato1").value;

    /*primer if */
    if(medida1==1){
        multi = dato1 * 2.54;
    }
    else if(medida1==2){
        multi = dato1 * 30.48;
    }
    else if(medida1==3){
        multi = dato1 * 91.44;
    }
    else if(medida1==4){
        multi = dato1 * 160934;
    }
    else if(medida1==5){
        multi = dato1 / 10;
    }
    else if(medida1==6){
        multi = dato1;
    }
    else if(medida1==7){
        multi = dato1 * 100;
    }
    else if(medida1==8){
        multi = dato1 *100000;
    }
    else if(medida1==9){
        multi = dato1*1000;
    }        
    
    /*segundo dato*/
    if(medida2==1){
        r = (multi / 2.54)+" inch";
    }
    else if(medida2==2){
        r = (multi / 30.48)+" ft";
    }
    else if(medida2==3){
        r = (multi / 91.44)+" yd";
    }
    else if(medida2==4){
        r = (multi / 160934)+" mi";
    }
    else if(medida2==5){
        r = (multi * 10)+" mm";
    }
    else if(medida2==6){
        r = (multi)+" cm";
    }
    else if(medida2==7){
        r = (multi / 100)+" m";
    }
    else if(medida2==8){
        r = (multi /100000)+" km";
    }
    else if(medida2==9){
        r = (multi/1000)+" dam";
    }     

    document.getElementById("resultados").innerHTML = r;
}
/*calculadora*/ 
var operandoa = 0;
var operandob = 0;
var operacion = 0;


function init(){
    //variables
    var final = document.getElementById('final');
    var Acero = document.getElementById('Acero');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    //Eventos de click
  uno.onclick = function(e){
    final.textContent = final.textContent  + "1";
}
dos.onclick = function(e){
    final.textContent = final.textContent  + "2";
}
tres.onclick = function(e){
    final.textContent = final.textContent  + "3";
}
cuatro.onclick = function(e){
    final.textContent = final.textContent  + "4";
}
cinco.onclick = function(e){
    final.textContent = final.textContent  + "5";
}
seis.onclick = function(e){
    final.textContent = final.textContent  + "6";
}
siete.onclick = function(e){
    final.textContent = final.textContent  + "7";
}
ocho.onclick = function(e){
    final.textContent = final.textContent  + "8";
}
nueve.onclick = function(e){
    final.textContent = final.textContent  + "9";
}
cero.onclick = function(e){
    final.textContent = final.textContent  + "0";
}
Acero.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = final.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = final.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = final.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = final.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = final.textContent;
    resolver();
}
}
function limpiar(){
    final.textContent = "";
  }
  function resetear(){
    final.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    final.textContent = res;
  }

    
