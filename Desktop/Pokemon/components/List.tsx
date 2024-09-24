import { Pokemon } from "@/types/app";
import { FlatList, StyleSheet, Text } from "react-native"; //Text es un componente de React Native que se utiliza para mostrar texto en la pantalla
import ListItem from "./ListItem";

type ListProps={
    items:Pokemon[]; //Type se utiliza en TypeScript para definir nuevos tipos de datos
}


// En est caso "items" seria el prop, y un prop es un dato que pasas a un componente en React , 
//estoy especificando que en componente const para a recibir un prop llamaod items que hemos especificado ton type que va a ser un arregalo de cadenas
const List:React.FC<ListProps>=({items})=>{
    //Al definir React.FC<ListProps>, TypeScript verifica que los props que pasas al componente coincidan con el tipo que definiste. Si intentas pasar un prop incorrecto, TypeScript te dará un error en tiempo de compilación. Esto ayuda a evitar errores en tu código.
    return (
    <FlatList
    data={items} //son los elementos que queremos mostrar en la lista, viene de los props(parametros, ene ste caso items que es un tipo de dato que hemos creado)
    keyExtractor={item=>item.url}
    renderItem={({item})=><ListItem item={item}/>}
    />
    );

};


//Los parentesis despues de la flecha indica un retorno implicto por lo que no habria que usar un return, ya lo haria autyomatciamnete, se usan para componentes simples

export default List;



