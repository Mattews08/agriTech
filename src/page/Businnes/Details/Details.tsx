import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export function Details({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="arrow-back-ios" type="Ionicons" size={18} color="#018241" onPress={() => navigation.navigate("Guide")} />
        <Text style={styles.user}>Plantação de hortaliças</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <Image
          source={require("../../../assets/iconsGuide/img.png")}
          style={styles.img}
        />
        <Text style={styles.text}>
          Aplicação do plano ABC+ na plantação de hortaliças
        </Text>
        <Text style={styles.description}>
          A horticultura pode sequestrar carbono da atmosfera por meio de
          sistemas conservacionistas como o plantio direto. Foi o que indicou um
          experimento realizado durante seis anos por uma equipe de agrônomos da
          Embrapa, no qual foram comparados diferentes sistemas de produção de
          hortaliças. O resultado comprovou que técnicas como o plantio direto
          são mais eficientes em promover o acúmulo de matéria orgânica no solo
          ao longo do tempo.
        </Text>
        <Text style={styles.description}>
          A pesquisa mostra que a adoção de sistemas conservacionistas na
          horticultura tem potencial de sequestrar carbono atmosférico,
          capacidade até então registrada somente em culturas de maior porte
          como grãos e cana-de-açúcar.
        </Text>
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
  img: {
    width: "100%",
    height: 324,
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.text,
    marginTop: 20,
  },
  description: {
    fontFamily: fonts.complement,
    fontSize: 16,
    color: colors.text,
    marginTop: 20,
  },
});
