import { View, Text, Image } from "react-native";
import StylesSceenRegister from "./StylesSceenRegister";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";
import { useState } from "react";
import axios from "axios";

const ScreenRegister = ({ navigation }) => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmit = () => {
    let formData = {
      account: account,
      password: password,
      userName: userName,
    };
    axios
      .post("https://6562deebee04015769a69d00.mockapi.io/user", formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={StylesSceenRegister.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../img/goback1.png")}
          style={StylesSceenRegister.img1}
        />
      </TouchableOpacity>
      <View style={StylesSceenRegister.container01}>
        <Image
          style={StylesSceenRegister.image}
          source={require("/img/tiktok_logo.png")}
        />
      </View>

      <View style={StylesSceenRegister.container02}>
        <Text style={StylesSceenRegister.text01}>Đăng Ký</Text>
      </View>

      <View style={StylesSceenRegister.container03}>
        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Tên đăng nhâp</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt) => setAccount(txt)}
          ></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Mật khẩu</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt1) => setPassword(txt1)}
            value={password}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Tên người dùng</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt2) => setUserName(txt2)}
          ></TextInput>
        </View>
      </View>

      <View style={StylesSceenRegister.container04}>
        <TouchableOpacity
          style={StylesSceenRegister.button1}
          onPress={() => {
            onSubmit();
            navigation.navigate("HomeScreenNav");
          }}
        >
          <Text style={StylesSceenRegister.text03}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenRegister;
