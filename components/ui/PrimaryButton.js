import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: 'white' }}
                style={({ pressed }) => pressed ?                   // Ternary Condition
                    [styles.buttonInnerContainer, styles.pressed] : // True
                    styles.buttonInnerContainer                     // False
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        width: '80%',
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        padding: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})