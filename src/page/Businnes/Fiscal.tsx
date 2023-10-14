import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Fiscal({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          name="arrow-back-ios"
          type="Ionicons"
          size={18}
          color="#018241"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.user}>Fiscalização</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <Text style={styles.text}> Janeiro/ 2023</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate("DetailsFiscal")}
              >
                <Text style={styles.loginButtonText}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <Text style={styles.text}> Fevereiro/ 2023</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate("DetailsFiscal")}
              >
                <Text style={styles.loginButtonText}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <Text style={styles.text}>Março/ 2023</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate("DetailsFiscal")}
              >
                <Text style={styles.loginButtonText}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  containerGuide: {
    width: "100%",
    borderRadius: 10,
    elevation: 5,
    backgroundColor: colors.white,
    padding: 20,
  },
  text: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 18,
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
    fontWeight: "bold",
  },
});
