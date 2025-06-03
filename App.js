import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';

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
            <View>
                <Text style={{ fontSize: 40, margin: 50}}>Basic of React Native</Text>
                <Logo
                    title={this.state.title}
                    image={this.state.imageUrl}
                />
                <Button title='Change Image' onPress={() => this.changeLogo('React Native Logo from asset')}/>
                
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