import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
const ScreenNotification = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6562deebee04015769a69d00.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      });
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.container1}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("../../img/goback1.png")} style={styles.img1} />
      </TouchableOpacity>
      <View style={styles.container2}>
        <Text style={styles.text1}>Thông báo</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item})=>{
            return(
              <View style={styles.container3}>
                <View style={styles.container31}>
                  <Image source={item.img} style={styles.img2}></Image>
                  <Text style={styles.text2}>{item.userName}</Text>
                  <Text style={styles.text21}>{"\n"}Đã thích video của bạn</Text>
                  <Image
                    source={require("../../img/imgvideo.png")}
                    style={styles.img3}
                  />
                </View>
                <View style={styles.container31}>
                  <Image source={item.img} style={styles.img2}></Image>
                  <Text style={styles.text2}>{item.userName}</Text>
                  <Text style={styles.text21}>{"\n"}Đã bình luận video của bạn</Text>
                  <Image
                    source={require("../../img/imgvideo.png")}
                    style={styles.img3}
                  />
                </View>
              </View>
              )
            }}
      />  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    
  },
  container31: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
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
    paddingTop:10,
  },
});

export default ScreenNotification;
