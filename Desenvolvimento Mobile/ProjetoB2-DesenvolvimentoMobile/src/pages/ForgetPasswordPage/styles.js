import { ImageBackground, StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        height: '150px',
        width: '150px',
        marginBottom: 15
    },
    input: {
        border: '1px solid black',
        width: '70%',
        heigth: 40,
        padding: 5,
        marginBottom: 10,
        
    },
    btnLogin:{
        border: '2px solid black',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'gray'
    },
    viewLinks: {
        marginTop: 10,
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    }

})

export default styles;