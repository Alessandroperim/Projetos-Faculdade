import { Link } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return (
        <View style = {styles.container}>
            <Image style={styles.image} source = {{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style= {styles.title}>{filme.titulo}</Text>
            <Text style= {styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." :
             filme.sinopse}</Text>
             <Link to={{screen: "MovieDetailsPage", params: {filme: filme}}}>Saiba mais ...</Link>
            <TouchableOpacity style={styles.button}>
                <Text style = {styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'Bold',
        marginBottom: 10

    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify'

    },
    button: {
        height: 40,
        backgroundColor: 'orange',
        width: '100%',
        justifyContest: 'center',
        alignItems: 'center',
        marginTop: 20 

    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20

    }
})