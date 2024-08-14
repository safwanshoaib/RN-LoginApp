import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const submit = () => {
    Alert.alert(
      `Welcome, ${email}! Confirmation phone number has been sent to ${password}`
    );
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.input}>
        <Text style={styles.text1}>Sign Up</Text>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={styles.emailInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.emailInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput placeholder="Phone No." style={styles.emailInput} 
        value={phone}
        onChangeText={(text) => setPhone(text)}
        />
      </View>

      <View style={styles.space}>
        <Text>Already have an account </Text>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.text2}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => submit()}>
        <Text style={styles.buttonColor}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  text1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  emailInput: {
    borderWidth: 0.7,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    padding: 10,
  },
  input: {
    alignItems: "center",
    width: "100%",
  },
  space: {
    marginTop: 15,
    flexDirection: "row",
  },
  text2: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgb(19, 102, 159)",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
  },
  buttonColor: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignUp;
