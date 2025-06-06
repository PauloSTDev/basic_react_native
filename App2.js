import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import api from './src/services/api';

export default function App2() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/posts');
                setData(response.data);
                alert('Data fetched successfully!');
                setData(response.data);
            } catch (error) {
                alert('Error fetching data: ' + error.message);
            }
        }
        fetchData();
    }, []);
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
                <Text style={styles.buttonText}>
                    Access API
                </Text>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text>Title: {data.title}</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});


