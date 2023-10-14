import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Info({ navigation }: any) {
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
        <Text style={styles.user}>Informações</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua pesquisa"
            //   value={login}
            //   onChangeText={(text) => setLogin(text)}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("DetailsInfor")}>
          <Image
            source={require("../assets/iconsGuide/img4.png")}
            style={{
              width: "100%",
              height: 190,
              marginTop: 20,
              borderRadius: 10,
            }}
          />

          <Text style={styles.text}>O que é o plano ABC+</Text>
          <Text style={styles.description}>
            Entenda sua importância para a sustentabilidade
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/iconsGuide/infor1.png")}
            style={{ width: 80, height: 80, marginTop: 40, borderRadius: 10 }}
          />
          <Text style={styles.text}>
            Importância do plano ABC+ para o agronegócio
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/iconsGuide/infor2.png")}
            style={{ width: 80, height: 80, marginTop: 40, borderRadius: 10 }}
          />
          <Text style={styles.text}>Melhoria na qualidade do solo</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/iconsGuide/infor3.png")}
            style={{ width: 80, height: 80, marginTop: 40, borderRadius: 10 }}
          />
          <Text style={styles.text}>
            Redução sustentável da emissão dos gases de efeito estufa
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/iconsGuide/infor4.png")}
            style={{ width: 80, height: 80, marginTop: 40, borderRadius: 10 }}
          />
          <Text style={styles.text}>
            Como funciona a agricultura de baixo carbono?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/iconsGuide/infor5.png")}
            style={{ width: 80, height: 80, marginTop: 40, borderRadius: 10 }}
          />
          <Text style={styles.text}>Incorporação de novas fontes de renda</Text>
        </View>
      </ScrollView>
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
  text: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.text,
    marginTop: 18,
    width: "70%",
  },
  description: {
    fontFamily: fonts.complement,
    fontSize: 16,
    color: colors.text,
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  input: {
    flex: 1,
    height: 40,
    width: "100%",
  },
});
