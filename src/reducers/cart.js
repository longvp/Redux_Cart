import * as types from '../constants/ActionType'

let data = JSON.parse(localStorage.getItem('CART'));

let initialState = data ? data : [];

// let initialState = [
//     {
//         product: {
//             id: 1,
//             name: 'Iphone 6',
//             image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//             description: 'San pham do Apple san xuat',
//             price: 500,
//             inventory: 10,
//             rating: 4,
//         },
//         quantity: 5
//     },
//     {
//         product: {
//             id: 2,
//             name: 'Samsung',
//             image: 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/2/12/637170944337163053_ss-s20-plus-xanh-1.png',
//             description: 'San pham do Samsung san xuat',
//             price: 400,
//             inventory: 15,
//             rating: 5,
//         },
//         quantity: 3
//     }
// ];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            let newItem = {
                product: action.product,
                quantity: action.quantity
            }
            let index = -1;
            if (state.length > 0) {
                for (let i = 0; i < state.length; i++) {
                    if (newItem.product.id === state[i].product.id) {
                        index = i;
                        break;
                    }
                }
            }
            if (index !== -1) {
                state[index].quantity += newItem.quantity;
            } else {
                state.push(newItem);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_PRODUCT_IN_CART: {
            let index = -1;
            let productDelete = action.product;
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === productDelete.id) {
                    index = i;
                    break;
                }
            }
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        case types.UPDATE_QUANTITY: {
            let index = -1;
            let quantity = action.quantity;
            let product = action.product;
            for (let i = 0; i < state.length; i++) {
                if (state[i].product.id === product.id) {
                    index = i;
                    break;
                }
            }
            state[index].quantity = quantity > 0 ? quantity : 1;
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        }
        default: {
            return [...state];
        }
    }
}

export default cart;