import { View,TextInput, TouchableOpacity, Button,Alert } from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebaseConfig';
import { Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Login ({navigation}:any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailchange = (text:any) => {
        setEmail(text)
    }
    const passwordChange = (text:any) =>{
        setPassword(text)
    }

    const submitEmail = async (email:any,password:any) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            navigation.navigate('To Do List')
        }catch (error){ 
            Alert.alert('Sign Up Failed')
        }
    }

    const signInNav = () => {
        navigation.navigate('Sign Up')
    }

    return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Login</Text>
                <TextInput autoCapitalize='none' style={styles.emailBar} value={email} onChangeText={(event) => emailchange(event)} placeholder='Email' placeholderTextColor={'darkgrey'}></TextInput>
                <TextInput autoCapitalize='none' secureTextEntry={true} style={styles.passwordBar} value={password} onChangeText={(event) => passwordChange(event)} placeholder='Password' placeholderTextColor={'darkgrey'}></TextInput>
                <TouchableOpacity style={styles.loginButton} onPress={() => submitEmail(email,password)}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signInButton} >
                    <Button title={'Sign Up'} onPress={() => signInNav()} ></Button>
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