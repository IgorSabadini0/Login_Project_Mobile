import React from "react";
import { Touchable, TouchableOpacity, View, Text, TouchableHighlightProps } from "react-native";
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text: string;
    loading?: boolean;
};

export function Button({...rest}: Props) {
    return (
        <TouchableOpacity style={style.button}>
            <Text>{rest.text}</Text>
        </TouchableOpacity>
    )
}