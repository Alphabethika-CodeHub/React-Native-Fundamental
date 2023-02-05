import { View, Text, StyleSheet } from "react-native"

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Game Screen</Text>
            <View>
                <Text>Higher or Lower?</Text>
                <Text>- +</Text>
            </View>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})