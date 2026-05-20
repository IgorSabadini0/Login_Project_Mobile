import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
    const { state, descriptors, navigation } = props;

    return (
        <View style={{ flexDirection: "row", height: 60, backgroundColor: "#fff" }}>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}