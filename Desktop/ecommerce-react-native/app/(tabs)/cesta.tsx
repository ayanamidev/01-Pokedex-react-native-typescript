import { StyleSheet, View, Text } from 'react-native';



export default function Cesta() {
  return (
    <View style = {{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <Text>Cesta</Text>
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
