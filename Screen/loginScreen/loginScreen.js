import { View, Text, Image } from "react-native";
import Style from "./Styles";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";

const ScreenLogin = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.container01}>
        <Image style={Style.image} source={require("/img/tiktok_logo.png")} />
      </View>

      <View style={Style.container02}>
        <Text style={Style.text01}>Đăng Nhập</Text>
      </View>

      <View style={Style.container03}>
        <View style={Style.container3_1}>
          <Text style={Style.text02}>Tên đăng nhâp</Text>
          <TextInput style={Style.btn01}></TextInput>
        </View>

        <View style={Style.container3_1}>
          <Text style={Style.text02}>Mật khẩu</Text>
          <TextInput style={Style.btn01}></TextInput>
        </View>
      </View>

      <View style={Style.container04}>
        <TouchableOpacity style={Style.button1}>
          <Text style={Style.text03}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={Style.container05}>
          <Text style={Style.text04}>Bạn chưa có tài khoản?</Text>
          <Text style={Style.text05}> Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenLogin;
