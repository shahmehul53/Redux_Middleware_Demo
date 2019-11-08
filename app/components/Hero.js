import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import BVLinearGradient from 'react-native-linear-gradient';

const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={{height: 250}}
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4',
        }}>
        <BVLinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Text style={styles.textStyle}>
            Booba on fire in his New Gotham Clip
          </Text>
        </BVLinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Hero;
