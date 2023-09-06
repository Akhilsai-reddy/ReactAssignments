import axios from "axios";

export default class ProductsAPI {
  static getAllProducts(cb) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get("http://localhost:3001/Products");
        cb(res.data);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  static addProduct(product) {
    console.log(product);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(
          'http://localhost:3001/Products',product)
        resolve(result.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
