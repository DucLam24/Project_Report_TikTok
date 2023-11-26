import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScreenSlacking = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../../img/goback1.png")}
            style={Styles.img1}
          />
        </TouchableOpacity>
      </View>
      <Image source={require("../../img/sos.png")} style={Styles.img} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 600,
    textAlign: "center",
    resizeMode: "contain",
  },
  img1: {
    height: 24,
    width: 24,
    tintColor: "#000",
  },
});
export default ScreenSlacking;
