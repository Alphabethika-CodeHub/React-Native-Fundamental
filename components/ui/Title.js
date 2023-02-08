import { StyleSheet, Text } from "react-native"

const Title = ({ children }) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        borderWidth: 2,
        padding: 12,
        textAlign: 'center',
        color: 'white',
        borderColor: 'white'
    }
})