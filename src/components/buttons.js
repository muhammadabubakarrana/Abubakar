import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { theme } from "../config";

export const Button = ({ children, type, style, ...restProps }) => {
    return (
        <TouchableOpacity {...restProps}
            style=
            {[type === 'outlined'
                ? { ...styles.btn, ...styles.btnOutlined }
                : { ...styles.btn, ...styles.btnFilled }, style]}>

            <Text style={
                type === 'outlined'
                    ? { ...styles.text, ...styles.btnOutlined }
                    : { ...styles.text, ...styles.btnFilled }
            }>{children}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    btn: {
        paddingVertical: 12,
        // paddingHorizontal: 142,
        borderRadius: 23,
        shadowColor: theme.colors.silver,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        alignItems: "center"
    },
    btnFilled: {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white,
    },
    btnOutlined: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.blue,
        borderWidth: 1,
    },
    text: {
        fontSize: 12,
        fontFamily: theme.font.regular,
        lineHeight: 18,
    },
    textOutlined: {
        color: theme.colors.blue,
    },
    textFilled: {
        color: theme.colors.white,
    }
});


