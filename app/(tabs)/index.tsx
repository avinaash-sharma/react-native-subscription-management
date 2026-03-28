import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
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
        </View>
    );
}