import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable, ActivityIndicator } from 'react-native'
import {useState} from 'react'
import logo from './assets/icon.png'
import firebase from './firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    function handleLogin() {
        if(username == '') {
            setMessage('Harap masukkan username!')
            return;
        }
        if(password == '') {
            setMessage('Harap masukkan password!')
            return;
        }
        
        setLoading(true)

        signInWithEmailAndPassword(firebase.auth, username + "@barrumengaji.app", password).catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    setMessage("Username tidak ditemukan!")
                    setUsername('')
                    setPassword('')

                    break;
                case 'auth/wrong-password':
                    setMessage("Password salah!")
                    setPassword('')

                    break;
                case 'auth/internal-error': 
                    setMessage("Terjadi kesalahan! Silahkan coba beberapa saat lagi.")
                    
                    break;
                
            }

            console.log(error.code)

            setLoading(false)
        })
    }

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
        <Image source={logo} style={styles.logo} />
        
        <Text style={styles.subtitle}>Welcome to</Text>
        <Text style={styles.title}>Barru Mengaji</Text>
        {message == '' ? (
            <Text style={styles.description}>Silahkan masuk untuk melanjutkan</Text>
        ) : (
            <Text style={styles.alert}>{message}</Text>
        )}

        <View style={styles.input_group}>
            <TextInput onChangeText={(t) => setUsername(t)} value={username} placeholder='Masukkan Username....' style={styles.input} />
        </View>
        <View style={styles.input_group}>
            <TextInput secureTextEntry={true} onChangeText={(t) => setPassword(t)} value={password} placeholder='Masukkan Password....' style={styles.input} />
        </View>

        <Pressable onPress={handleLogin} style={styles.button} disabled={loading ? true : false}>
            {loading ? (
                <ActivityIndicator size='small' color='#fff' />
            ) : (
                <Text style={styles.button_label}>Login</Text>
            )}
        </Pressable>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#499E2B',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 24
    },
    input_group: {
        marginBottom: 14
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 18
    },
    subtitle: {
        color: '#499E2B',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        color: '#499E2B',
        fontSize: 28,
        marginBottom: 10
    },
    description: {
        fontSize: 14,
        color: '#A8A8A8',
        marginBottom: 20
    },
    button: {
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#499E2B',
        alignItems: 'center',
        borderRadius: 24,
        marginTop: 10
    },
    button_label: {
        color: '#fff',
        fontWeight: 'bold'
    },
    alert: {
        color: '#E10303',
        marginBottom: 20
    }
})