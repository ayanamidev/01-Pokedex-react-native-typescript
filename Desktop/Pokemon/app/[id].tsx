import { PokemonDetails } from "@/types/app";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const PokemonDetailsProps=()=>{
    const{id}=useLocalSearchParams();
    const[pokemonDetails,setPokemonDetails]=useState<PokemonDetails>();
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response=>response.json())
        .then(data=>setPokemonDetails(data))
        .finally(()=>setIsLoading(false));

    },[id]);

    if(isLoading){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.loading}>Loading...</Text>
            </SafeAreaView>
        );
    };
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.card}>

        </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    loading:{
        textAlign:"center",
        fontSize:24,
    },
    card:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"pink",
        height:500,
        width:300,
    },
    
})

export default PokemonDetailsProps;