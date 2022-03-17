import { Filter } from "../app/components";
import { productList } from "../app/resources";

test("unitTest", async () => {
  let tag = ["Apple"];  // use the pairs for the tag and controlList variables : {['Apple'],iphoneTest}, {['Nokia'],nokiaTest}, {[''],allProductsTest}
  let controlList = iphoneTest;
  expect(Filter(productList, tag)).toEqual(controlList);
});

const iphoneTest = [
  {
    id: "id1",
    name: "iphone 12 128GB",
    tags: ["iphone 12 128GB", "iphone 12", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg",
  },
  {
    id: "id2",
    name: "iphone 12 256GB",
    tags: ["iphone 12 256GB", "iphone 12", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg",
  },
  {
    id: "id3",
    name: "iphone 11 128GB",
    tags: ["iphone 11 128GB", "iphone 11", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn03.ciceksepeti.com/cicek/kcm5854464-1/XL/apple-iphone-xsi-iphone-11-pro-maxa-kamera-lens-donusturucu-gold-kcm5854464-1-318b6a221444471281b8a7f25be20c5b.jpg",
  },
];

const nokiaTest = [
  {
    id: "id4",
    name: "Nokia C7",
    tags: ["Nokia C7", "Nokia", "Mobile Phones"],
    imageUrl:
      "https://productimages.hepsiburada.net/s/10/375/9187122970674.jpg",
  },
];

const allProductsTest = [
  {
    id: "id1",
    name: "iphone 12 128GB",
    tags: ["iphone 12 128GB", "iphone 12", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg",
  },
  {
    id: "id2",
    name: "iphone 12 256GB",
    tags: ["iphone 12 256GB", "iphone 12", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf.jpg",
  },
  {
    id: "id3",
    name: "iphone 11 128GB",
    tags: ["iphone 11 128GB", "iphone 11", "Apple", "Mobile Phones"],
    imageUrl:
      "https://cdn03.ciceksepeti.com/cicek/kcm5854464-1/XL/apple-iphone-xsi-iphone-11-pro-maxa-kamera-lens-donusturucu-gold-kcm5854464-1-318b6a221444471281b8a7f25be20c5b.jpg",
  },
  {
    id: "id4",
    name: "Nokia C7",
    tags: ["Nokia C7", "Nokia", "Mobile Phones"],
    imageUrl:
      "https://productimages.hepsiburada.net/s/10/375/9187122970674.jpg",
  },
  {
    id: "id5",
    name: "Apple Watch",
    tags: ["iWatch", "Apple Watch", "Watches"],
    imageUrl:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
  },
];
