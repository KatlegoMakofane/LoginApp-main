import React from 'react-native'
import { Text, View, StyleSheet,TextInput} from "react-native"

import firebase from 'firebase/app';
import "firebase/auth";
import Btn from '../components/Btn'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';



const styles = StyleSheet.create({
    view: {
      
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    container:{
       
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    }
    ,title:{
        fontSize:50,
       marginTop:50
    },
    todoinput:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row", 
    },
    addbutton:{
        marginTop:100,
        height: 80,
        width: "32%",
        borderRadius: 25,
        marginTop: 20,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    }
})

const Home=({navigation}) =>{
   

    



    return (
    <View style={styles.view}>
        <Text style={{fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Well-done</Text>
        <Btn  style={{ 
            height: 42,
        width: "92%",
        borderRadius: 25,
        marginTop: 20,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    }}title="Log Out" onClick={() => firebase.auth().signOut() } />

        <View >
        
          <TodoHeader/>
          <TodoList/>
            
        </View>
</View>
    )
}
export default Home;