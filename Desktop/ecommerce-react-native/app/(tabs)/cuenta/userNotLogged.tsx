import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../../../components/FormInput'; // Asegúrate de que la ruta es correcta
import { z } from 'zod';

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
          router.push("/(tabs)/cuenta");
        }
      })
      .catch((error) => Alert.alert(error.code));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <FormInput
        control={control}
        name="email"
        autoCapitalize="none"
        autoComplete="email"
        inputMode="email"
        placeholder="Enter your email"
      />
      <FormInput
        control={control}
        name="password"
        autoCapitalize="none"
        inputMode="text"
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <Link href="/Registrarse" style={styles.link}>
        Don't have an account yet? Register here
      </Link>
      <Button onPress={handleSubmit(onSubmit)} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
  input: {
    borderColor: "blue",
    borderWidth: 3,
    padding: 10,
    width: 200,
  },
  link: {
    color: "blue",
  },
});

export default UserNotLogged;