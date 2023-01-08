import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView, Modal } from "react-native";

import ModalResult from "./src/result/ModalResult";

function App(){

  const [modalVisible, setModalVisible] = useState(false);
  const [valueAlcohol, setValueAlcohol] = useState("");
  const [valueGasoline, setValueGasoline] = useState("");
  const [bestOption, setBestOption] = useState({});
  const inputRef = useRef(null);

  function openModal(){
    if(valueAlcohol == "" || valueGasoline == ""){
      alert("Enter the price of Alcohol or Gasoline.");
      return;
    } else {      
      setModalVisible(true);
      setBestOption(calCombustivel(valueAlcohol, valueGasoline));
    }
  }

  function closeModal(){
    setModalVisible(false);
    setValueAlcohol("");
    setValueGasoline("");
    inputRef.current.focus();
  }

  function calCombustivel(alcohol, gasoline){
    let result = alcohol / gasoline;
    return {
      alc: alcohol,
      gas: gasoline,
      res: result
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: "center"}}>
        <Text style={styles.title}>What's the best option?</Text>
        <Image
          source={require("./src/logo.png")}
          style={styles.img}      
        />
      </View>
      <View>
        <Text style={styles.subTitle}>Alcohol (price per liter):</Text>
        <TextInput
          style={styles.input}
          placeholder="4.60"
          placeholderTextColor="#cccccc"
          keyboardType="numeric"
          value={valueAlcohol}
          onChangeText={(valAlc) => setValueAlcohol(valAlc)}
          ref={inputRef}
        />
        <Text style={styles.subTitle}>Gasoline (price per liter):</Text>
        <TextInput
          style={styles.input}
          placeholder="7.30"
          placeholderTextColor="#cccccc"
          keyboardType="numeric"
          value={valueGasoline}
          onChangeText={(valGas) => setValueGasoline(valGas)}
        />
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={ openModal }>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <ModalResult close={ closeModal } bestComb={bestOption}/>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b4dec1",
  },
  img:{
    width: 196,
    height: 196,
  },
  title:{
    fontSize: 28,
    color: "#5c5863",
    marginBottom: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  subTitle:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 25,
  },
  input:{
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 5,
    minWidth: "90%",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  btnArea:{
    alignItems: "center",
    marginTop: 25,
  },
  btn:{
    height: "auto",
    minWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#ff1f4c",
  },
  btnText:{
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  }
})

export default App;