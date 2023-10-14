import { View, Text, StyleSheet, ScrollView } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Icon } from "react-native-elements";

export function Calendar({ navigation }: any) {
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
        <Text style={styles.user}>Agendamento</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView>
        <View style={styles.contentAgenda}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Icon name="calendar" type="feather" color={colors.green} />
            <View
              style={{
                padding: 7,
                backgroundColor: colors.green,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: colors.white, fontFamily: fonts.complement }}
              >
                AGENDADO
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
            Mentoria Individual
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Horário:
            </Text>
            <Text
              style={{ fontFamily: fonts.text, marginTop: 10, marginLeft: 10 }}
            >
              25/06/2023 às 14:30
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Endereço:
            </Text>
            <Text
              style={{
                fontFamily: fonts.text,
                marginTop: 10,
                marginLeft: 10,
                width: "70%",
              }}
            >
              Rua Silva, n. 154 - Cacau / Manacapuru - AM
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Mentor:
            </Text>
            <Text
              style={{ fontFamily: fonts.text, marginTop: 10, marginLeft: 10 }}
            >
              João Figueiredo
            </Text>
          </View>
        </View>
        <View style={styles.contentAgenda}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Icon name="calendar" type="feather" color={colors.green} />
            <View
              style={{
                padding: 7,
                backgroundColor: colors.green,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: colors.white, fontFamily: fonts.complement }}
              >
                AGENDADO
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
            Mentoria Coletiva
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Horário:
            </Text>
            <Text
              style={{ fontFamily: fonts.text, marginTop: 10, marginLeft: 10 }}
            >
              25/06/2023 às 14:30
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Endereço:
            </Text>
            <Text
              style={{
                fontFamily: fonts.text,
                marginTop: 10,
                marginLeft: 10,
                width: "70%",
              }}
            >
              Rua Silva, n. 154 - Cacau / Manacapuru - AM
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: fonts.heading, marginTop: 10 }}>
              Mentor:
            </Text>
            <Text
              style={{ fontFamily: fonts.text, marginTop: 10, marginLeft: 10 }}
            >
              João Figueiredo
            </Text>
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
  contentAgenda: {
    elevation: 5,
    width: "100%",
    height: 200,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 40,
  },
});
