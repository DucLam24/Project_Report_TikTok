import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ScreenSetting = ({ navigation }) => {
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
        <Text style={Styles.text1}>Cài đặt và quyền riêng tư</Text>
      </View>

      <View style={Styles.container3}>
        <View style={Styles.container31}>
          <Image source={require("../../img/user.png")} style={Styles.img2} />
          <Text style={Styles.text2}>Tài khoản</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-lock-30.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Quyền riêng tư</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-shield-24.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Bảo mật</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-shopping-cart-24.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Đơn hàng của bạn</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-wallet-30.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Số dư</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-share-50.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Chia sẻ hồ sơ</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-camera-24.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Live</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-clock-30.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Trung tâm hoạt động</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-live-64.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Tùy chọn nội dung</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-megaphone-50.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Quảng cáo</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.container31}>
          <Image
            source={require("../../img/icons8-youtube-50.png")}
            style={Styles.img2}
          />
          <Text style={Styles.text2}>Phát lại</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SlackingScreen");
            }}
          >
            <Image
              source={require("../../img/icons8-back-30.png")}
              style={Styles.img3}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={Styles.container41}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogoutScreen");
            }}
          >
            <Text style={Styles.text3}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  container1: {},
  container2: {
    width: 360,
    height: 49,
    marginTop: 20,
  },
  container3: {
    marginTop: 40,
  },
  container31: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
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
    tintColor: "#FFF",
  },
  img2: {
    height: 24,
    width: 24,
    tintColor: "#FFF",
    marginLeft: 10,
  },
  img3: {
    height: 24,
    width: 24,
    tintColor: "#FFF",
    marginRight: 10,
  },
  text1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
  },
  text2: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 60,
    position: "absolute",
  },
  text3: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: 700,
  },
});

export default ScreenSetting;
