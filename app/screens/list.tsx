import { addDoc, collection, query, where } from "firebase/firestore";
import { View,Text,StyleSheet,Button, Touchable, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { db } from "../../firebaseConfig";
import { useState,useEffect } from "react";




export default function List() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    useEffect(() => {
        //const data = query(collection(db, 'tasks'), where('done', '==', false))
        //console.log(data)

    },[])

    function handleChange (text:any) {
        setTask(text)
    }

    function addTask () {
        addDoc(collection(db, 'tasks'), {Note: task, done: false})
    }

  return (
    <View style={styles.container}>
        <View style={styles.inputSection}>
            <TextInput style={styles.input} placeholder='Add a task' onChangeText={(text) => handleChange(text)}/>
            <TouchableOpacity style={styles.button} onPress={() => addTask()}>
                <Text style={{color:'white',fontSize:20,}} >Add</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
  },
  button: {
        width: '20%',
        height: 40,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',

  },
    input: {
        flex: 1,
        width: '80%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        padding: 10,
    },
});


