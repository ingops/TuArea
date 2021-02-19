
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
        si();
    }
    function si(){ 
        if(medida == "m"){
            resultado = numeroFinal +""+medida;
        
        }
        if(medida == "cm"){
            resultado = numeroFinal +" "+medida;
        }
        if(medida == "mm"){
            resultado = numeroFinal +" "+medida; 
        }
        /*
        if(medida1 == "m" && medida2 == "cm"){
        numeroFinal = numeroFinal * 100;
        resultado = numeroFinal +" " +medida2;
        }
        if(medida1 == "m" && medida2 == "mm"){
            numeroFinal = numeroFinal * 1000;
            resultado = numeroFinal +" " +medida2;
        }  
        if(medida1 == "cm" && medida2 == "m"){
            numeroFinal = numeroFinal/100;
            resultado = numeroFinal +" " +medida2;
        }
        if(medida1 == "cm" && medida2 == "mm"){
            numeroFinal = numeroFinal*10;
            resultado = numeroFinal +" " +medida2;
        }
        if(medida1 == "mm" && medida2 == "m"){
            numeroFinal = numeroFinal/1000;
            resultado = numeroFinal +" " +medida2;
        }
        if(medida1 == "mm" && medida2 == "cm"){
            numeroFinal = numeroFinal/10;
            resultado = numeroFinal +" " +medida2;
        }  */
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



    
