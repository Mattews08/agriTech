import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export function DetailsFiscal({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          name="arrow-back-ios"
          type="Ionicons"
          size={18}
          color="#018241"
          onPress={() => navigation.navigate("Fiscal")}
        />
        <Text style={styles.user}>Fiscalização</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <Text style={styles.text}>Detalhes do mês de janeiro</Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={styles.icon}>
          <Icon name="check" type="feather" size={18} color="white" />
        </View>
        <Text style={styles.textDescription}>Documentação</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={styles.icon}>
          <Icon name="check" type="feather" size={18} color="white" />
        </View>
        <Text style={styles.textDescription}>Metas do plano ABC+</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={styles.icon}>
          <Icon name="check" type="feather" size={18} color="white" />
        </View>
        <Text style={styles.textDescription}>Planejamento personalizado</Text>
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
  text: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 20,
    marginTop: 40,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    fontFamily: fonts.complement,
    fontSize: 18,
  },
});
