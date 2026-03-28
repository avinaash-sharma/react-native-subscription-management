import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in">Go to Sign In</Link>
    </View>
  )
}

export default SignIn