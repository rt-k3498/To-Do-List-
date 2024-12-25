import { View,TextInput, TouchableOpacity,Button,StyleSheet,Text,Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {db} from '../../firebaseConfig'
import { useState } from "react";
import { addDoc,collection,serverTimestamp } from "firebase/firestore";

export default function SignUp ({navigation}:any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (event:any) => {
        setEmail(event)
    }
    const passwordChange = (event:any) =>{
        setPassword(event)
    }

    const submitEmail = async (email:any,password:any) => {
        console.log(email)
        console.log(password)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const userId = auth.currentUser?.uid
            await addDoc(collection(db, `${userId}`), {Note: 'Welcome to your To Do List, delete this task and get started!', done: false, time: serverTimestamp()})
            navigation.navigate('To Do List')
        }catch (error){ 
            Alert.alert('Sign Up Failed')
        }
    }

    const signInNav = () => {
        navigation.navigate('Login')
    }

    return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Sign In</Text>
                <TextInput autoCapitalize='none' style={styles.emailBar} value={email} onChangeText={(event) => emailChange(event)} placeholder='Email' placeholderTextColor={'darkgrey'}></TextInput>
                <TextInput autoCapitalize='none' secureTextEntry={true} style={styles.passwordBar} value={password} onChangeText={(event) => passwordChange(event)} placeholder='Password' placeholderTextColor={'darkgrey'}></TextInput>
                <TouchableOpacity style={styles.loginButton} onPress={() => submitEmail(email,password)}>
                    <Text style={styles.loginButtonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.signInButton} >
                    <Button title={'Login'} onPress={() => signInNav()} ></Button>
                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height : '100%',
        width : '100%',
        alignItems: 'center',
    },

    loginText: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 100,
    },
    emailBar:{
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'darkgrey',
        width: '80%',
        marginTop : 20,
        padding: 5,
        
    },
    passwordBar:{
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'darkgrey',
        marginTop: 20,
        width: '80%',
        padding: 5,
    },
    loginButton:{
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
    },
    loginButtonText:{
        margin: 5,
        marginHorizontal: 10,
    },
    signInButton: {
        marginTop: 400,
    },

})
