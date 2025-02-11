import { StyleSheet, View, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';



export default function Cesta() {
  return (
    <View style = {{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <Text>Cesta</Text>
          <Paragraph >
        Ya tienes una cuenta? <Link href="/cuenta/userNotLogged">Inicia sesión aqui</Link>
      </Paragraph>
        </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
