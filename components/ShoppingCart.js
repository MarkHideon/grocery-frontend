import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/cartStyles';
import { cartItems as initialCartItems } from '../constants/cartData';
import randomColor from 'randomcolor';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const ShoppingCart = () => {
    const [items, setItems] = useState(initialCartItems);

    const handleIncrement = (id) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === id && item.quantity > 0
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="left" size={20} color="white" />
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.headerText}>Shopping Cart</Text>
                    <Text style={styles.subHeader}>• A total of {items.length} pieces</Text>
                </View>
            </View>

            <ScrollView style={styles.cartContent}>
                {items.map(item => (
                    <View key={item.id} style={styles.itemCard}>
                        <View style={styles.itemLeft}>
                            <Image source={item.image} style={styles.itemImage} />
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemPrice}>${item.price}</Text>
                                <Text style={styles.itemPrice}> {item.weight}</Text>
                            </View>
                        </View>
                        <View style={styles.quantityControls}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => handleDecrement(item.id)}
                            >
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => handleIncrement(item.id)}
                            >
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>
                    Total: <Text style={{ color: '#2D814A' }}>${total.toFixed(2)}</Text>
                </Text>
            </View>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ShoppingCart;