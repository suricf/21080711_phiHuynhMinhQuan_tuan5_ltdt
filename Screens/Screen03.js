import React, { useState } from 'react';
import { TouchableOpacity, Image, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen03 = ({ navigation, route }) => {
    const { user, password: registeredPassword } = route.params; // Nhận thông tin tài khoản từ Screen02
    const [inputPassword, setInputPassword] = useState('');

    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginBottom: 20 }}>
                <Image source={require("../assets/Data/Image_20.png")} style={{ height: 200, width: '100%' }} />
            </View>

            <View style={{ padding: 20 }}>
                <View style={{ marginBottom: 40 }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>Welcome {user}</Text>
                </View>

                {/* Input cho mật khẩu */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10 }}>
                    <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry
                        style={{ flex: 1 }}
                        value={inputPassword}
                        onChangeText={setInputPassword}
                    />
                </View>

                {/* Nút Login */}
                <View>
                    <TouchableOpacity
                        style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                        onPress={() => {
                            if (inputPassword === registeredPassword) { // Kiểm tra mật khẩu
                                setInputPassword('');
                                navigation.navigate("Screen04", { user, password: registeredPassword });
                            } else {

                                alert('Incorrect password.');
                            }
                        }}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Screen03;
