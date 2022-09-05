import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import TextBox from "../components/TextBox"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'aqua',
        height:100,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100
       
    }

})

export default function SignUpScreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function SignUp() {

        const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
    }

    return <View style={styles.view}>
        <View  style={styles.view}>
           <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Sign Up</Text>
           <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} 
           style={{   
                marginTop: 0,
                 width: "100%",
                borderColor: "#0B3270",
                borderWidth: 5,
                paddingLeft: 15,
                borderRadius:100,
                height:50}} />
           <TextBox placeholder="Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}
            style={{   
                marginTop: 0,
                 width: "100%",
                borderColor: "#0B3270",
                borderWidth: 5,
                paddingLeft: 15,
                borderRadius:100,
                height:50}} />
           <TextBox placeholder="Confirme Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}
            style={{   
                marginTop: 0,
                 width: "100%",
                borderColor: "#0B3270",
                borderWidth: 5,
                paddingLeft: 15,
                borderRadius:100,
                height:50}} />
           <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", marginTop:20}}>
               <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869",borderRadius:20 }} />
               <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "blue",borderRadius:20}} />
           </View>
       </View>
    </View>
}