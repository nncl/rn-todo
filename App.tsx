import {Home} from "./src/pages/Home";
import {StatusBar} from "expo-status-bar";
import {useFonts, Inter_400Regular, Inter_700Bold} from "@expo-google-fonts/inter";

export default function App() {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (<>
        <StatusBar style="auto"/>
        <Home/>
    </>)
}