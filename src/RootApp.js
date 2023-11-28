import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenNav from "../Screen/homeScreen/HomeScreenNav";
import ScreenLogin from "../Screen/loginScreen/loginScreen";
import ScreenRegister from "../Screen/RegisterScreen/ScreenRegister";
import ScreenStarted from "../Screen/StartedScreen/ScreenStarted";
import ScreenViewer from "../Screen/viewerScreen/ScreenViewer";
import ScreenLogout from "../Screen/LogoutScreen/ScreenLogout";
import ScreenSetting from "../Screen/settingScreen/ScreenSetting";
import ScreenSlacking from "../Screen/slackingScreen/ScreenSlacking";
import ScreenCreateVideo from "../Screen/CreateVideoScreen/ScreenCreateVideo";
import ScreenNotification from "../Screen/NotificationScreen/ScreenNotification";
import ScreenMessage from "../Screen/messageScreen/ScreenMessage";
import ScreenMessage1 from "../Screen/message1Screen/ScreenMessage1";
import ScreenViewer1 from "../Screen/viewer1Screen/ScreenViewer1";
const Stack = createNativeStackNavigator();

export default function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartedScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={ScreenLogin} />
        <Stack.Screen name="RegisterScreen" component={ScreenRegister} />
        <Stack.Screen name="StartedScreen" component={ScreenStarted} />
        <Stack.Screen name="HomeScreenNav" component={HomeScreenNav} />
        <Stack.Screen name="ViewerScreen" component={ScreenViewer} />
        <Stack.Screen name="LogoutScreen" component={ScreenLogout} />
        <Stack.Screen name="SettingScreen" component={ScreenSetting} />
        <Stack.Screen name="SlackingScreen" component={ScreenSlacking} />
        <Stack.Screen name="ScreenCreateVideo" component={ScreenCreateVideo} />
        <Stack.Screen name="ScreenMessage" component={ScreenMessage} />
        <Stack.Screen
          name="ScreenNotification"
          component={ScreenNotification}
        />
        <Stack.Screen name="ScreenMessage1" component={ScreenMessage1} />
        <Stack.Screen name="ViewerScreen1" component={ScreenViewer1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
