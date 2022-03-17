import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { constants } from "../../resources";
const { width } = Dimensions.get("window");

export function Products(props) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={{
          uri: item.imageUrl,
        }}
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
  return (
    <FlatList
      data={props.products}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: constants.WHITESMOKE,
    width: width / 2 - 20,
    padding: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: width / 3,
    height: width / 3,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default Products;
