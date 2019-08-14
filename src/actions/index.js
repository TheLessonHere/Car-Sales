export const ADD_ITEM = 'ADD_ITEM';

export const addItem = item_id => {
    console.log(item_id);
    return {
        type: ADD_ITEM,
        payload: item_id
    };
};

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = item_id => {
    console.log(item_id);
    return {
        type: REMOVE_ITEM,
        payload: item_id
    };
};