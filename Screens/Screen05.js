import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Screen05 = ({ navigation, route }) => {

    const { product, quantity, total, user, password } = route.params; // Nhận thông tin sản phẩm từ Screen04

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Cart</Text>

            {/* Hiển thị thông tin sản phẩm */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Image source={product.imageProduct} style={{ width: 100, height: 100, marginRight: 10 }} />
                <View>
                    <Text style={{ fontSize: 18 }}>{product.label}</Text>
                    <Text>Price: ${product.price}</Text>
                    <Text>Quantity: {quantity}</Text>
                    <Text>Total: ${total}</Text>
                </View>
            </View>

            {/* Nút để quay lại Screen04 */}
            <TouchableOpacity
                style={{ backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 15, borderRadius: 20 }}
                onPress={() => navigation.navigate("Screen04", { user, password })}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Back to Products</Text>
            </TouchableOpacity>
        </View >
    );
}

export default Screen05;