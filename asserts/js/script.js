var data = document.getElementById("data");
var boton = document.getElementById("boton");
document.getElementById("form1").addEventListener("submit",function(e){
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
            data.innerHTML += "<div><ul>" + 
                                    "<li>" + "Nombre: " + element.nombre + "</li>"+
                                    "<li>" + "Apellido: " + element.apellido + "</li>"+
                                    "<li>" + "Rol: " + element.rol + "</li>"+
                                    "<li>" + "Cumpleaños: " + element.cumpleanios + "</li>" + 
                              "</ul></div>";
            });
      })();

});



