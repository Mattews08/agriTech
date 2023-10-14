import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Guide({ navigation }: any) {
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
        <Text style={styles.user}>Meu Guia</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 10, marginTop: 40 }}>
          <View style={styles.containerGuide}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Plantação de hortaliças</Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Details")}
              >
                <Text style={styles.btnAccess}>Acessar</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#374957"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/iconsGuide/2.png")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Gado</Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Guide")}
              >
                <Text style={styles.btnAccess}>Acessar</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#374957"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/iconsGuide/1.png")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Plantação de banana</Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Guide")}
              >
                <Text style={styles.btnAccess}>Acessar</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#374957"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/iconsGuide/3.png")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Plantação de soja </Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Guide")}
              >
                <Text style={styles.btnAccess}>Acessar</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#374957"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/iconsGuide/4.png")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={{ padding: 10, marginTop: 10 }}>
          <View style={styles.containerGuide}>
            <View style={styles.viewText}>
              <Text style={styles.text}>Plantação de Manga</Text>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate("Guide")}
              >
                <Text style={styles.btnAccess}>Acessar</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#374957"
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/iconsGuide/5.png")}
              style={styles.img}
            />
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
    paddingHorizontal: 10,
    marginTop: 60,
    backgroundColor: colors.shape,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 18,
  },
  viewText: {
    padding: 20,
    flexDirection: "column",
    width: "50%",
    gap: 30,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  btnAccess: {
    fontFamily: fonts.heading,
    fontSize: 14,
    color: colors.text,
  },
  img: {
    width: 150,
    height: 147,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 10,
  },
});
