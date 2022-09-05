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
        height:150,
        
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100
       
        
        
        
    }
})

export default function Loginscreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }

    function Login() {

        const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then((res) => {console.log(res)
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
    }

    return <View style={styles.view}>
            <View style={styles.view}>
                <Text style={{ fontSize: 44, fontWeight: "800", marginBottom: 20 }}>Login</Text>
                  <TextBox  placeholder="Email Address" onChangeText={text => handleChange(text, "email")} 
                    style={{   
                        marginTop: 0,
                         width: "100%",
                        borderColor: "#0B3270",
                        borderWidth: 5,
                        paddingLeft: 15,
                        borderRadius:100,
                        height:50}} />
                  <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} 
                    style={{   
                        marginTop: 0,
                         width: "100%",
                        borderColor: "#0B3270",
                        borderWidth: 5,
                        paddingLeft: 15,
                        borderRadius:100,
                        height:50}} /> 
               <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%",marginTop:20 }}>
                 <Btn onClick={() => Login()} title="Login" style={{ width: "48%", backgroundColor: "blue",borderRadius:20 }} />
                 <Btn onClick={() => navigation.navigate("Sign Up")} title="Sign Up" style={{ width: "48%", backgroundColor: "#344869",borderRadius:30 }} />
               </View>
           </View>
    </View>
}