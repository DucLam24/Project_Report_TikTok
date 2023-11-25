import { View, Text, Image } from "react-native";
import Styles from "./StylesLogout";
import { SafeAreaView, TextInput, TouchableOpacity} from "react-native-web";

const ScreenLogout = () => {
    return(
        <SafeAreaView style={Styles.container}>
            <TouchableOpacity style={Styles.container1} >
            <View style={Styles.container2}>
                <Text style={Styles.txt1}> Tạp Hóa Nụ Cười </Text>
                <Image source={require("../img/taphoa.jpeg")} style={Styles.img}></Image>
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
                <TouchableOpacity style={Styles.container51}>
                    <View style={Styles.container52}>
                        <Text style={Styles.txt5}>Đăng Xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default ScreenLogout;