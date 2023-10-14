import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import fonts from "../styles/fonts";
import React, { useState } from "react";
import colors from "../styles/colors";
import { CheckBox } from "react-native-elements";

export function Login({ navigation }: any) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/imgLogin.png")}
        style={{ width: 200, height: 200 , marginTop: 20}}
      />
      <Text style={styles.text}>Bem vindo!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Seu login"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={!isPasswordVisible}
          placeholder="Sua senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {/* <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={20}
          color="gray"
        /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkbox}>
        <CheckBox
          title="Lembre-me"
          checked={forgotPassword}
          onPress={() => setForgotPassword(!forgotPassword)}
          checkedColor={colors.green}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          containerStyle={styles.checkboxContainer}
        />
      </View>
      <Text
       style={styles.textRecovery}>
        Esqueceu sua senha?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontFamily: fonts.heading,
    fontWeight: "bold",
  },
  inputContainer: {
    borderColor: "gray",
    width: "100%",
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    width: "100%",
  },
  iconContainer: {
    padding: 10,
  },
  btnContainer: {
    width: "100%",
  },
  loginButton: {
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginTop: 20
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkbox: {
    marginHorizontal: 0,
    justifyContent: "flex-start",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
  },
  checkboxContainer: {
    backgroundColor: "white",
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    color: colors.black,
  },
  textRecovery: {
    color: colors.green,
    fontFamily: fonts.heading,
    
  }
});
