import React from "react";
import { StyleSheet, Text } from "react-native";

export const Heading = ({ style, center, children, ...restprops }) => {
    return (<Text {...restprops}
        style={[{
            ...styles.heading,
            textAlign: center ? "center" : "auto"
        }, style]}>
        {children}
    </Text>);
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        lineHeight: 29,
        //fontWeight: '300',
        color: '#000000'
    },
});

