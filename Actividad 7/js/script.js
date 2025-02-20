           function comprobar() {
            let numero;
            numero = parseFloat(document.getElementById("nota").value);

            if (numero < 5) {
                document.getElementById("mensaje").innerHTML = "Suspenso";
            }
            else { 
                document.getElementById("mensaje").innerHTML = "Aprobado";
                if (numero > 10 || numero < 0) {
                    document.getElementById("mensaje").innerHTML = "La nota que has puesto no es válida";
                }
        }
    }
