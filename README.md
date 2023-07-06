# itacademyspring
- Ejercicio 1
Nuestra aplicación empezará con tres checkboxes mediante los cuales el usuario podrá decidir si desea obtener el presupuesto de una página web (500 €), una campaña SEO (300 €) o una campaña de publicidad (200 €).

En función de las opciones que marque, se mostrará un precio distinto.


Por el momento no te compliques, implementa esta lógica en el componente principal App. 

Simplemente, tendrás que crear 3 casillas de selección que ejecute una función , pasando a esta función el evento de la casilla de selección, para saber qué casilla de selección ha sido clicado. En función de la casilla de selección que se haya pulsado, deberás modificar el precio total en consecuencia. 
Puedes guardar la situación de cada casilla de selección en estados diferentes para poder calcular el total o se puede crear un único estado en formato array para centralizar la situación de las tres casillas de selección.
Conviene guardar el presupuesto total calculado en un estado.
- Ejercicio 2
Una vez creadas las casillas de selección que permitirán al usuario seleccionar el tipo de servicio que necesita, le ofreceremos la opción de ajustar uno de los servicios: crear una página web, pudiendo elegir el número de páginas y de idiomas .

El cliente/a podrá seleccionar el número de páginas y el número de idiomas de la web que desea realizar. 

Al coste total de la web deberemos añadir la  siguiente cantidad :

- Número de páginas * el número de idiomas * 30 €.
