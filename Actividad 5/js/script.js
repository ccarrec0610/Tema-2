           function calcular() {
            let numero1;
            let numero2;
            numero1 = parseInt(document.getElementById ("numero1").value);
            numero2 = parseInt (document.getElementById("numero2").value);
            document.getElementById("mensaje").innerHTML = ("El primer número es: " + numero1 + "<br>El segundo número es: " + numero2 +"<br>La suma es: " + (numero1+numero2) +"<br>La resta es: " + (numero1-numero2) + "<br>La multiplicación es: " + (numero1*numero2) + "<br>La división es: "  + (numero1%numero2) + "<br>El resto es: " + (numero1%numero2) + "");
           }
            
        