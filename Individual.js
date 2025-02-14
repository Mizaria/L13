import React from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity } from 'react-native';

const Individual = ({ route , navigation}) => {
    const { data } = route.params;

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Details</Text>
            <View style={styles.item}>
                <Text style={styles.text}>Street: {data.street_name}</Text>
                <Text style={styles.text}>Town: {data.town}</Text>
                <Text style={styles.text}>Flat Type: {data.flat_type}</Text>
                <Text style={styles.text}>Block: {data.block}</Text>
                <Text style={styles.text}>Storey Range: {data.storey_range}</Text>
                <Text style={styles.text}>Flat Model: {data.flat_model}</Text>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#daf4f2',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#192689',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#031e47',
        padding: 15,
        borderRadius: 10,
        marginVertical: 150,
    },
    text: {
        fontSize: 20,
        color: '#daf4f2',
        marginBottom: 5,
    },
    backButtonText: {
        color: '#daf4f2',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#031e47',
        alignContent: 'center',
        textAlign: 'center',
        borderRadius: 10,


    },
});

export default Individual;
