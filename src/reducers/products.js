import * as types from '../constants/ActionType'

let initialState = [
    {
        id: 1,
        name: 'Iphone 6',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'San pham do Apple san xuat',
        price: 500,
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'Samsung',
        image: 'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/2/12/637170944337163053_ss-s20-plus-xanh-1.png',
        description: 'San pham do Samsung san xuat',
        price: 400,
        inventory: 15,
        rating: 5,
    },
    {
        id: 3,
        name: 'Oppo',
        image: 'https://cdn.tgdd.vn/Products/Images/42/249944/oppo-a55-4g-blue-600x600.jpg',
        description: 'San pham do Oppo san xuat',
        price: 300,
        inventory: 5,
        rating: 3,
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default products;