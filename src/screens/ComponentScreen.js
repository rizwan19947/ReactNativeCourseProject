import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = "Hi there friend! This is a Javascript variable, we cannot however, show a javascript object this way.";
    const greeting2 = <Text>This is how we assign a JSX element and directly referencing inside the View block</Text>
    const name = <Text> Rizwan</Text>

    return (

        <View>

        <Text style={styles.textStyle1}>This is the components screen.</Text>
        <Text style={styles.textStyle1}>This is a second line within the view component!</Text>
        <Text style={styles.textStyle1}>{greeting}</Text>
        <Text style={styles.textStyle1}>{greeting2}</Text>

            <Text style={styles.textStyle1}>Getting started with React Native!</Text>
            <Text style={styles.textStyle2}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle1: {
        fontSize: 30
        
    },

    textStyle2: {
        fontSize: 45
    }, 

    textStyle3: {
        fontSize: 20
    }

});

export default ComponentsScreen;
