import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{
        height: '75%',
        width: '80%',
        backgroundColor: '#E7EEF1',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column'
      }}>

        <View style={{ flex: 2, borderRadius: 10, overflow: 'hidden' }}>
          <Image
            source={{ uri: 'https://manofmany.com/wp-content/uploads/2021/09/What-is-an-NFT-1.jpg' }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>

        <View style={{ flex: 0, borderRadius: 10, marginVertical: 10, padding: 10 }}>
          <Text style={{
            fontSize: 25,
            color: '#525454',
            fontFamily: 'poppins-semi-bold'
          }}>Title Here</Text>
        </View>

        <View style={{ flex: 0, padding: 10, borderRadius: 10 }}>
          <Text style={{
            fontSize: 18,
            color: '#999B9B',
            fontFamily: 'poppins-regular',
          }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s,
          </Text>
        </View>

      </View>
    </View>
  );
}
