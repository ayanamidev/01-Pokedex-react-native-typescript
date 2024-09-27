import { Pokemon } from "@/types/app";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ListItemProps={
    item:Pokemon;
}

const ListItem:React.FC<ListItemProps>=({item})=>{
    const id=item.url.split('/').at(-2);
    return(
        <Pressable style={styles.container} onPress={()=>router.push( `/${id}` )}>
            <Text style={styles.text}>{item.name.toUpperCase()}</Text>
        </Pressable>
    )
    
};
const styles=StyleSheet.create({
    container:{
        backgroundColor:"pink",
        margin:5,
        width:300,
    },
    text: {
        textAlign:"center",
        padding:5,
    },
});

export default ListItem;