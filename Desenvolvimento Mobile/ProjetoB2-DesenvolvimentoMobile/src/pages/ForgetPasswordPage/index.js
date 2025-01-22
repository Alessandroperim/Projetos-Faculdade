
import { TextInput, TouchableOpacity, Image, View, Text } from "react-native-web";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Recuperar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                <Link to={{screen:"LoginPage"}}>Login</Link>
            </View>
        </View>
    )

}   