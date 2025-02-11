import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput, Button, Text, Title, Paragraph } from 'react-native-paper';
import FormInput from '@/components/FormInput'; // Asegúrate de que la ruta es correcta
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be a least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Password must be a least 6 characters long"),
});

const RegisterFormScreen = () => {
  const auth = getAuth();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (formData: { email: string; password: string; confirmPassword: string }) => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Passwords don't match");
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredentials) => {
          const { user } = userCredentials;
          if (user.email) {
            await AsyncStorage.setItem("userEmail", user.email);
            router.push("/cuenta/userLogged");
          } else {
            Alert.alert("User email not found");
          }
        })
        .catch(() => Alert.alert("Error creating user"));
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Registrarse</Title>
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
      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirmar contraseña"
        mode="outlined"
        autoCapitalize="none"
        inputMode="text"
        placeholder="Repeat your password"
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button} buttonColor="black">
        Registrarse
      </Button>
      <Paragraph style={styles.link}>
        Ya tienes una cuenta? <Link href="/cuenta/userNotLogged" style={styles.linkText}>Inicia sesión aqui</Link>
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

export default RegisterFormScreen;