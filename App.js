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

    changeLogo(title, image) {
        this.setState({
            imageUrl: image,
            title: title
        });
    }  
                
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <SafeAreaView>
                        <Text style={styles.title}>Basic of React Native</Text>
                    </SafeAreaView>
                </View>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <Logo title={this.state.title} image={this.state.imageUrl}/>
                </View>
                <SafeAreaView style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Change to URL' onPress={() => this.changeLogo('React Native Logo from URL', url)}
                            color={'black'}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Change to Asset' onPress={() => this.changeLogo('React Native Logo from asset', picture)}
                            color={'black'}
                        />
                    </View>
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
        backgroundColor: '#e1e2e3',
        flex: 1,
    },
    title: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 100,
    },
    LogoTitle: {
        fontSize: 20,
        textAlign: 'center',
        
    },
    buttonContainer: {
        backgroundColor: '#b3cce6',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
export default App;