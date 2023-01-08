import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function ModalResult({ close, bestComb }){
    return (
        <View style={styles.container}>
            <Image
                source={require("../../src/gas.png")}
                style={styles.img}      
            />
            <Text style={styles.resultTitle}>
                {bestComb.res < 0.7 ? "it's better to put Alcohol" : "it is better to put Gasoline"}
            </Text>
            <Text style={styles.title}>Prices:</Text>
            <Text style={styles.subTitle}>Alcohol: R$ {bestComb.alc}</Text>
            <Text style={styles.subTitle}>Gasoline: R$ {bestComb.gas}</Text>
            
            <TouchableOpacity style={styles.btn} onPress={close}>
                <Text style={styles.btnText}>Calculate again</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b4dec1",
    },
    title:{
        fontSize: 25,
        color: "#5c5863",
        marginTop: 18,
        fontWeight: "700",
        textAlign: "center",
    },
    subTitle:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginTop: 10,
    },
    resultTitle:{
        fontSize: 28,
        color: "#9c325c",
        marginTop: 20,
        fontWeight: "700",
        textAlign: "center",
    },
    btn:{
      height: "auto",
      minWidth: "80%",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 5,
      backgroundColor: "#f4f4f4",
      marginTop: 25,
      borderColor: "#5c5863",
      borderWidth: 3,
    },
    btnText:{
      fontSize: 22,
      fontWeight: "bold",
      color: "#5c5863",
    }
})

export default ModalResult;