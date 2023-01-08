import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { images, theme } from "../config";
import { Button, Checkbox, Heading, Input, Paragraph } from "../components";


export const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover" />
            <View style={styles.card}>
                <Heading center>Create An Account.</Heading>
                <Paragraph center style={styles.para}>
                    Please enter below details to get registered.</Paragraph>
                <View style={styles.splitInputs}>
                    <Input placeholder="First Name" style={{ width: "48%" }} />
                    <Input placeholder="Last Name" style={{ width: "48%" }} />
                </View>
                <Input style={styles.input} placeholder="Date of Birth" />
                <Input style={styles.input} placeholder="Email"/>
                <Input style={styles.input} placeholder="User Name"/>
                <Checkbox  text="Accept Terms & Conditions" style={styles.checkbox}/>
                <Button >Register</Button>
                <View style={styles.line} />
                <Paragraph center>Already have an account?</Paragraph>
                <Button type="outlined" style={styles.btn}>
                    Login</Button>
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
        width: 85,
        height: 85,
        marginVertical: 40,
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        padding: 30,

    },
    splitInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    para: {
        marginTop: 5,
        marginBottom: 20,
    },
    input: {
        marginBottom: 20
    },
    checkbox:{marginBottom:40},
    btn:{
        marginTop:10
    },
    line: {
        marginVertical: 40,
        borderBottomColor: 'black',
        width: '70%',
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
