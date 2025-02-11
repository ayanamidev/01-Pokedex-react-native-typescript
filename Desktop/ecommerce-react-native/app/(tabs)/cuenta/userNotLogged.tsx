import React from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput, Button, Text, Title, Paragraph } from 'react-native-paper';
import FormInput from '../../../components/FormInput'; // Asegúrate de que la ruta es correcta

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be a least 6 characters long"),
});

const UserNotLogged = () => {
  const auth = getAuth();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (formData: { email: string; password: string }) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (userCredential) => {
        const { email } = userCredential.user;
        if (email) {
          await AsyncStorage.setItem("userEmail", email);
          router.push("/(tabs)/cuenta/userLogged");
        }
      })
      .catch((error) => Alert.alert(error.code));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Iniciar sesión</Title>
      <FormInput
        control={control}
        name="email"
        label="Correo eletrónico"
        mode="outlined"
        autoCapitalize="none"
        autoComplete="email"
        inputMode="email"
        placeholder="Enter your email"
      />
      <FormInput
        control={control}
        name="password"
        label="Contraseña"
        mode="outlined"
        autoCapitalize="none"
        inputMode="text"
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button} buttonColor="black">
        Iniciar sesión
      </Button>
      <Paragraph style={styles.link}>
        No tienes una cuenta aún? <Link href="/cuenta/registerFormScreen" style={styles.linkText}>Regístrate aquí</Link>
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: "red",
  },
});

export default UserNotLogged;