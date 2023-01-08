import React from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import { images } from "../config";
import { Checkbox, Button, Heading, Paragraph, Input } from "../components";


const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.logo} resizeMode="contain" style={styles.logo} />
      <Image source={images.bubbles} resizeMode="contain" style={styles.logo} />
      <View style={styles.card}>
        <Heading center>Login To Your Account.</Heading>
        <Paragraph center style={styles.paragraph}>Please Enter your login details</Paragraph>
        <Input style={styles.input} placeholder=" Email" keyboardType="email-address" />
        <Input style={styles.input} placeholder=" Password" secureTextEntry />
        <View style={styles.forgetContainer}>
          <Checkbox text="Remember Me" />
          <Paragraph>Forgot Password</Paragraph>
        </View>
        <Button type='filled'>Login</Button>
        <View style={styles.line} />
        <Paragraph center>Don't have an account?</Paragraph>
        <Button type='outlined' style={styles.btn}>Register</Button>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AC2CC',
    alignItems: 'center',
  },
  logo: { marginTop: 48 },
  paragraph: {
    marginTop: 5,
    marginBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    position: 'absolute',
    //   paddingHorizontal: 30,
    //  paddingTop: 30,
    //   paddingBottom: 60, 
    padding: 30,
    width: '100%',
    bottom: 0,
  },

  input: { marginBottom: 20 },

  forgetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  line: {
    marginVertical: 40,
    borderBottomColor: 'black',
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  rememberContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn: { marginTop: 10 },
});

export default Login;