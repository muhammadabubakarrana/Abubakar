import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../config";

export const Paragraph = ({ style, center, children, ...restprops }) => {
    return (
        <Text {...restprops}
            style={[{
                ...styles.paragraph, textAlign: center
                    ? "center"
                    : "auto"
            }, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 12,
        lineHeight: 15,
        color: theme.colors.black,
        fontFamily: theme.font.regular,
        opacity:0.6,    
    },
});
