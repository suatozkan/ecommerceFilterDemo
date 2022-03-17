import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, Products, Category, Filter } from "../../components";
import { constants } from "../../resources";
import { getProducts, getCategories } from "../../redux/actions";
import { categories, productList } from "../../resources";
import _ from "lodash";

export function Home(props) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    props.getProducts(productList);
  }, []);

  useEffect(() => {
    props.getProducts(
      props.categories.length < 1
        ? productList
        : Filter(productList, props.categories)
    );
    console.log(Filter(productList, props.categories),props.categories)
  }, [props.categories]);

  const _onClick = ({ item, routes, currentNode }) => {
    var preTag = currentNode;
    var newTags = item.parentId ? _.pull(preTag, item.parentId) : preTag;
    props.getCategories(newTags);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Products"
        placement="left"
        borderColor={constants.LIGHTGRAY}
        rightButtonPress={() => setModalVisible(true)}
        rightButtonIcon="filter"
      />
      <Products products={props.products} />
      <Category
        _onClick={({ item, routes, currentNode }) =>
          _onClick({ item, routes, currentNode })
        }
        visible={modalVisible}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
        categories={props.categories}
        data={categories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: constants.WHITE,
  },
});

const mapStateToProps = (store) => ({
  products: store.userState.products,
  categories: store.userState.categories,
});

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      getProducts,
      getCategories,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchProps)(Home);
