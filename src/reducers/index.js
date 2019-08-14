import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case ADD_ITEM:
            const selectedAdd = state.store.filter(item => item.name === action.payload);
            const updatedStoreAdd = state.store.filter(item => item.name !== action.payload);
            const updatedPriceAdd = state.additionalPrice + selectedAdd[0].price;
            console.log(selectedAdd);
            return {
                ...state,
                additionalPrice: updatedPriceAdd,
                car: {
                    ...state.car,
                    features: [...state.car.features, selectedAdd[0]]
                },
                store: updatedStoreAdd
            };
        case REMOVE_ITEM:
              const selectedRemove = state.car.features.filter(item => item.name === action.payload);
              const boughtFeatures = state.car.features.filter(item => item.name !== action.payload);
              const updatedPriceRemove = state.additionalPrice - selectedRemove[0].price;
              console.log(selectedRemove)
              return {
                ...state,
                additionalPrice: updatedPriceRemove,
                car: {
                  ...state.car,
                  features: boughtFeatures
                },
                store: [...state.store, selectedRemove[0]]
              };
        default:
            return state;
    }
};