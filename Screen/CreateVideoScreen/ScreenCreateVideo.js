import { View, Text, Image, StyleSheet } from "react-native";
// import StylesSceenRegister from "./StylesSceenRegister";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native-web";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ScreenCreateVideo = ({ navigation }) => {
  const [caption, setCaption] = useState("");
  const [uri, setUri] = useState("");
  const [musicName, setMusicName] = useState("");
  const [avatarUri, setAvatarUri] = useState("");
  const onSubmit = async () => {
    let formData = {
      id: uuidv4(),
      channelName: "Đức Lâm channel",
      uri: uri,
      caption: caption,
      musicName: musicName,
      likes: 0,
      comments: 0,
      avatarUri: avatarUri,
    };
    try {
      let result = await axios.post(
        "http://localhost:4400/api/video",
        formData
      );
      console.log(result.response.data);
    } catch (error) {
      console.error(error.response.data);
    }
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
      <View style={StylesSceenRegister.container02}>
        <Text style={StylesSceenRegister.text01}>Tạo video Tiktok</Text>
      </View>

      <View style={StylesSceenRegister.container03}>
        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Uri video</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt2) => setUri(txt2)}
          ></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>caption</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt1) => setCaption(txt1)}
          ></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>Tên nhạc</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt3) => setMusicName(txt3)}
          ></TextInput>
        </View>

        <View style={StylesSceenRegister.container3_1}>
          <Text style={StylesSceenRegister.text02}>avatarUri</Text>
          <TextInput
            style={StylesSceenRegister.btn01}
            onChangeText={(txt) => setAvatarUri(txt)}
          ></TextInput>
        </View>
      </View>

      <View style={StylesSceenRegister.container04}>
        <TouchableOpacity
          style={StylesSceenRegister.button1}
          onPress={() => {
            navigation.navigate("SuccessScreen");
            onSubmit();
          }}
        >
          <Text style={StylesSceenRegister.text03}>Tạo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const StylesSceenRegister = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
    flex: 1,
  },
  container01: {
    justifyContent: "center",
    marginTop: 10,
  },
  container02: {
    width: 450,
    justifyContent: "center",
  },
  container03: {},
  container04: {},
  image: {
    width: 180,
    height: 180,
    marginLeft: 75,
    resizeMode: "contain",
  },
  text01: {
    fontFamily: "Roboto",
    color: "#FFF",
    fontSize: 35,
    fontWeight: 800,
    marginLeft: 80,
    marginTop: 10,
    alignItems: "center",
  },
  text02: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 400,
    color: "#FFF",
    margin: 10,
  },
  btn01: {
    height: 40,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingLeft: 15,
  },
  container3_1: {
    marginTop: 20,
    marginLeft: 50,
  },
  text03: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: 700,
  },
  button1: {
    backgroundColor: "#66FF99",
    marginTop: 40,
    marginLeft: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 70,
    borderRadius: 30,
  },
  container05: {
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 50,
  },
  text04: {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  text05: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#FFF",
  },
  img1: {
    height: 24,
    width: 24,
    tintColor: "#FFF",
  },
});
export default ScreenCreateVideo;
