import React from 'react';
import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { Button, Title, Paragraph, Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import{Avatar} from "react-native-elements";

const UserLogged = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return null; // O muestra un mensaje de error o redirige al usuario
  }

  const { uid, photoURL, displayName, email, phoneNumber } = user;

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel" },
      {
        text: "Log out",
        onPress: async () => {
          signOut(auth)
            .then(async () => {
              await AsyncStorage.removeItem("userEmail");
              router.replace("/cuenta/userNotLogged"); // Usar replace en lugar de push
            })
            .catch(() => Alert.alert("Error during logout process"));
        },
      },
    ]);
  };

  

  const changeAvatar = async () => {
    // Pedir permisos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permiso denegado", "Necesitas permitir el acceso a la galería.");
      return;
    }
  
    console.log("Permiso concedido, abriendo galería...");
  
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images',
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        console.log("Imagen seleccionada:", result.assets[0].uri);
      } else {
        console.log("Selección cancelada.");
      }
    } catch (error) {
      console.error("Error al abrir la galería:", error);
  
      // En Android, intenta abrir la galería manualmente
      if (Platform.OS === "android") {
        IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.PICK);
      }
    }
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />

      </Avatar>
      <View>
       <Button
        mode="contained"
        onPress={logout}
        
        icon={() => <FontAwesome name="sign-out" size={24} color="white" />}
      >
        Cerrar sesión
      </Button> 
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,

  },
  avatar:{
    marginRight: 20,
    backgroundColor:"green"
  }
});

export default UserLogged;