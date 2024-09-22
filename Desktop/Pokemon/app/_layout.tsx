import { Stack } from "expo-router";
//expo-router es una biblioteca que puedes instalar en proyectos con React Native pata gestionar la navegacion entre diferentes pantallas de la app
//Stack es un componente de expo-router que me permite gestionar la navegacion de tipo stack
//Navegacion tipo stack: cada vez que navegas a una pantalla nueva esta se coloca encima de la anetrior, puedes moverte a una pantalla nueva y volver a la anterior de forma facil 
const RootLayout=()=>
  <Stack> {/*Dentro de stack definiremos todas las pantallas que tendra la app*/}
    <Stack.Screen name="index" options={{headerShown: false}}/>
    {/*Stack.screen representa una pantalla en mi app, donde le puedo poner nombre y opciones
     headerShown: false: le dice al stack que no debe mostar un encabezado*/}
  </Stack>;
  export default RootLayout; //esto hace que el componente pueda usarse en otras partes del codigo 


  //En React un componente es una función o clase que devuelve un elemento de interfaz de usuario (UI)
  //En React un componente es una parte reutilizable de la interfaz de usuario.


  //TANTO LA LINEA DE IMPORTA COMO LA DECLARION DE LA CONSTANTE ESTA ESCRITA EN JAVASCRIPT
  //LO QUE ESTA DENTRO DEL COMPPONENTE ESTA ESCRITO EN JAVASCRIPT XML (JSX)