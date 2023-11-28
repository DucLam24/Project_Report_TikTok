import { View, Text, Image } from "react-native";
import StylesSceenRegister from "./StylesSceenRegister";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";
import { useState } from "react";
import axios from "axios";

const ScreenRegister = ({ navigation }) => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    let formData = {
      username: account,
      password: password,
      email: email,
    };
    axios
      .post("http://localhost:4400/api/user", formData)
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
          <Text style={StylesSceenRegister.text02}>Email</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt3) => setEmail(txt3)}
          ></TextInput>
        </View>
      </View>

      <View style={StylesSceenRegister.container04}>
        <TouchableOpacity
          style={StylesSceenRegister.button1}
          onPress={async () => {
            onSubmit();
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={StylesSceenRegister.text03}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenRegister;
