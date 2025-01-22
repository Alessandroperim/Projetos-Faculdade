
import { TextInput, TouchableOpacity, Image, View, Text } from "react-native-web";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="Username" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"LoginPage"}}>Login</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>Esqueceu a senha?</Link>
            </View>
        </View>
    )

}   