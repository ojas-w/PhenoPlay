import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlashcardGame = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flashcard Game</Text>
            {/* insert Flashcard logic and UI*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff', //light background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: ',#333',
    }
});


export default FlashcardGame;