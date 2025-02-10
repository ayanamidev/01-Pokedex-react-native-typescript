import { StyleSheet, View, Text } from 'react-native';



export default function Cuenta () {
  return (
    <View style = {{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <Text>Cuenta</Text>
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
