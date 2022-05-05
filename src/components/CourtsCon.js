import React from 'react';
import { Navigation, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';

//Galio components
import {Text, View} from 'galio-framework';
import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;

export default class CourtsCon extends react.Component {

    constructor(props){
        super(props);
        this.props = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        return fetch('#')
        .then ((response) => response.json())
        .then ((responseJson) => {
           this.setState({
               isLoading: true,
               dataSource: responseJson,
           })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const { navigation} = this.props;

        if(this.state.IsLoading) {
            return (
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        else {
            let courts = this.state.dataSource.map((val, key) => {
                return(
                    <View key = {key}>
                        <TouchableOpacity onPress={() => navigation.openDrawer}>
                            <Block style={styles.card}>

                            </Block>

                        </TouchableOpacity>
                    </View>
                )
            })
        }
    }
}

const styles = Stylesheet.create({
card: {
borderColor: 'transparent',
marginHorizontal: BASE_SIZE * -0.5,
marginVertical: BASE_SIZE * -0.5,
Padding: BASE_SIZE,
backgroundColor: COLOR_WHITE,
shadowOpacity: 0.40

}
})
