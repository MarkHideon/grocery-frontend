// About.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề trang */}
      <Text style={styles.title}>About Us</Text>

      {/* Thông tin giới thiệu */}
      <Text style={styles.subtitle}>Welcome to Our App!</Text>
      <Text style={styles.text}>
        We are passionate about providing the best service to our users.
        This app helps you to find and order high-quality fruits & vegetables with ease.
      </Text>
      
      {/* Hình ảnh (tuỳ chọn) */}
      <Image 
        source={{ uri: 'https://example.com/about-image.jpg' }} 
        style={styles.image} 
      />
      
      {/* Thông tin thêm */}
      <Text style={styles.text}>
        Our mission is to bring fresh, organic produce right to your doorstep.
        Thanks for using our app, and we hope you enjoy the experience.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    borderRadius: 10,
  },
});

export default About;
