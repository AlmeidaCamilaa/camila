import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

import Apostila03 from './Componentes/apostila_03/index';
import Apostila04 from './Componentes/apostila_04/index';
import Apostila_05 from './Componentes/apostila_05/index';
import Apostila_06 from './Componentes/apostila_06/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
