const { View, Alert, TextInput, StyleSheet } = require("react-native");
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be a number between 1 to 99.",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
            );
            return;
        }

        console.log(`Valid Number: ${chosenNumber}`);
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.inputContainer}>
                <TextInput value={enteredNumber} onChangeText={numberInputHandler} style={styles.numberInput} maxLength={2} keyboardType={'number-pad'} autoCorrect={false} />
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "lightblue",
        borderRadius: 8,
        elevation: 4,

        // Shadow For iOS
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        color: 'black',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})