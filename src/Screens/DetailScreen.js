import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { detail } from "../Styles/Detail";
import api from "../api";
import Svg, { Path } from "react-native-svg";

export const DetailScreen = ({ navigation, route }) => {
  const [name, setName] = React.useState("");
  const [getData, setGetData] = React.useState([]);
  const params = route.params;

  return (
    <SafeAreaView style={detail.container}>
      <View style={{ alignItems: "left", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: "row" }}>
            <Svg width={24} height={24} viewBox="0 0 24 24">
              <Path
                fill="#000"
                d="M14.828 2.393L6.414 10.807a1 1 0 000 1.414L14.828 19.06a1 1 0 001.414-1.414l-7.364-7.364a1 1 0 000-1.414l7.364-7.364a1 1 0 00-1.414-1.414z"
              />
            </Svg>
            <Text>Назад</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={detail.DetailCard}>
        <View style={detail.filmDetailCard}>
          <View style={detail.TextAlign}>
            <Text style={detail.TextxTitle}>{params?.title}</Text>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w440_and_h660_face${params?.backdrop_path}`,
              }}
              style={{
                width: 250,
                height: 250,
                borderRadius: 50,
              }}
            />
            <Text style={detail.TextNonTitle}>
              Release date: {params?.release_date}
            </Text>
            <Text style={detail.TextNonTitle}>
              Rating: {params?.vote_average}
            </Text>
            <Text style={detail.TextNonTitle}>
              Description: {params?.overview}
            </Text>
          </View>

          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={{
              width: "100%",
              height: 100,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
