import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Metas({ navigation }: any) {
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
        <Text style={styles.user}>Minhas metas</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <Image
        source={require("../../assets/metasimg.png")}
        style={{ width: "auto", height: 560, marginTop: 40, borderRadius: 10 }}
      />
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
});
