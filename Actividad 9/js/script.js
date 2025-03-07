           function calcularFactorial() {
            let numero;
            let resultado = 1;

            numero = parseInt(document.getElementById("numero").value, 10);
            for ( let cuenta = 1 ; cuenta <=numero ; cuenta = cuenta +1){
                resultado = resultado * cuenta;
            }
            document.getElementById("mensaje").innerHTML = ("El factorial es " + resultado);
        }