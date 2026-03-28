import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>

            <Link href="/Onboarding" className="mt-4 rounded bg-primary text-white p-4">OnBoarding</Link>
            <Link href="/sign-in" className="mt-4 rounded bg-primary text-white p-4">Sign In</Link>
            <Link href="/sign-up" className="mt-4 rounded bg-primary text-white p-4">Sign Up</Link>
            <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">Spotify Subscriptions</Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: { id: "Claude" },
            }} className="mt-4 rounded bg-primary text-white p-4">Cloude Subscription</Link>
        </SafeAreaView>
    );
}