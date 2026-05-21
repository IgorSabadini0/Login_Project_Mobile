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
        flex: 1,
        alignItems: "center"
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    centerButtonContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
});