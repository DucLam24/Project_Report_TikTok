import { View, Text, Image } from "react-native";
import StylesSceenRegister from "./StylesSceenRegister";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";

const ScreenRegister = () => {
  return (
    <SafeAreaView style={StylesSceenRegister.container}>
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
          <TextInput style={StylesSceenRegister.btn01}></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Mật khẩu</Text>
          <TextInput style={StylesSceenRegister.btn01}></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Nhập lại mật khẩu</Text>
          <TextInput style={StylesSceenRegister.btn01}></TextInput>
        </View>
      </View>

      <View style={StylesSceenRegister.container04}>
        <TouchableOpacity style={StylesSceenRegister.button1}>
          <Text style={StylesSceenRegister.text03}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenRegister;
