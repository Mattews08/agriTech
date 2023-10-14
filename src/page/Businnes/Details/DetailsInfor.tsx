import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export function DetailsInfor({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon
          name="arrow-back-ios"
          type="Ionicons"
          size={18}
          color="#018241"
          onPress={() => navigation.navigate("Infor")}
        />
        <Text style={styles.user}>Artigos</Text>
        <Icon name="bell" type="fontisto" size={18} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <Image
          source={require("../../../assets/iconsGuide/img4.png")}
          style={styles.img}
        />
        <Text style={styles.text}>O que é o plano ABC+</Text>
        <Text style={styles.description}>
          O Plano ABC foi oficialmente denominado Plano Setorial para Mitigação
          e Adaptação às Mudanças Climáticas para Consolidação de Economia de
          Baixa Emissão de Carbono na Agricultura. Ufa! Achou grande? Pois saiba
          que os objetivos para essa iniciativa são ainda maiores.
        </Text>
        <Text style={styles.description}>
          O Plano ABC foi elaborado como meio de estabelecer uma política
          pública que ajudasse os setores agropecuários a incorporarem novas
          tecnologias, mais modernas e sustentáveis, para os sistemas de
          produção.
        </Text>
        <Text style={styles.description}>
          Por ser um dos setores que mais movimenta a economia mundial, o agro
          também pode provocar impacto nos ecossistemas onde está inserido. O
          empobrecimento do solo, a emissão de gases de efeito estufa, a
          poluição dos cursos d’água e outros problemas chamaram a atenção para
          a necessidade de uma iniciativa nessa área.
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
    height: 250,
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
