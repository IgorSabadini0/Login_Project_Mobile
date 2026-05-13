import React, { forwardRef, Fragment, LegacyRef } from "react";
import { TextInputProps, Text, TextInput, View, TouchableOpacity} from "react-native";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { style } from "./styles"
import { themas } from "../../global/themes";

type iconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

// Define as propriedades que o seu Input vai aceitar
type Props = TextInputProps & {
    IconLeft: iconComponent,
    IconRight: iconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
};

export const Input = forwardRef<TextInput, Props>((Props, Ref) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, onIconLeftPress, onIconRightPress, title, ...rest } = Props;
    return (
        <Fragment>
            <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
            <View style={style.boxInput}>

                <TouchableOpacity>
                    <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={style.icon}/>
                </TouchableOpacity>

                <Text></Text>
                <TextInput
                    style={style.input}
                />

                <MaterialIcons
                    name="email"
                    size={20}
                    color={themas.colors.gray}
                />
            </View>
        </Fragment>
    );
});