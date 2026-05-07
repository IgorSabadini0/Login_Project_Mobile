import React, { forwardRef, LegacyRef } from "react";
import { TextInputProps, TextInput, View } from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { style } from "./styles"
import { themas } from "../../global/themes";

type iconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

// Define as propriedades que o seu Input vai aceitar
type Props = TextInputProps & {
    iconLeft?: iconComponent,
    iconRight?: iconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
};

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    return (
        <View style={style.boxInput}>
            <TextInput
                style={style.input}
            />

            <MaterialIcons
                name="email"
                size={20}
                color={themas.colors.gray}
            />
        </View>
    );
});