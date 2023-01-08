import React from "react";
import { StyleSheet, TextInput } from "react-native";


export const Input = ({ placeholder,keyboarType, style, ...restProps }) => {
    return (
    <TextInput
     {...restProps} 
     style={[styles.input,style]} 
     placeholder={placeholder}
     keyboardType={keyboarType} />
     );
};


const styles = StyleSheet.create({
    input: {
        borderRadius:24,
        borderWidth:1,
        borderColor:'#00000080',
        paddingVertical: 10, paddingHorizontal:20,
    }
});