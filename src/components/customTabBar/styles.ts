import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    tabItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tabBar: {
        flexDirection: "row",
        height: 60,
        backgroundColor: "#fff",
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        alignItems: "center"
    },
    centerWrapper: {

    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    }
});