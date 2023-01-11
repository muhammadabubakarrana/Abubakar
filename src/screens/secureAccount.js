import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { images, theme } from "../config";
import { Button, Heading, Input, Paragraph } from "../components";
import {verticalScale, moderateScale } from "react-native-size-matters";

export const SecureAccount = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover"/>
            <View style={styles.card}>
                <Heading center>Secure Your Account</Heading>
                <Paragraph center style={styles.para}>
                Enter and confirm a password for your account</Paragraph>
            
                <Input style={styles.input} placeholder="Password" secureTextEntry/>
                <Input style={styles.input} placeholder="Confirm Password" secureTextEntry/>
                <Button >Next (1/3)</Button>
        
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.blue,
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logo: {
        width:moderateScale(85),
        height: verticalScale(85),
        marginVertical:verticalScale(40),
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius:moderateScale(32) ,
        borderTopLeftRadius:moderateScale(32),
        paddingVertical:verticalScale(30) ,
        paddingHorizontal:moderateScale(30)
    },

    para: {
        marginTop:verticalScale(5)  ,
        marginBottom:verticalScale(20)  ,
    },
    input: {
        marginBottom:verticalScale(20) ,
    },
    btn:{
        marginTop:verticalScale(10) 
    },

});
