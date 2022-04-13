import React from 'react';
import { Stylesheet, Text, View, ActivityIndicator } from 'react-native';

export default class PoliceCon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch('https://af091e40e277.ngrok.io/api/Provinces/Get')
        .then ((response) => response.json())
        .then ((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson,
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            let police = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key}>
                        <Text>{val.name}</Text>
                        <Text>{val.contact}</Text>
                    </View>
                )
            });
           return (
                <View style={{flex: 1, padding: 20}}>
                    {police}
                </View>
           ) 
        }
    }
}
