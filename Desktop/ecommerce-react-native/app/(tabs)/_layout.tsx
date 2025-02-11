import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red', // Color activo de los iconos y títulos
        tabBarInactiveTintColor: 'white', // Color inactivo de los iconos y títulos // Color de fondo de la pestaña activa
        tabBarStyle: {
          backgroundColor: '#333333', // Color de fondo de la barra de pestañas
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Comprar',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          headerTitle: () => (
                    <Image
                      source={require('../../assets/images/prozis_cover.jpg')}
                      style={styles.logo}
                    />
                  ),
                  headerTitleAlign: 'center', 
                  headerStyle: {
                      backgroundColor: '#333333', // Color de fondo de la cabecera
                    },


        }}
      />
      <Tabs.Screen
        name="cesta"
        options={{
          title: 'Cesta',
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
          headerTitle: () => (
                    <Image
                      source={require('../../assets/images/prozis_cover.jpg')}
                      style={styles.logo}
                    />
                  ),
                  headerTitleAlign: 'center', 
                  headerStyle: {
                      backgroundColor: '#333333', // Color de fondo de la cabecera
                    },
        }}
      />
      <Tabs.Screen
        name="cuenta"
        options={{
          title: 'Cuenta',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
  },
});
