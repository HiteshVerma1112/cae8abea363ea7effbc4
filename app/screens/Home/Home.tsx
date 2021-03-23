/**
 * Home Screen
 */
import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Icon, Text, Item, Input } from 'native-base';
import styles from './HomeStyle';
import scale from '../../utils/Scale';
import { Props } from '../AsteroidList/AsteroidList';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface props {


    value: any;
    navigation: any;
    id: string;

}

interface S {
    asteroidData: any
    asteroid: any
    asteroidList: any
}

interface SS {
    id: any;
}

class Home extends Component<Props, S, SS>{

    constructor(props: any) {
        super(props);
        this.state = {
            asteroid: '',
            asteroidData: null,
            asteroidList: '',
        }
    }

    onPressSubmitButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/${this.state.asteroid}?api_key=XocRrzDi3gllTeilJWyTKg9jDZRBEPyduTXacCLU`
            );
            let json = await response.json();
            this.setState({ asteroidData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return
                }

                this.props.navigation.navigate('AsteroidListScreen', { asteroidData: this.state.asteroidData })
            })
            console.log('@@@ JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
            alert('Invalid Asteroid ID')
        }
    }

    onPressRandomButton = async () => {
        try {
            let response = await fetch(
                `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=XocRrzDi3gllTeilJWyTKg9jDZRBEPyduTXacCLU`
            );
            let json = await response.json();
            this.setState({ asteroidList: json.near_earth_objects }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }

                this.props.navigation.navigate('AsteroidDataListScreen', { asteroidList: this.state.asteroidList })
            })
            console.log('@@@ Random data JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    renderForm = () => {
        return (
            <View style={styles.inputFormHeader}>
                <Animatable.Text animation='jello' style={styles.headingText}>Search Asteroid Details</Animatable.Text>
                <Animatable.View animation='fadeInLeftBig'>
                    {
                        this.state.asteroid.trim().length === 0 ?
                            <Item style={{ width: scale(200), alignSelf: 'center', }}>
                                <Input
                                    style={styles.inputText}
                                    placeholder='Enter Asteroid ID'
                                    keyboardType='numeric'
                                    placeholderTextColor='#e8f4ff'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item> :
                            <Item style={{ width: scale(200), alignSelf: 'center', }}>
                                <Input
                                    style={styles.inputStyle}
                                    placeholder='Enter Asteroid ID'
                                    value={this.state.asteroid}
                                    onChangeText={(value) => this.setState({ asteroid: value })} />
                            </Item>
                    }

                </Animatable.View>

                {
                    this.state.asteroid.trim().length === 0 ?
                        <TouchableOpacity large disabled style={styles.disablesubmitButton}>
                            <Text style={styles.disablesubmitButtonText}>Submit</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity large iconLeft style={styles.submitButton} onPress={() => this.onPressSubmitButton()}>

                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>

                }

                <Animatable.View animation='slideInUp'>
                    <Button bordered success style={[styles.submitBtn1]} onPress={() => this.onPressRandomButton()}>
                        <Text style={[styles.submitText, { color: '#1e2933' }]} >Random Asteroid</Text>
                    </Button>
                </Animatable.View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../assests/images/bghome.png')} style={styles.bgHome}>
                    <KeyboardAwareScrollView>
                        {this.renderForm()}
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        );
    }
};

export default Home;

