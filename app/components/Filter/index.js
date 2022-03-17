import _ from "lodash";

export default function filter(productList,categories) {
    var filteredList = _.filter(
        productList,
        _.flow(
          _.property("tags"),
          _.partial(_.intersection,categories),
          _.size
        )
      );
  
    return filteredList;
  }
  