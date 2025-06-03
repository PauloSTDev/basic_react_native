import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView} from 'react-native';

let picture = require('./assets/logo.png');
let url = 'https://reactnative.dev/img/tiny_logo.png';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: url,
            title: 'React Native Logo from URL'
        };
        this.changeLogo = this.changeLogo.bind(this);
    }

    changeLogo(title) {
        this.setState({
            imageUrl: picture,
            title: title
        });
    }  
                
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 40, margin: 50}}>Basic of React Native</Text>
                <Logo title={this.state.title} image={this.state.imageUrl}/>
                <SafeAreaView style={styles.buttonContainer}>
                    <Button
                        title='Change Image' onPress={() => this.changeLogo('React Native Logo from asset')}
                        color={'black'}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

class Logo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.LogoTitle}>{this.props.title}</Text>
                <Image
                    source={{uri: this.props.image}}
                    style={styles.logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: '#e1e2e3',
        
    },
    logo: {
        width: 100,
        height: 100,
        margin: 100,
    },
    LogoTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 50,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#b3cce6',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 15,
    },
});
export default App;