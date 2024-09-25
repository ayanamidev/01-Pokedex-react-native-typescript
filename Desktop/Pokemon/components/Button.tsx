import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps={ //describimos las propiedads que va a tener el boton
    text:string;
    disabled?:boolean; //propiedad opcional 
    onPress:()=>void;//va a ser una funcion que no devuelve nada>> void
    leftIcon?:typeof MaterialIcons.defaultProps.name; //expo vector icons>> https://icons.expo.fyi/Index
    rightIcon?:typeof MaterialIcons.defaultProps.name;// es un string que solo puede tener como valores MaterialIcons
};

const Button:React.FC<ButtonProps>=({
    text,
    disabled=false,onPress,
    leftIcon="",
    rightIcon="",
})=>( //creamos el componente y como es un componente funcional tiene que devolver algo y llevar un return
    <Pressable disabled={disabled} onPress={onPress} style={disabled? {...styles.button,...styles.disableButton}: styles.button}>
        {leftIcon &&<MaterialIcons name={leftIcon} size={24} color="black"/>}
            <Text style={styles.text}>{text}</Text>  
        {rightIcon &&<MaterialIcons name={rightIcon} size={24} color="black"/>}    
    </Pressable>

);

const styles=StyleSheet.create({
    button:{
        flexDirection:"row",
        justifyContent:"center",
        gap:5,
        backgroundColor:"pink",
        borderRadius:10,
        padding:10,
    },
    disableButton:{
        opacity:0.5,
    },
    text:{
        marginHorizontal:10,
    }
})
export default Button;