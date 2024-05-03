import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import image from '../assets/background.png';
import lights from '../assets/light.png';
import {FadeIn, FadeOut, Animated} from 'react-native-reanimated';


export default function HomeScreen() {
  
  return (
  <View className="bg-white h-full w-full">
    <StatusBar style="light"/>
    <Image className="h-full w-full absolute " source={image}/>
    
    <View className= "flex-row justify-around w-full absolute">
      <Image className="h-[225] w-[90]" source={lights}/>
      <Image className="h-[160] w-[65]" source={lights}/>
    </View>

    <View className="h-full w-full flex justify-around pt-40 pb-10">

      <View className="flex items-center">
        <Text className="text-white font-bold tracking-wider text-5xl">
          Login
        </Text>
      </View>

      <View className="flex items-center mx-4 space-y-4">
        <View className="bg-black/5 p-5 rounded-2xl w-full">
          <TextInput placeholder='studentnumber@isik.edu.tr' placeholderTextColor={'gray'}/>
        </View> 
        <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
          <TextInput placeholder='Enter your password' placeholderTextColor={'gray'} secureTextEntry/>
        </View> 
        <View className="w-full">
          <TouchableOpacity 
            className="w-full bg-slate-500 p-4  mb-3 rounded-2xl">
              <Text className="text-xl font-bold text-white text-enter">Login</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-slate-500">SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  </View>
  )
}
