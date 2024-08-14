import { useNavigation } from "expo-router";
import React, { useState,useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function Page() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef(null);

  const submit = () => {
    Alert.alert(
      `Welcome, ${email}! Confirmation phone number has been sent to ${password}`
    );
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.input}>
        <Text style={styles.text1}>Sign In</Text>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Email"
          style={styles.emailInput}
          value={email}
          returnKeyType="next"
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => emailInput.current.focus()}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.emailInput}
          value={password}
          onSubmitEditing={submit}
          returnKeyType="send"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.space}>
        <Text>Don't have an account </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.text2}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => submit()}>
        <Text style={styles.buttonColor}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

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
