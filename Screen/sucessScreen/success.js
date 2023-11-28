import { Pressable, Text, View } from "react-native";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 200 }}>
      <Text style={{ fontSize: 25, fontWeight: 700, color: "#33FF33" }}>
        Bạn đã tạo video thành công !!!
      </Text>
      <Pressable
        style={{
          width: 150,
          height: 30,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 15,
        }}
        onPress={() => {
          navigation.navigate("HomeScreenNav");
        }}
      >
        <Text>Quay lại</Text>
      </Pressable>
    </View>
  );
};

export default SuccessScreen;
