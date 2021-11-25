import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { vibrate } from './utils';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button title={'Vibracion Phone'} onPress={()=>{vibrate()}}/> */}
      <Text style={[styles.title, styles.center]}>Cronometro Pomodoro!</Text>
      <View>
        <Text style={[styles.title, styles.center]}>00:00</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //una sola columna
    backgroundColor: '#fff', //color de fondo blanco
    //alignItems: 'center',//centra los elementos
    alignItems:'stretch',
    //justifyContent: 'center',// de arriba abajo
    paddingTop: 150,
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    textTransform:'capitalize'
  },
  center:{
    alignSelf:'center',
  }
});
