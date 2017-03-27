var data = document.getElementById("data");
document.getElementById("boton").addEventListener("click",function(e){
      e.preventDefault();
      (function printAll(){
            var empleados = [
                  {     nombre : "Arabela", 
                        apellido : "Rojas", 
                        rol : "T.A", 
                        cumpleanios : "23 de enero" },

                  {     nombre : "Michelle", 
                        apellido : "Seguil", 
                        rol : "T.A", 
                        cumpleanios : "25 de noviembre" },

                  {     nombre : "Meche", 
                        apellido : "Zubieta", 
                        rol : "T.A", 
                        cumpleanios : "02 de marzo" },

                  {     nombre : "Papu", 
                        apellido : "Rivariola", 
                        rol : "Psicóloga", 
                        cumpleanios : "10 de octubre" },

                  {     nombre : "Gian", 
                        apellido : "Corzo", 
                        rol : "Profesor", 
                        cumpleanios : "23 de enero" }
            ];

            data.innerHTML= "";
            empleados.forEach(function(element){
            data.innerHTML += "<div class=\"person\"><ul>" + 
                                    "<li>" + "<span>Nombre:</span> " + element.nombre + "</li>"+
                                    "<li>" + "<span>Apellido:</span> " + element.apellido + "</li>"+
                                    "<li>" + "<span>Rol:</span> " + element.rol + "</li>"+
                                    "<li>" + "<span>Cumpleaños:</span> " + element.cumpleanios + "</li>" + 
                              "</ul></div>";
            });
      })();

});



