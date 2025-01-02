// AboutPage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giới thiệu</Text>
      <Text style={styles.description}>
        Đây là ứng dụng giúp bạn mua sắm các sản phẩm nông sản chất lượng cao.
        Chúng tôi cam kết mang đến những trải nghiệm mua sắm tốt nhất cho bạn.
      </Text>
      <Text style={styles.footer}>Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default AboutPage;
