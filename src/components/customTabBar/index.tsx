import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { style } from "./styles";
import { themas } from "../../global/themes";

const CustomTabBar: React.FC<BottomTabBarProps> = (props) => {
    const { state, descriptors, navigation } = props;

    const go = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={style.tabBar}>
            {/* 1º Item da Lista */}
            <TouchableOpacity onPress={() => go("List")} style={style.tabItem}>
                <AntDesign name="bars" size={24} style={{ opacity: state.index === 0 ? 1 : 0.2, color: themas.colors.primary, fontSize: 32 }}></AntDesign>
            </TouchableOpacity>

            {/* Botão Central */}
            <View style={style.centerWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate("Middle")} style={style.centerButtonContainer}>
                    <View style={style.iconRow}>
                        <Entypo name="plus" size={22} color="#fff"></Entypo>
                        <MaterialIcons></MaterialIcons>
                    </View>
                </TouchableOpacity>
            </View >

            <TouchableOpacity onPress={() => go("User")}>
                <FontAwesome name="user" size={24} style={{ opacity: state.index === 0 ? 1 : 0.2, color: themas.colors.primary, fontSize: 32 }} >
                </FontAwesome>
            </TouchableOpacity>
        </View >
    )
}

export default CustomTabBar;