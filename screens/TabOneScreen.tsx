import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1972e6',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
    >
      <View style={{
        flex: 1,
      }}>
    
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
          <Text>
            Email
          </Text>
          <View style={{
            height: 50,
            width: '100%',
            marginBottom: 20,
            borderWidth: 1,
            borderRadius: 10
          }}>

          </View>
        </View>

        <View style={{
          flex: 0,
          marginBottom: 40
        }}>
          <Text>
            Password
          </Text>
          <View style={{
            height: 50,
            width: '100%',
            borderWidth: 1,
            borderRadius: 10
          }}>

          </View>
        </View>
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <View style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#2381EE'
            }}>
              <Text style={{
                fontSize: 18,
                color: '#fff'
              }}>
              LOGIN
              </Text>
            </View>
          </View>
        </View>

      </View>
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 20
      }}>
        <Text style={{
          fontSize: 18
        }}>
          Sign up
        </Text>
      </View>
    </View>
  );
}