import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, SafeAreaView, TextInput, Alert} from 'react-native';

let picture = require('./assets/logo.png');
let url = 'https://reactnative.dev/img/tiny_logo.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            userName: 'Please enter your name',
            isDisabled: false,
            imageUrl: url,
            title: 'React Native Logo from URL',
        };
        this.changeLogo = this.changeLogo.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    changeLogo(title, image) {
        this.setState({
            imageUrl: image,
            title: title
        });
    }

    onChangeText(text){
        if (text.length === 0) {
            this.setState({userName: 'Please enter your name', input: ''});
            return;
        } else {
            this.setState({input: text});
        }
    }

    onClick() {
        if (this.state.input.length === 0) {
            Alert.alert('Digite seu nome!');
            return;
        }
        else {
            this.setState({
                userName: 'Hello '+ this.state.input + '!',
                input: '',
                isDisabled: true,
            });
        }
    }
                
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <SafeAreaView>
                        <Text style={styles.title}>Basic of React Native</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.imageContainer}>
                    <Logo title={this.state.title} image={this.state.imageUrl}/>
                </View>
                <Input
                    userName={this.state.userName}
                    input={this.state.input}
                    isDisabled={this.state.isDisabled}
                    onChangeText={this.onChangeText}
                    onPress={this.onClick}
                />
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

class Input extends Component {
    render() {
        return (
            <View>
                <Text style={{textAlign: 'center', fontSize: 20, margin: 10}}>
                    {this.props.userName}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(texto) => this.props.onChangeText(texto)}
                    value={this.props.input}
                />
                <Button
                    title='Concluir'
                    onPress={() => this.props.onPress()}
                    color={'black'}
                    disabled={this.props.isDisabled}
                />
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
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#b3cce6',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default App;