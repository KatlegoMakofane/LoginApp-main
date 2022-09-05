
import { nanoid } from "@reduxjs/toolkit";
import React ,{useState} from "react"
import { Text , View,Alert} from "react-native"
import {  TextInput, TouchableOpacity } from 'react-native-web'
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../redux/taskSlice";



const TodoHeader = () => {
  const tasks=useSelector(state=>state.tasks)
  console.log(tasks);
  const [todo, setTodo] = useState("");
const dispatch=useDispatch();


  const onSubmitTask = () => {

    //ref(ref,"user/todo"+tasks.length)
    
  const data= {
      id: nanoid(),
      text:todo
    };
    //set(ref,data);
  dispatch(addTask(data))
  setTodo("");

    
  }
  




  return (
    <View style={{  marginTop:80 ,width:"100%",alignItems:"center"}} >
        <Text 
           style={{
            fontSize:30,
            fontWeight:"bold",
            textAliogn:"center",
            marginTop:20
           }}
         >
           Redux ToDo List
        </Text>
        <View  style={{  width:"100%", flexDirection:"row",}}>
        <TextInput style={{
          borderColor:"gray",
          borderWidth:5,
          padding:10,
          margin:10,
          width:"80%",
          borderRadius:100,
          marginTop:20,
          alignItems:"center",
          justifycontent:"center",
          marginLeft:30
         }}
         placaholder="Add Todo"
         onChangeText={setTodo}
         value={todo}
          
      />
        <TouchableOpacity
            style={{
                backgroundColor:"blue",
                padding:10,
                margin:10,
                width:"20%",
                borderRadius:100,
                justifycontent:"center",
                alignItems:"center",
                justifycontent:"center",
                height:50,
                marginTop:20

            }}
            onPress={onSubmitTask}
        >
            <Text style={{color:"white",fontSize:30,}}>
                Add
            </Text>
            
        </TouchableOpacity>
      
        </View>
        
    </View>
  )
}

export default TodoHeader