const initState ={
    products:[
        {id:1, name:'men trouser', image:'1.jpg', price:200, discount:2, discountPrice:200-2/100*200, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:2, name:'men jacket winter', image:'2.jpg', price:300, discount:5, discountPrice:300-5/100*300, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:3, name:'women jacket', image:'3.jpg', price:200, discount:3, discountPrice:200-3/100*200, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:4, name:'men shoes', image:'4.jpg', price:400, discount:5, discountPrice:400-5/100*400, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:5, name:'men checked shirt', image:'5.jpg', price:250, discount:4, discountPrice:250-4/100*250, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:6, name:'women suit', image:'6.jpg', price:700, discount:5, discountPrice:700-5/100*700, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:7, name:'men trouser for all season', image:'7.jpg', price:750, discount:6, discountPrice:750-6/100*750, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:8, name:'mens jacket for winter', image:'8.jpg', price:400, discount:3, discountPrice:400-3/100*400, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:9, name:'men jeans', image:'9.jpg', price:700, discount:4, discountPrice:700-4/100*700, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
        {id:10, name:'men B&W checked shirt', image:'10.jpg', price:600, discount:5, discountPrice:600-5/100*600, quantity:1, desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum arcu in odio laoreet, eu congue augue cursus. Duis semper ullamcorper felis in fringilla'},
    ],
    product:{}

}
const ProductsReducer = (state = initState,action) => {
    switch(action.type){
        case "PRODUCT":
        return {...state,product:state.products.find(product => product.id === parseInt(action.id))}
        default:
        return state;
    }

}
export default ProductsReducer;