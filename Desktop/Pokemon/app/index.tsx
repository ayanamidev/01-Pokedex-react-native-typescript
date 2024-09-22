import { Text, View, StyleSheet} from "react-native";
import List from "@/components/List";


const HomeScreen =()=>( //HomeScreem representa la pantalla principal o inicio de una app
    <View style={Styles.container}>
        <List items={[]}></List>
        
        
    </View>
    );

const Styles=StyleSheet.create( {//StyleSheet.create esta creanod un objeto llamado Style 
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

}

);

    export default HomeScreen;

