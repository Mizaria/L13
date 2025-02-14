import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = ({navigation}) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_ea9ed51da2787afaf8e51f827c304208")
            .then(response => response.json())
            .then(json => {
                const data = json.result.records;
                setData(data);
                setFilteredData(data);
            })

    }, []);

    const FilterData = (text) => {
        setSearchQuery(text);
        if (text !== '') {
            const filtered = data.filter((item) =>
                item.street_name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.streetname}
            onPress={() => navigation.navigate('Individual', { data: item })}
        >

            <Text style={styles.text}>{item.street_name}</Text>

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resale Flat List</Text>

            <TextInput
                style={styles.searchBox}
                placeholder="Search Resale Flat..."
                value={searchQuery}
                onChangeText={FilterData}
            />
            <FlatList
                data={filteredData}

                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#daf4f2",
        padding: 12,

    },
    title: {
        color: "#031e47",
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingTop: 15,
        textAlign: "center",
    },
    searchBox: {
        backgroundColor: "white",
        borderColor: "darkblue",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    streetname: {
        backgroundColor: "#031e47",
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
    },
    text: {
        fontSize: 15,
        color: "#daf4f2",
    },


});

export default Home;