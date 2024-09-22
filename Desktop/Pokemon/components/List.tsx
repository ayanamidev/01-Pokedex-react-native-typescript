import { Text } from "react-native"; //Text es un componente de React Native que se utiliza para mostrar texto en la pantalla

type ListProps={
    items:String[]; //Type se utiliza en TypeScript para definir nuevos tipos de datos
}

// En est caso "items" seria el prop, y un prop es un dato que pasas a un componente en React , 
//estoy especificando que en componente const para a recibir un prop llamaod items que hemos especificado ton type que va a ser un arregalo de cadenas
const List:React.FC<ListProps>=({items})=>(
    //Al definir React.FC<ListProps>, TypeScript verifica que los props que pasas al componente coincidan con el tipo que definiste. Si intentas pasar un prop incorrecto, TypeScript te dará un error en tiempo de compilación. Esto ayuda a evitar errores en tu código.
    <Text>Pokemon list</Text>

)

//Los parentesis despues de la flecha indica un retorno implicto por lo que no habria que usar un return, ya lo haria autyomatciamnete, se usan para componentes simples

export default List;



