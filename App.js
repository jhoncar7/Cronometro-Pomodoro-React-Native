import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { vibrate } from './utils';
import Cronometro from './components/Cronometro'

const DEFAUL_WORK_MINS = 1/6;
const DEFAUL_BREAK_MINS = 1/4;
const minTosec = min => min * 60;
var interval;

export default function App() {

  const [timeRemaining, setTimeRemaining] = useState(minTosec(DEFAUL_WORK_MINS));
  const [activeTimer, setActiveTimer] = useState(false);
  const [work, setWork] = useState(true);

  useEffect(() => {
    console.log(timeRemaining);
    if (timeRemaining===0) {
      vibrate();
      setTimeRemaining(minTosec(work ? DEFAUL_BREAK_MINS : DEFAUL_WORK_MINS));
    }
  },[timeRemaining]);

  const onToogleButton = () => {
    /* if (activeTimer) {
      setActiveTimer(false);
      clearInterval(activeTimer);
    } else {
      setActiveTimer(setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
        if (timeRemaining === 0) {
          vibrate();
        }
      }, 1000));
    } */
    if(activeTimer){
      clearInterval(interval);
    }else{
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }
    setActiveTimer(!activeTimer); //setActiveTimer(prev => !prev);
  }
    

  return (
    <View style={styles.container}>
      {/* <Button title={'Vibracion Phone'} onPress={()=>{vibrate()}}/> */}
      <Text style={[styles.title, styles.center]}>Tiempo de {(work) ? 'Trabajo' : 'Descanso'}</Text>
      <Cronometro timeRemaining={timeRemaining} />
      <View style={[styles.buttonContainer, styles.center]}>
        <Button title={(activeTimer) ? 'Pausar':'Iniciar'} onPress={onToogleButton}/>
        <Button title={'Reiniciar'} />
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
    alignItems: 'stretch',
    //justifyContent: 'center',// de arriba abajo
    paddingTop: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  center: {
    alignSelf: 'center',
  },
  buttonContainer:{
    marginTop:25,
    padding:20,
    flexDirection:'row',
  }
});
