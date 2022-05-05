import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Location  from 'expo-location'
import PropTypes from 'prop-types';

const MapComponent = () => {
    const [location, setLocation] = React.useState(null)
    const [error, setError] = React.useState(null)

    const _map = useRef(null);


    React.useEffect(() => {
        (async () =>{
            let { status } = await Location.requestPermissionsAsync();
            if(status !== 'granted'){
                setError('Permission to access location was denied');
                return;
            }
            const locate = await Location.getCurrentPositionAsync({});
            setLocation(locate.coords)

            if(_map.current) {
                _map.current.animateCamera(
                    {
                    center: {
                        latitude: {location,latitude},
                        longitude: {location,longitude}
                    },
                    zoom: 15
                }, 
                5000
                );
            }
        })()
    }, []);



    return (
        <View>
             <Text style={styles.heading}>Confirm your current location: </Text>
            <MapView style={styles.map} ref={_map} initialRegion={{
          latitude: -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}>
                {location ? (
                    <Marker coordinate={location} title="My location" >
                        <FontAwesome name="map-marker" size={40} color="#B12A5B" />
                        
                    </Marker>
                ):
                    <Text>{error}</Text>
                }
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.50,
        alignSelf: 'center',
    },
    heading: {
        alignSelf: 'center',
        paddingTop: 20,
        marginBottom: 10,
        fontSize: 24
    },
});



export default MapComponent;

