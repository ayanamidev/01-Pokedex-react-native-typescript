import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import UserLogged from "./userLogged";
import UserNotLogged from "./userNotLogged";
import Loading from "../../../components/Loading";  

export default function Cuenta() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    // Cada vez que el valor del usuario cambie, se ejecutará esta función
    // El auth es el objeto de autenticación de firebase que sirve para saber si el usuario está logueado o no
    // user es el objeto que devuelve firebase si el usuario está logueado
    onAuthStateChanged(auth, (user) => {
      setValue(user ? true : false);
    });
  }, []);

console.log(value);
  if (value === null) {
    return <Loading />;
  }
  return value ? <UserLogged /> : <UserNotLogged />;
}
