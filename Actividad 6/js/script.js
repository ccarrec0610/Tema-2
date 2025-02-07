           function comprobar() {
            let numero;
            numero = parseInt(document.getElementById ("numero").value);

            if (numero % 2 == 0 ) {
                document.getElementById("mensaje").innerHTML = "El número es par";
            }
            else {
                document.getElementById("mensaje").innerHTML = "El número es impar";
                }
            }

