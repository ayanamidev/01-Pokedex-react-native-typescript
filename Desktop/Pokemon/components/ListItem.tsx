import { Pokemon } from "@/types/app";
import { StyleSheet, Text, View } from "react-native";

type ListItemProps={
    item:Pokemon;
}

const ListItem:React.FC<ListItemProps>=({item})=>(
    <View style={styles.container}>
        <Text style={styles.text}>{item.name.toUpperCase()}</Text>
    </View>
);
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