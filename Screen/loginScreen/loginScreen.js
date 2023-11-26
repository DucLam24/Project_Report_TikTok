import { View, Text, Image } from "react-native";
import Style from "./style.js";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";
// import { data } from "../../component/constants.js";
import { useEffect, useState } from "react";

const ScreenLogin = ({ navigation }) => {
  const [errorCheckLogin, setErrorCheckLogin] = useState("");
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [eyeClick, setEyeClick] = useState(true);

  useEffect(() => {
    fetch("https://6562deebee04015769a69d00.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const checkLogin = (accounts, password) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].account === accounts && data[i].password === password) {
        return true;
      }
    }
    return false;
  };
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.container01}>
        <Image
          style={Style.image}
          source={require("../../img/tiktok_logo.png")}
        />
      </View>

      <View style={Style.container02}>
        <Text style={Style.text01}>Đăng Nhập</Text>
      </View>

      <View style={Style.container03}>
        <Image style={Style.logoUser} source={require("../../img/user.png")} />
        <View style={Style.container3_1}>
          <TextInput
            style={Style.btn01}
            onChangeText={(txt) => setUserName(txt)}
            value={userName}
            placeholder="Name"
          ></TextInput>
        </View>
        <Image style={Style.logoLock} source={require("../../img/lock.png")} />
        <View style={Style.container3_1}>
          <TouchableOpacity
            onPress={() => {
              setEyeClick(!eyeClick);
            }}
          >
            <Image
              style={Style.logoEye}
              source={require("../../img/eye.png")}
            />
          </TouchableOpacity>
          <TextInput
            style={Style.btn01}
            secureTextEntry={eyeClick}
            onChangeText={(txt) => setPassWord(txt)}
            value={passWord}
            placeholder="PassWord"
          ></TextInput>
        </View>
      </View>

      <View style={Style.container04}>
        <TouchableOpacity
          style={Style.button1}
          onPress={() => {
            checkLogin(userName, passWord)
              ? navigation.navigate("HomeScreenNav")
              : setErrorCheckLogin("Login fail");
          }}
        >
          <Text style={Style.text03}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={{ color: "red", fontSize: 20 }}>{errorCheckLogin}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={Style.container05}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <Text style={Style.text04}>Bạn chưa có tài khoản?</Text>
          <Text style={Style.text05}> Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenLogin;
