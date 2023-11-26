import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenNav from "../Screen/homeScreen/HomeScreenNav";
import ScreenLogin from "../Screen/loginScreen/loginScreen";
import ScreenRegister from "../Screen/RegisterScreen/ScreenRegister";
import ScreenStarted from "../Screen/StartedScreen/ScreenStarted";
import ScreenViewer from "../Screen/viewerScreen/ScreenViewer";
import ScreenLogout from "../Screen/LogoutScreen/ScreenLogout";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
