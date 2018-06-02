$(function () {
 /* 
    1. Tipo de valores:
        -Cadena de texto (STRING): Siempre van entre comillas simples o dobles (si usamos simples siempre simples, o dobles siempre dobles)
            var myText = 'Hola Mundo';

        -Númerico (NUMBER): Nunca va entre comillas.
            var myNumber = 100;

        -Booleano (BOOLEAN): Valores lógicos binarios, son dos: TRUE o FALSE 
            var verdadero = true;
            var verdadero2 = 1;

            var falso = false;
            var falso2 = 0;


        -Objeto (OBJECT): Es un conjunto de propiedades y valores

        -ARREGLOS (vectores o matrices) (ARRAY): Es un conjunto de valores y siempre deben estar entre corchetes y los valores separado
        por comas

        -Funciones (FUNCTION): Es un conjunto de sentencias que se ejecutan cuando se invoca a la función. La sintaxis de una función "anónima"; es:

                                function () {
                                    dentro de estas llaves van los conjuntos de sentencias...
                                }

                                    una función puede recibir parámetros, un parámetro es una variable local, es decir, que solo existe
                                    dentro de la función. ejemplo:

                                        function(valor1, valor2) {
                                            valor1 y valor2 sólo existen dentro de ésta función.

                                        }

                                


        -Indefinidos (UNDEFINED): 

        -Nulos (NULL)
        -Not an Number (NaN)

    2. Operadores aritméticos:
        +  Suma
                - Valores NUMBER se suman.
                -Si al menos un valor es de tipo STRING se concatenan.
        - Resta
        / División
        * Multiplicación
        % Resto (cuando queremos saber si el resultado es un numero entero o no)
        ++ Incremento
        -- Decremento 
                                             // VAR es una palabra reservada que se utiliza para crear una variable en java

 */  

    // STRING
    var myName = 'Stephanie';
    var myLastName = 'Enríquez';

    //NUMBER
    var myAge = 28;
    var myHeight = 1.64;

    //BOOLEAN
    var isMarried = false;
    var isRobot = false;
    var isHappy = true;

    // Suma
        var myFullName = myName + ' ' + myLastName;
            //console.log(myFullName);
        
        var number1 = 50;
        var number2 = 120;
        var result = number1 + number2;
            //console.log(result);

        var result2 = myName + myAge;
            //console.log(result2);

        var number3 = '40';
        var number4 = '50';
        var result3 = number3 + number4;
            //console.log(result3);

    //RESTA 

        var resultadoResta = number1 - number2;
            //console.log(resultadoResta);

    //DIVISIÓN 

        var resultadoDivision = number2 / number1;
            //console.log(resultadoDivision);

        var resultadoResto = number2 % number1;
            //console.log(resultadoResto);

    //INCREMENTO 

        number1++
        number1++
        number1++
        number1++
            //console.log(number1);

    //DECREMENTO
        
        number1--
        number1--
        number1--
        number1--
        number1--
        number1--
            //console.log(number1);


    //ARRAY - DIAS DE LA SEMANA, con esto [] puedes agregar cualquier tipo de valor, del mismo tipo, o texto o numéricos etc. 

        var diasSemana = ['Lunes' , 'Martes' , 'Miércoles' , 'Jueves' , 'Viernes' , 'Sábado' , 'Domingo'];
        var numeroDiasSemana = diasSemana.length;
        var position = 1;
            //console.log(diasSemana);
            //console.log(numeroDiasSemana);

                // si queremos especificar un día en específico, el sábado sería el numero 5 porque lunes es 0

            //console.log(diasSemana[position]);

    
    // FUNCTION
        //La formula es:  Area = (Base * Altura) / 2;

        /* 
            Calcular el area de los siguientes triángulos:
                1. base = 100, altura = 200;
                2. base = 105, altura = 350;
                3. base = 3876, altura = 1984;
                4. base = 245,34, altura = 54.12;
                5. base = 1254.23, altura = 7463.45;
        
        */

        // var base1 = 100;
        // var altura1 = 200;
        // var baseAltura1 = base1 * altura1;
        // var areaTriangulo1 = (baseAltura1) / 2;

        // var base2 = 105;
        // var altura2 = 350;
        // var baseAltura2 = base2 * altura2;
        // var areaTriangulo2 = (baseAltura2) / 2;
            //console.log(areaTriangulo1);
            //console.log(areaTriangulo2);

        // var calculateArea1 = function() {
        //     var base = 100;
        //     var altura = 200;
        //     var baseAltura = base * altura;
        //     var areaTriangulo = (baseAltura) / 2;
        //     console.log(areaTriangulo);
        // };

        // var calculateArea2 = function() {
        //     var base = 105;
        //     var altura = 350;
        //     var baseAltura = base * altura;
        //     var areaTriangulo = (baseAltura) / 2;
        //     console.log(areaTriangulo);
        // };

           // para ejecutar la funcion hacemos lo siguiente:

            //var ejemplo; 
                //console.log(ejemplo); //eSTO DEVOLVERÁ UN VALOR INDEFINIDO (Undefined)

       
           var calcularArea = function(base, altura) {;
            var area = (base * altura) / 2;
            return area;
           

        };

        var triangulo1 = calcularArea(100, 200);
        var triangulo2 = calcularArea(105, 350);
        var triangulo3 = calcularArea(3876, 1984);
        var triangulo4 = calcularArea(245,34, 54.12);
        var triangulo5 = calcularArea(1254.23, 7463.45);

        // console.log(triangulo1);
        // console.log(triangulo2);
        // console.log(triangulo3);
        // console.log(triangulo4);
        // console.log(triangulo5);

//vamos a guardar aquel elemento HTML que tenga elemento areas

        var areas = $('#areas');
            //areas.append(triangulo1, triangulo2, triangulo3, triangulo4, triangulo5); //APPEND es para incertar un elemento dentro de otro

        //UNA LISTA DESORDENADA, SON DOS ELEMENTOS LOS QUE VAMOS A USAR, 

        var ul = document.createElement('ul');
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        var li3 = document.createElement('li');
        var li4 = document.createElement('li');
        var li5 = document.createElement('li');

        $(li1).append(triangulo1);
        $(li2).append(triangulo1);
        $(li3).append(triangulo1);
        $(li4).append(triangulo1);
        $(li5).append(triangulo1);
        $(ul).append(li1, li2, li3, li4, li5);
        areas.append(ul);

        //OBJECT  (podemos guardar muchos valores, la diferencia es que le podemos asignar un nombre a cada propiedad)

        var persona = {
            name: 'Stephanie',
            lastName: 'Enríquez',
            age: 28,
            height: 1.64,
            isMarried: false,
            isRobot: false,
            pets: [
                {
                    type: 'Perro',
                    name: 'Kobi',
                    age: '1',
                },
                {
                    type: 'Perro',
                    name: 'Kira',
                    age: 7,

                },
            ],
            printFullName: function() {
                var fullName = this.name + '' + this.lastName;
                areas.append(fullName);
             },

        };

        // console.log(persona['name']);
        // console.log(persona['lastName']);
        // console.log(persona['pets'] [0] ['name']);
        // console.log(persona['pets'] [1] ['name']);
        // console.log('------------');
        // console.log(persona.name);
        // console.log(persona.lastName);
        // console.log(persona.pets[0].name);
        // console.log(persona.pets[1].name);

        // persona.printFullName();
    


                    //JAVASCRTIP  PARA QUÉ ES????? 

        // añade comportamientos como carrusel
// modificar el htmt, lo cual lleva a crear comportamientos como el carrusel: tienes una flecha a la derecha y tienes unos bolitas
// con java tu calculas, cuales light se ve en ese momento y determinas. uno se ve en el 1 y otro en el 2
// modificas el css para que en lugar de que tengas un position 00 tenga un left con 300px 

// animación de java script se puede ser con transsition 
            //eventos en el scrool, cuando haces click se dispara un evento, java escucha los elementos y actua en consecencia de, cuando le doy
            //click en next pues tenemos uns selector que tiene algo a la derecha 

       

       
 


    
});
