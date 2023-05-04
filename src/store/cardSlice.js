import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  products: [
    {
      id: 1,
      title: " Backpack ",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: { rate: 3.9, count: 120 },
      quantity: 0,
    },
    {
      id: 2,
      title: " Shirt ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: { rate: 4.1, count: 259 },
      quantity: 0,
    },
    {
      id: 3,
      title: " Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image:
        "https://media.istockphoto.com/id/1352728757/fr/photo/veste-en-jean-isol%C3%A9e-sur-blanc-vues-avant-et-arri%C3%A8re-pr%C3%AAt-pour-le-chemin-d%C3%A9cr%C3%AAtage.jpg?b=1&s=612x612&w=0&k=20&c=6t6uRk9AzwmDahXr0aXLgyqiK_cicVDw1XvytWtZmKQ=",
      rating: { rate: 4.7, count: 500 },
      quantity: 0,
    },
    {
      id: 4,
      title: "T-Shirt",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image:
        "https://media.istockphoto.com/id/1151955707/fr/photo/mod%C3%A8le-noir-blanc-t-shirt-homme-de-deux-c%C3%B4t%C3%A9s-forme-naturelle-sur-mannequin-invisible-pour.jpg?b=1&s=612x612&w=0&k=20&c=KiCZtdhPyiZdexM7rOlgw1gOtjSR2aHMut_96hGX2PU=",
      rating: { rate: 2.1, count: 430 },
      quantity: 0,
    },
  ],
  quantitys : 0
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
            }
            state.quantitys+=1  
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      state.quantitys -= product.quantity;
      product.quantity = 0;
    
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
