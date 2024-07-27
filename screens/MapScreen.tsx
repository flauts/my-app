import React, { useEffect, useRef } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation, Link } from "expo-router";
import { places } from "../assets/places";

export default function MapScreen() {
  const navigation = useNavigation();
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPressOut={focusMap} style={{ marginRight: 10 }}>
          <Text>Focus</Text>
        </Pressable>
      ),
    });
  }, []);

  const focusMap = () => {
    mapRef.current?.animateToRegion({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  //ios only implementation havent checked android
  return (
    <View style={styles.container}>
      <MapView style={styles.map} ref={mapRef}>
        {places.map((place, index) => (
          <Marker key={index} coordinate={place} title={place.name}>
            {place.name === "UTEC" ? (
              <Callout>
                <Link asChild href="/salones">
                  <Text>{place.name}</Text>
                </Link>
              </Callout>
            ) : (
              <Callout>
                <Text>{place.name}</Text>
              </Callout>
            )}
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
