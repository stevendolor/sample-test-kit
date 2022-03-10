import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#273746',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{
        height: Dimensions.get('screen').height * 0.5,
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
      }}>
        <View
          style={{
            flex: 1,
            marginBottom: 10,
            borderRadius: 10,
            overflow: 'hidden'
          }}
        >
          <LottieView
            style={{
              flex: 1,
            }}
            source={
              require('../assets/lottie/44376-3d-gamepad-animation.json')
            }
            autoPlay={true}
            loop={true}
          />

        </View>
        <View
          style={{
            flex: 0,
            backgroundColor: '#E9DBD8',
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: '#877D7B',
              fontFamily: 'poppins-bold',
              fontSize: 18,
            }}
            numberOfLines={1}
          >
            My NFT Card
          </Text>
        </View>
        <View
          style={{
            flex: 0,
            minHeight: 100,
            maxHeight: 200,
            backgroundColor: 'white',
            padding: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'poppins-regular',
              color: '#877D7B',
              fontSize: 14
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Text>
        </View>
      </View>
    </View>
  );
}