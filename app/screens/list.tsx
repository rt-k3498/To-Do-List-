import { addDoc, collection,getDocs} from "firebase/firestore";
import { View,Text,StyleSheet,Button, Touchable, TouchableOpacity} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { db } from "../../firebaseConfig";
import { useState,useEffect } from "react";

export default function List({navigation}:any) {
    const [editState, setEditState] = useState(false)
    const [tasks, setTasks] = useState<any[]>([])
    const [task, setTask] = useState('')
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={styles.editButton} onPress={()=>(handleEdit())}>
              <Text>Edit</Text>
            </TouchableOpacity>
          )
    })

    useEffect(() => {
        async function fetchData() {
            const data = await getDocs(collection(db, 'tasks'))
            data.docs.map( (doc) => {
              setTasks((prev) => [...prev,doc.data()])
            })
        }
        fetchData()
    },[])

    function handleChange (text:any) {
        setTask(text)
    }

    function handleEdit(){
      setEditState(!editState)
    }

    function addTask () {
        addDoc(collection(db, 'tasks'), {Note: task, done: false})
        setTasks((prev) => [{Note: task, done: false},...prev])
        setTask('')
    }

  return (
    <View style={styles.container}>
      <ScrollView style={{flexGrow:1,width:'100%',}}>
        <View style={styles.inputSection}>
            <TextInput style={styles.input} value={task} placeholder='Add a task' onChangeText={(text) => handleChange(text)}/>
            <TouchableOpacity style={styles.button} onPress={() => addTask()}>
                <Text style={{color:'white',fontSize:20,}} >Add</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.taskDisplay} >
            {tasks.map((items,index)=>(
              <View key={index} style={styles.taskHolder}>
                <View style={styles.tasks} >
                  <Text style={{flexWrap: 'wrap',}}>{items.Note}</Text>
                </View>
                <TouchableOpacity style={styles.checkButton}>
                  <Text>Done</Text>
                </TouchableOpacity>
              </View>

            ))}
        </View>
      </ScrollView>
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
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',

  },
    input: {
        flex: 1,
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        padding: 10,
    },
    taskDisplay:{
      flex: 1,
      width: '100%',
      flexDirection: 'column',
    },
    taskHolder:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    tasks: {
      flex: 5,
      borderWidth: 1,
      padding: 8, 
      margin: 10,
      borderRadius: 15,

    },
    checkButton: {
      flex: 1,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
      borderRadius: 15,

    },
    editButton:{
      marginRight: 20,
  
    },
});


