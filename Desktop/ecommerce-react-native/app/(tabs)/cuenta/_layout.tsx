import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const CuentaLayout = () => (
  <Stack>
    <Stack.Screen
      name="userLogged"
      options={{
        headerTitle: () => (
          <Image
            source={require('../../../assets/images/prozis_cover.jpg')}
            style={styles.logo}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#333333', // Color de fondo de la cabecera
        },
        
        headerLeft: () => null, // Deshabilitar el botón de retroceso // Deshabilitar el botón de retroceso
      }}
    />
    <Stack.Screen
      name="userNotLogged"
      options={{
        headerShown: false, // Ocultar el header para esta pantalla
      }}
    />
    <Stack.Screen
      name="registerFormScreen"
      options={{
        headerShown: false, // Ocultar el header para esta pantalla
      }}
    />
    <Stack.Screen
      name="index"
      options={{
        headerTitle: () => (
          <Image
            source={require('../../../assets/images/prozis_cover.jpg')}
            style={styles.logo}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#333333', // Color de fondo de la cabecera
        },
      }}
    />
  </Stack>
);

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },
});

export default CuentaLayout;