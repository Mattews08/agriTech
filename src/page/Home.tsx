import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Icon } from "react-native-elements";

export function Home({ navigation }: any) {
  const openWhatsApp = () => {

    const whatsappUrl = "https://wa.me/5592993756210";

    Linking.openURL(whatsappUrl);
  };


  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={styles.user}>Olá, Manoel</Text>
            <Icon name="bell" type="fontisto" size={18} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Infor")}>
            <Image
              source={require("../assets/iconBanner1.png")}
              style={{ width: "100%", height: 148, marginTop: 40 }}
            />
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.user}>Meu negócio</Text>
          </View>
          <View style={styles.containerBox}>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.btnMenu}
                onPress={() => navigation.navigate("Guide")}
              >
                <Image
                  source={require("../assets/icons/1.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.btnText}>Meu guia</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMenu}
                onPress={() => navigation.navigate("Metas")}
              >
                <Image
                  source={require("../assets/icons/3.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.btnText}>Minhas metas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.btnMenu}
                onPress={() => navigation.navigate("Certifications")}
              >
                <Image
                  source={require("../assets/icons/2.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.btnText}>Certificações</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMenu}
                onPress={() => navigation.navigate("Fiscal")}
              >
                <Image
                  source={require("../assets/icons/3.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.btnText}>Fiscalização</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.btnMenu}
                onPress={() => navigation.navigate("Parceiros")}
              >
                <Image
                  source={require("../assets/icons/4.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.btnText}>Parceiros</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={openWhatsApp} style={styles.floatingBtn}>
          <Icon name="whatsapp" type="fontisto" color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/menu/home.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <Image
            source={require("../assets/menu/calendar.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Globe")}>
        <Image
            source={require("../assets/menu/globe.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
        <Image
            source={require("../assets/menu/user.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  banner: {
    height: 165,
    width: "100%",
    backgroundColor: colors.green,
    marginTop: 30,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  bannerText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 18,
  },
  viewText: {
    display: "flex",
    gap: 20,
    fontSize: 14,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  moreText: {
    fontFamily: fonts.text,
    color: colors.white,
  },
  containerBox: {},
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  floatingBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: colors.green,
    borderRadius: 50,
  },
  menu: {
    width: "100%",
    backgroundColor: "#E6F3EC",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnMenu: {
    width: 165,
    height: 145,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 30,
    right: 0,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: fonts.heading,
    marginTop: 10,
    fontSize: 15,
  },
});
