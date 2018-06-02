import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

const images = [
  {
    key: 1,
    name: "A",
    image: require("../images/1.jpg"),
    url: "https://www.google.com"
  },
  {
    key: 2,
    name: "B",
    image: require("../images/2.jpg"),
    url: "https://www.google.com"
  },
  {
    key: 3,
    name: "C",
    image: require("../images/3.jpg"),
    url: "https://www.google.com"
  },
  {
    key: 4,
    name: "D",
    image: require("../images/4.jpg"),
    url: "https://www.google.com"
  }
];

export default () => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, image, url, key }) => (
        <Card title={`CARD ${key}`} image={image} key={key}>
          <Text style={{ marginBottom: 10 }}>
            Photo by {name}.
          </Text>
          <Button
            backgroundColor="#03A9F4"
            title="VIEW NOW"
            onPress={() => Linking.openURL(url)}
          />
		  //here,we can also have another screen named signin or signup.Since,it's just another dummy screen 
		  //given a url
        </Card>
      ))}
    </ScrollView>
  </View>
);
