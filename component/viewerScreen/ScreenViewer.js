import { View, Text, Image } from "react-native";
import Styles from "./StylesViewer";
import { SafeAreaView, TextInput, TouchableOpacity} from "react-native-web";

const ScreenViewer = () => {
    return(
        <SafeAreaView style={Styles.container}>
            <TouchableOpacity style={Styles.container1}>
            <View style={Styles.container2}>
                <Image source={require("../img/goback1.png")} style={Styles.img}></Image>
                <Text style={Styles.txt1}> Tạp Hóa Nụ Cười </Text>
            </View>
            </TouchableOpacity>
            <View style={Styles.container3}>
                <Image style={Styles.img2} source={require("../img/taphoa.jpeg")}></Image>
                <Text style={Styles.txt2}>@taphoanucoi</Text>
            </View>
            <View style={Styles.container4}>
                <View style={Styles.container41}>
                    <Text style={Styles.txt3}> 281</Text>
                    <Text style={Styles.txt4}> Đang Follow</Text>
                </View>
                <View style={Styles.container41}>
                    <Text style={Styles.txt3}> 28.3K</Text>
                    <Text style={Styles.txt4}> Follower </Text>
                </View>
                <View style={Styles.container41}>
                    <Text style={Styles.txt3}> 500.3K</Text>
                    <Text style={Styles.txt4}> Thích </Text>
                </View>
            </View>
            <View style={Styles.container5}>
                <Text style={Styles.txt5}> Tài Khoản đang ở chế độ riêng tư </Text>
                <Image style={Styles.img3} source={require("../img/lock1.png")}></Image>
             </View>
             <View style={Styles.container6}>
                <View style={Styles.container61}>
                    <Image style={Styles.img4} source={require("../img/home.png")}></Image>
                    <Text style={Styles.txt6}> Home</Text>
                </View>
                <View style={Styles.container61}>
                    <Image style={Styles.img4} source={require("../img/tb.png")}></Image>
                    <Text style={Styles.txt6}> Thông báo</Text>
                </View>
                <View style={Styles.container61}>
                    <Image style={Styles.img5} source={require("../img/new.png")}></Image>
                </View>
                <View style={Styles.container61}>
                    <Image style={Styles.img4} source={require("../img/mes.png")}></Image>
                    <Text style={Styles.txt6}> Tin Nhắn</Text>
                </View>
                <View style={Styles.container61}>
                    <Image style={Styles.img4} source={require("../img/user1.png")}></Image>
                    <Text style={Styles.txt6}> Hồ Sơ</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ScreenViewer;