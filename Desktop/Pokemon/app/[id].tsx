import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const PokemonDetailsProps=()=>{
    const{id}=useLocalSearchParams();
    return(
        <SafeAreaView>
        <Text style={styles.text}>{id}</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
})

export default PokemonDetailsProps;