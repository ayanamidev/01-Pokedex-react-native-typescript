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

  

  return (
    <View style={styles.content}>
  
    
       <Button
        mode="contained"
        onPress={logout}
        buttonColor='#ff0000'
        icon={() => <FontAwesome name="sign-out" size={24} color="white" />}
      >
        Cerrar sesión
      </Button> 
      </View>
    
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,

  },
  button: {
    
  }
});

export default UserLogged;