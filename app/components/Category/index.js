import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  FlatList,
  Text,
} from "react-native";
import { Header } from "../../components";
import { constants } from "../../resources";
import TreeSelect from "react-native-tree-select";
import _, { constant } from "lodash";

export function Category(props) {
  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={props.visible}
      onRequestClose={props.onClose}
    >
      <View>
        <Header
          title="Browse Products"
          placement="left"
          borderColor={constants.LIGHTGRAY}
          rightButtonPress={props.onClose}
          rightButtonIcon="chevron-down"
        />
        <View style={styles.container}>
          <TreeSelect
            data={props.data}
            defaultSelectedId={props.categories}
            isShowTreeId={false}
            isOpen={false}
            selectType="multiple"
            itemStyle={styles.item}
            selectedItemStyle={styles.selectedItem}
            onClick={props._onClick}
          />
          <FlatList
            data={props.categories}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={styles.tagItem}>
                <Text style={styles.tagItemText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  tagItem: {
    backgroundColor: constants.WHITESMOKE,
    borderRadius: 12,
    margin: 10,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tagItemText: {
    fontSize: 10,
  },
  item: {
    fontSize: 16,
    color: constants.DARKGRAY,
  },
  selectedItem: {
    backgroudColor: constants.SOFTYELLOW,
    fontSize: 18,
    color: constants.BLUE,
  },
});

export default Category;
