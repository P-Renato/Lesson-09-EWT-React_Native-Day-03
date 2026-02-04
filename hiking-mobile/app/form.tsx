
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, GestureResponderEvent, Button, View, TextInput, TextInputChangeEvent } from "react-native";

export default function Form() {

    const [text, setText] = useState("")

    const sendData = async (e: GestureResponderEvent) => {
        console.log("Send Data here: ", text);
        
        
            console.log("Sending response...")

            const url = "http://192.168.0.66:4000/api/notes";

            const opts = {
                method: "POST",
                body: JSON.stringify({ message: text }),
                headers: { 
                    "Content-Type": "application/json",
                },
            }

            fetch(url, opts)
                .then(res => res.json())
                .then(fromServer => {
                    console.log("fs", fromServer);
                    setText(fromServer)
                })
                .catch(console.error)
        
      }
  return (
    <View style={styles.container} >
        <TextInput 
            style={styles.textInput} 
            value={text} 
            onChange={(e: TextInputChangeEvent) => {
                setText(e.nativeEvent.text)
            }} 
        />
      <Link  href={"/"} >Go back home</Link>
      <Button title="SEND DATA" onPress={sendData} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 14,
        color: 'blue',
        padding: 12,
        margin: 222,
    },
    button: {
        padding: 3,
        margin: 22,
        borderRadius: 2,
        borderBlockColor: 'black'
    },
    textInput: {
        borderWidth: 2,
        padding: 12,
        margin: 22,
        width: "80%"

    }
})