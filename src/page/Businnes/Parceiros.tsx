import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Parceiros({ navigation }: any) {
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
        <Text style={styles.user}>Parceiros</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <View style={styles.containerImg}>
        <Image
          source={require("../../assets/iconsGuide/img2.png")}
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ padding: 10, gap: 10 }}>
          <Text style={styles.text}>Fazenda Sol Nascente</Text>
          <Text style={styles.description}>Venda de ovos e gado </Text>
          <View style={{ flexDirection: "row", gap: 10, paddingRight: 10 }}>
            <Icon
              name="location-pin"
              type="octicons"
              size={18}
              color="#018241"
            />
            <Text style={styles.location}>
              Ramal PA Canoas, km11 Comunicadade - AM
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerImg}>
        <Image
          source={require("../../assets/iconsGuide/img3.png")}
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ padding: 10, gap: 10 }}>
          <Text style={styles.text}>Fazenda Piana</Text>
          <Text style={styles.description}>Venda de banana</Text>
          <View style={{ flexDirection: "row", gap: 10, paddingRight: 10 }}>
            <Icon
              name="location-pin"
              type="octicons"
              size={18}
              color="#018241"
            />
            <Text style={styles.location}>
              Ramal PA Canoas, km11 Comunicadade - AM
            </Text>
          </View>
        </View>
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
  containerImg: {
    width: "100%",
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 18,
    marginTop: 20,
  },
  description: {
    fontFamily: fonts.text,
    fontSize: 16,
    color: colors.text,
  },
  location: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: colors.text,
  },
});
