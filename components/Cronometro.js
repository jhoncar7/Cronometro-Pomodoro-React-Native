import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Cronometro = (props) =>{
    const mins = parseInt(props.timeRemaining/60);
    const secs = parseInt(props.timeRemaining%60);
    const timeRemaining = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    return(
        <View style={styles.vista}>
            <Text style={styles.text}>{timeRemaining}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:70
    },
    vista:{
        padding:50,
        backgroundColor:'#ccc',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Cronometro;