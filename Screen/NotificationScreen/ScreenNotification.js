import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ScreenNotification = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>
      <TouchableOpacity
        style={Styles.container1}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("../../img/goback1.png")} style={Styles.img1} />
      </TouchableOpacity>
      <View style={Styles.container2}>
        <Text style={Styles.text1}>Thông báo</Text>
      </View>

      <View style={Styles.container3}>
        <View style={Styles.container31}>
          <Image
            source={require("../../img/chixuan.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Chí Xuân</Text>
          <Text style={Styles.text21}>{"\n"}Đã thích video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/chixuan.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Chí Xuân</Text>
          <Text style={Styles.text21}>{"\n"}Đã bình luận video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/quoctrung.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Quốc Trung</Text>
          <Text style={Styles.text21}>{"\n"}Đã thích video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/quoctrung.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Chí Xuân</Text>
          <Text style={Styles.text21}>{"\n"}Đã bình luận video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image source={require("../../img/duclam.png")} style={Styles.img2} />
          <Text style={Styles.text2}>Đức Lâm</Text>
          <Text style={Styles.text21}>{"\n"}Đã thích video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/quockhoi.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Quốc Khôi</Text>
          <Text style={Styles.text21}>{"\n"}Đã thích video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/quockhoi.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Quốc Khôi</Text>
          <Text style={Styles.text21}>{"\n"}Đã bình luận video của bạn</Text>
          <Image
            source={require("../../img/imgvideo.png")}
            style={Styles.img3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container1: {},
  container2: {
    width: 360,
    height: 49,
    marginTop: 20,
  },
  container3: {
    marginTop: 20,
  },
  container31: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  container41: {
    height: 50,
    width: 150,
    backgroundColor: "#CC0000",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 120,
    borderRadius: 20,
  },
  img1: {
    height: 24,
    width: 24,
    tintColor: "#0000",
  },
  img2: {
    height: 50,
    width: 50,
    marginLeft: 10,
    resizeMode: "contain",
    borderRadius: 50,
  },
  img3: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  text1: {
    color: "#000",
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
  },
  text2: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 80,
    position: "absolute",
  },
  text21: {
    color: "#948D8D",
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 82,
    position: "absolute",
  },
  text3: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: 700,
  },
});

export default ScreenNotification;
