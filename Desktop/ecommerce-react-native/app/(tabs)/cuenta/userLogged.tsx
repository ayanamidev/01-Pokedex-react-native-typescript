import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const UserLogged = () => {
  const logout = () => {
    const auth = getAuth();
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel" },
      {
        text: "Log out",
        onPress: async () => {
          auth
            .signOut()
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
    <View style={styles.container}>
      <Text style={styles.text}>Usuario está logueado</Text>
      <Pressable onPress={logout} style={styles.button}>
        {({ pressed }) => (
          <FontAwesome
            name="sign-out"
            color="black"
            size={25}
            style={{
              marginLeft: 15,
              opacity: pressed ? 0.5 : 1,
            }}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f5f5f5', // Fondo claro
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default UserLogged;