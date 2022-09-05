import { margin } from '@mui/system';
import React ,{useState} from "react"
import { FlatList ,StyleSheet,Text,View,TouchableOpacity} from "react-native"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { deleteTask } from "../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


  
  const TodoList = () => {
 
    const dispatch=useDispatch();
    const todos = useSelector((state) => state.tasks);
    const [todo, setTodo] = useState("");
    // console.log(todos);
    const data = [
      {
        id: 1,
        title: "Learn React Native",
      },
      {
        id: 2,
        title: "Learn Redux Toolkit",
      },
    ];
     
    const deleteTask1  = (data) => {
        
     f
              dispatch(deleteTask( (todo)))
          setTodo("");
        
         
          
       
      }
      
    
  //   const rendertodo=tasks.map(data=>{
  //     return(

  //         <View style={styles.item}>
  //             <Text style= {styles.title}>{data.title}</Text>
        
  //              <View style={styles.delete}>
  //                  <ModeEditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
  //                  <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
  //                  <RemoveRedEyeIcon style={{ color: "red", cursor: "pointer"}}/>
  //             </View>
              
  //         </View>
  //     )
  //  }
  //   )
     


      
     
     //renderItem function with a delete button
     const renderitem=({item})=>{
        return(
            <View style={styles.item}>
                <Text style= {styles.text}>{item.text}</Text>
                <TouchableOpacity  style={ {flexDirection: "row" }} onPress={ deleteTask1}>
                 <View style={styles.delete}>
                 
                     <ModeEditIcon style={{ color: "#3c40c6", cursor: "pointer" }} />
                   
                     <DeleteIcon style={{ color: "red", cursor: "pointer" } }  
                     /> 
                     <RemoveRedEyeIcon style={{ color: "red", cursor: "pointer"}}/>
                 
                </View>
                </TouchableOpacity>
            </View>
        )
     }

  return (

    <View >
      <Text style={{ color: "#3c40c6", cursor: "pointer", alignItems:"center" ,justifycontent:"center"}}>TodoList</Text>
      <FlatList
        data={todos}
        renderItem={renderitem}
        keyExtractor={(item)=>item.id}
        
      />
    </View>
  )
}

export default TodoList;

const styles =StyleSheet.create({
    item: {
        backgroundColor: "grey",
       
        marginVertical: 8,
        marginHorizontal: 10,
        flexDirection: "row",
      
        marginTop: 20,
        width: "80%",
       borderColor: "#0B3270",
       borderWidth: 5,
     marginLeft:20,
       borderRadius:10,
       height:50,
       alignItems:"center",
       display:"flex",
       justifyContent:"space-between"
      },
      title: {
        fontSize: 18,
        alignItems:"left",
      
      
      },
      delete: {
        fontSize: 20,
        color: "red",
        alignItems:"right",
        justifycontent:"right",
         width:100,
         height:"auto",
        flexDirection: "row",

      },
})