import ProductList from "../components/product/ProductList";


function Product(){
    let products = [{
        id:"p1",
        product:"city tour",
        image:"",
        description:"it is a good tour",
        price: "20000",
    },
    {
        id:"p2",
        product:"forest tour",
        image:"",
        description:"it is a refreshing tour",
        price: "50000",
    }]
 return <div>
  <ul>
   {products.map((item)=> { 
      return <li>{item.product}</li>

})}
<ProductList/>
  </ul>
 </div>
}

export default Product;