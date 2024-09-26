import { Text, View, StyleSheet, StatusBar, Pressable} from "react-native";
import List from "@/components/List";
import { Pokemon } from "@/types/app";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";


const HomeScreen =()=>{ //HomeScreem representa la pantalla principal o inicio de una app
    const[items,setItems] = useState<Pokemon[]>([]); //https://pokeapi.co/api/v2/pokemon
    const[isLoading,setIsLoading]=useState(true);
    const[next,setNext]=useState(null);
    const[previous,setPrevious]=useState(null);

    const fetchPokemon=(url:string|null)=>{
        if(!url){
            return;
        }
        setIsLoading(true);
        fetch(url)
            .then(data =>data.json())
            .then(result=>{
                setItems(result.results);
                setNext(result.next);
                setPrevious(result.previous);
            })
            .finally(()=>setIsLoading(false));

    };

    useEffect(()=>fetchPokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"),[]);

    if(isLoading){
        return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.loading}>Loading...</Text>   
        </SafeAreaView>
        )
        
    }




    return(
    <SafeAreaView style={styles.container}>
        <List items={items}/>
        <View style={styles.buttonContainer}>
            <Button 
                text="Previous"
                leftIcon="navigate-before"
                onPress={()=>{fetchPokemon(previous) }} 
                disabled={!previous}/>
            <Button 
                text="Next" 
                rightIcon="navigate-next" 
                onPress={()=>{fetchPokemon(next)}} 
                disabled={!next}/>
        </View>
        
        
    </SafeAreaView>
    );
    
};

const styles=StyleSheet.create( {//StyleSheet.create esta creanod un objeto llamado Style 
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:StatusBar.currentHeight||0,
    
    },
    loading:{
        fontWeight:"bold",
        fontSize:32,
        textAlign:"center",
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginVertical:20,
        gap:50,
        

    },
    button:{
        backgroundColor:"pink",
        padding:10,
        width:100
    },
    text:{
        textAlign:"center",
    }

}

);

    export default HomeScreen;

