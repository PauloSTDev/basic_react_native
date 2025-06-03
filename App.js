import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component {
    render() {
        let imageUrl = 'https://reactnative.dev/img/tiny_logo.png';
        let picture = require('./assets/logo.png');
        return (
            <View>
                <Text style={{ fontSize: 40, margin: 50}}>Basic of React Native</Text>
                <Logo
                    image={picture}
                    title="React Native Logo from URL"
                />
            </View>
        )
    }
}

class Logo extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, margin: 50}}>{this.props.title}</Text>
                <Image
                    source={{uri: this.props.image}}
                    style={{width: 100, height: 100, margin: 50}}
                />
            </View>
        );
    }
}
export default App;