import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenViewer from "../viewerScreen/ScreenViewer";

import HomeScreen from "./HomeScreen";
import ScreenCreateVideo from "../CreateVideoScreen/ScreenCreateVideo";
import ScreenNotification from "../NotificationScreen/ScreenNotification";
import ScreenMessage from "../messageScreen/ScreenMessage";
const BottomTab = createBottomTabNavigator();

export default function HomeScreenNav({ navigation }) {
  return (
    // <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../img/home.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Discover"
        component={ScreenNotification}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../img/chuongtb.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      {/* <TouchableOpacity> */}
      <BottomTab.Screen
        name="NewVideo"
        component={ScreenCreateVideo}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../img/new-video.png")}
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      {/* </TouchableOpacity> */}
      <BottomTab.Screen
        name="Inbox"
        component={ScreenMessage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../img/message.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ScreenViewer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../img/user.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 25,
    height: 25,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});
