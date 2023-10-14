import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function User({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          onPress={() => navigation.navigate("Home")}
          name="arrow-back-ios"
          type="Ionicons"
          size={18}
          color="#018241"
        />
        <Text style={styles.user}>Meu perfil</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/iconsGuide/user.png")}
          style={{
            width: 120,
            height: 120,
            marginTop: 40,
            borderRadius: 100,
          }}
        />
        <Text style={styles.title}>Manoel Ferreira da Silva</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.icon}>
          <Icon name="language-sharp" type="ionicon" size={18} color={colors.text} />
        </View>
        <Text style={styles.textDescription}>Linguagem</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.icon}>
          <Icon name="help-circle-outline" type="ionicon" size={18} color={colors.text} />
        </View>
        <Text style={styles.textDescription}>Ajuda</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.icon}>
          <Icon name="paste" type="octicon" size={18} color={colors.text} />
        </View>
        <Text style={styles.textDescription}>Dados da fazenda</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.icon}>
          <Icon name="settings-outline" type="ionicon" size={18} color={colors.text} />
        </View>
        <Text style={styles.textDescription}>Configurações gerais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 60,
    backgroundColor: colors.shape,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  user: {
    color: colors.green,
    fontFamily: fonts.heading,
    fontSize: 18,
  },
  title: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 20,
    marginTop: 20,
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
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: fonts.heading,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    fontFamily: fonts.heading,
    fontSize: 18,
  },
});
