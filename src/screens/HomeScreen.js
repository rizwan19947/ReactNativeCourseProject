import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {


    return <View>


        <Text style={styles.text}>Hello There! This is the home screen.</Text>

        <Button
            title="Go to Components Demo"
            onPress={() => navigation.navigate("Components")}
        />


        <Button
            title="Goto List Demo"
            onPress={() => navigation.navigate("List")}
        />



        <Button
            title="Goto Image Demo"
            onPress={() => navigation.navigate("Image")}
        />



        <TouchableOpacity
            onPress={() => navigation.navigate("Components")}
        >
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>

        </TouchableOpacity>


    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
