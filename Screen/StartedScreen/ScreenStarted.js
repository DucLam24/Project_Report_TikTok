import { View, Image, Text, SafeAreaView } from "react-native";
import Styles from "./StylesStarted";
import { TouchableOpacity } from "react-native-web";

const ScreenStarted = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container1}>
        <Image style={Styles.image} source={require("/img/tiktok_logo.png")} />
      </View>

      <View style={Styles.container2}>
        <Text style={Styles.text01}>
          Chào mừng bạn đến với {"\n\t   "} TIKTOK
        </Text>
      </View>

      <View style={Styles.container3}>
        <TouchableOpacity style={Styles.container3_1}>
          <Text style={Styles.text02}>Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenStarted;
