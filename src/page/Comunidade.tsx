import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Globe({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Icon
            name="arrow-back-ios"
            type="Ionicons"
            size={18}
            color="#018241"
            onPress={() => navigation.navigate("Home")}
          />
          <Text style={styles.user}>Comunidade</Text>
          <Icon name="bell" type="fontisto" size={18} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/iconsGuide/elli.png")}
              style={{
                width: 120,
                height: 120,
                marginTop: 40,
                borderRadius: 100,
              }}
            />
            <Text style={styles.title}>Comunidade Agro</Text>
            <Text
              style={{
                fontFamily: fonts.complement,
                textAlign: "center",
                width: "80%",
                marginTop: 20,
              }}
            >
              Encontre aqui informações sobre eventos locais, veja ou faça
              anúncios de oportunidade de venda ou trocas
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fonts.heading,
              color: colors.green,
              marginTop: 50,
              fontSize: 18,
            }}
          >
            Próximos eventos
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              gap: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/iconsGuide/comuna1.png")}
              style={{
                width: 80,
                height: 160,
                marginTop: 40,
                borderRadius: 10,
              }}
            />
            <View>
              <Text style={styles.text}>
                1º Feira gastronônica de Manacapuru e região
              </Text>
              <Text
                style={{
                  fontFamily: fonts.complement,
                  color: colors.text,
                  width: "50%",
                  marginTop: 10,
                }}
              >
                Vem aí a 1º feira gastronômica de Manacapuru, estamos ansiosos
                para lhe receber!
              </Text>
              <View style={{ flexDirection: "row", gap: 10, paddingRight: 10 }}>
                <Text style={styles.location}>Participe</Text>
                <Icon
                  name="arrowright"
                  type="ant-design"
                  size={18}
                  color="#018241"
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 20,
              color: colors.green,
              fontFamily: fonts.heading,
            }}
          >
            Carregar mais
          </Text>
          <View>
            <Text
              style={{
                fontFamily: fonts.heading,
                color: colors.green,
                marginTop: 50,
                fontSize: 18,
              }}
            >
              Anuncios
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/iconsGuide/comuna1.png")}
                style={{
                  width: 80,
                  height: 160,
                  marginTop: 40,
                  borderRadius: 10,
                }}
              />
              <View>
                <Text style={styles.text}>
                  Milho disponível para negociação
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.complement,
                    color: colors.text,
                    width: "50%",
                    marginTop: 10,
                  }}
                >
                  Milho de alta qualidade disponível. Entre em contato: (92)
                  99288-2456
                </Text>
                <View
                  style={{ flexDirection: "row", gap: 10, paddingRight: 30, marginTop: 20 }}
                >
                  <Text style={styles.location}>Ver detalhes</Text>
                  <Icon
                    name="arrowright"
                    type="ant-design"
                    size={18}
                    color="#018241"
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                marginTop: 20,
                color: colors.green,
                fontFamily: fonts.heading,
              }}
            >
              Carregar mais
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
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
  title: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 20,
    marginTop: 20,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 20,
    color: colors.text,
    marginTop: 18,
    width: "60%",
  },
  location: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: colors.green,
  },
});
