import React from "react";
import { useState } from "react";
import {
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,

} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo_etec.png';
import { MaterialIcons, Entypo, Octicons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);
            if (!email || !password) {
                return Alert.alert('Atenção', 'Digite os campos obrigatórios');
            }

            setTimeout(() => {
                if (email == 'mauricioaneves@terra.com.br' && password == '1234') {
                    Alert.alert('Sucesso', 'Logado com Suceso');
                } else {
                    Alert.alert('Erro', 'Usuário não encontrado');
                }
                setLoading(false);
            }, 3000);

        } catch (error) {
            Alert.alert('Erro', 'Erro ao Logar');
        }

    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                {/* <Text>Top</Text> */}
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta</Text>
            </View>
            <View style={style.boxMid}>

                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />

                <Input
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onChangeText={setPassword}
                    onIconRightPress={()=>setShowPassword(!showPassword)}
                />

            </View>

            <View style={style.boxBottom}>
                <Button text="Entrar" loading={loading} onPress={() => getLogin()} />
            </View>
            <Text style={style.textBottom}>Não tem conta?
                <Text style={{ color: themas.colors.primary }}>Crie Agora</Text>
            </Text>
        </View>
    )
}

