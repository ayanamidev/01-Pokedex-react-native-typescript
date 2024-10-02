import Button from "@/components/Button";
import { PokemonDetails } from "@/types/app";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text,StatusBar, View, ScrollView, Image } from "react-native";
import PokemonTypeIcons from "@/assets/icons";
import { Audio } from "expo-av";


const PokemonDetailsProps=()=>{
    const{id}=useLocalSearchParams();
    const[pokemonDetails,setPokemonDetails]=useState<PokemonDetails>();
    const [isLoading,setIsLoading]=useState(false);
    const[audioSound,setAudioSond]=useState<Audio.Sound>();

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response=>response.json())
        .then(data=>setPokemonDetails(data))
        .finally(()=>setIsLoading(false));

    },[id]);

    useEffect(()=>{
        return audioSound
        ?()=>{
            audioSound.unloadAsync();
        }
        :undefined;
    },[audioSound]);


    if(isLoading){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={styles.loading}>Loading...</Text>
            </SafeAreaView>
        );
    };

    const goHome=()=> router.push("/"); //vuelves a la pagina de inicio
    //router.back(); te llevaria a la pagina anterior 
    const capitalize = (text:string="") =>text.at(0)?.toUpperCase()+text.substring(1);
    if(!pokemonDetails){
        return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.largeText}> No pokémon found</Text>
        </SafeAreaView>);
    }

    const playAudio=async()=>{
        const{sound}=await Audio.Sound.createAsync(
            {uri:pokemonDetails.cries.latest},{
                shouldPlay:true,
                volume:1,
            }
        );
        setAudioSond(sound);
        await sound.playAsync();
    };


    return(
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.card}>
                <Image 
                source={ {uri:pokemonDetails.sprites.other["official-artwork"].front_default}}
                style={styles.image}/>
                <Text style={[styles.largeText, styles.boldText]}>
                    {capitalize(pokemonDetails.name)}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="Play" leftIcon="play-arrow" onPress={playAudio}/>
                <Button text="Home" leftIcon="home" onPress={goHome}/>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.boldText}>Height:</Text>
                <Text>{pokemonDetails.height / 10}cm.</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.boldText}>Weight:</Text>
                <Text>{pokemonDetails.weight / 10}kg.</Text>
            </View>
            <View style={styles.typesContainer}>
                {pokemonDetails.types.map(pokemonType=>(
                    <Image key={pokemonType.type.url} source={PokemonTypeIcons[pokemonType.type.name]}/>
                ))}
            </View>
        </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    loading:{
        textAlign:"center",
        fontSize:24,
    },
    scroll:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap:20,
    },
    card:{
        backgroundColor:"pink",
        paddingVertical:20,
        paddingHorizontal:50,
        borderRadius:20,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        gap:20,
    },
    image:{
        height:200,
        width:200,
    },
    largeText:{
        textAlign:"center",
        fontSize:24,
    },
    boldText:{
        fontWeight:"bold",
    },
    dataContainer:{
        flexDirection:"row",
        gap:20,
    },
    typesContainer:{
        flexDirection:"row",
        gap:20,
    }

    
})

export default PokemonDetailsProps;