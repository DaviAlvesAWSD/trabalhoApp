import React , {useState, useEffect} from "react";
import {
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebaseconfig.js";


import styles from "./style.js";
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const loginFirebase = async () => {
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth,email, senha )
            .then((userCrencial) =>{
                console.error("Logado com sucesso:", userCrencial.user);
                let user = userCrencial.user;
                navigation.navigate("TelaPrincipal", {idUser: user.uid})
            })
            .catch((error) => {
                setErrorLogin(true)
                console.error("Erro no login:", error);
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {

    }, []);

    return(
        <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>
                Bem-vindo
            </Text>
            <TextInput 
                style={styles.input}
                placeholder="enter your email"
                placeholderTextColor='#838383'
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
                
            <TextInput 
                style={styles.input}
                securityTextEntry={true}
                placeholder="enter your password"
                placeholderTextColor='#838383'
                secureTextEntry={true}
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />

            {errorLogin === true
            ?
                <View styles={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.warningAlert}>invalid email or password</Text>
                </View>
            :
                <View>
                </View>
            }

            {email === "" || senha === "" 
            ?
                <TouchableOpacity 
                    disabled={true}
                    style={styles.btnLogin}
                > 
                    <Text style={styles.textBtnLogin}>Entrar</Text>
                </TouchableOpacity>
            :
                <TouchableOpacity 
                    disabled={false}
                    style={styles.btnLogin}
                    onPress={loginFirebase}
                > 
                    <Text  style={styles.textBtnLogin}>Entrar</Text>
                </TouchableOpacity>
            }

        </KeyboardAvoidingView>
    )
}