export const changeCatalogList = (payload) => {
    return {
        type: "CHANGE_CATALOG_LIST",
        payload
    }
};

export const changeLoading = (payload) => {
    return {
        type: "CHANGE_LOADING",
        payload
    }
};

export const fetchDevices = (getDevices, dispatch, id) => {
    dispatch(changeLoading(true));
    getDevices(id)
        .then((data) => {
            dispatch(changeCatalogList({data, id}));
            dispatch(changeLoading(false))
        })
};

export const fetchCurrentDevice = (getCurrentDevice, dispatch, id) => {
    getCurrentDevice(id)
        .then((data) => {
            dispatch(createCurrentDevice(data));
        })
};

export const createCurrentDevice = (payload) => {
    return {
        type: "CREATE_CURRENT_DEVICE",
        payload
    }
};

export const openLoginModal = () => {
    return {
        type: "OPEN_LOGIN_MODAL",
    }
};

export const closeModal = () => {
    return {
        type: "CLOSE_MODAL",
    }
};

export const updateUser = (payload) => {
    return {
        type: "UPDATE_USER",
        payload
    }
};

export const addToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload
    }
};

export const changeCount = (payload) => {
    return {
        type: "CHANGE_COUNT",
        payload
    }
};

export const clearCart = (payload) => {
    return {
        type: "CLEAR_CART",
        payload
    }
};

export const makeOrder = (makeOrder, dispatch, cart) => {
    makeOrder(cart)
        .then((data) => {
            dispatch(makeResult(data));
        })
};

const makeResult = (payload) => {
    console.log(payload)
    return {
        type: "MAKE_RESULT",
        payload
    }
};
export const filterDevices = (payload) => {
    return {
        type: "FILTER_DEVICES",
        payload
    }
};
export const minPrice = (payload) => {
    return {
        type: "SET_MIN_PRICE",
        payload
    }
};
export const maxPrice = (payload) => {
    return {
        type: "SET_MAX_PRICE",
        payload
    }
};
export const filterDeactivate = () => {
    return{
        type: "DEACTIVATE_FILTER"
    }
};
export const filterActive = () => {
    return{
        type: "ACTIVE_FILTER"
    }
};

export const changeBestSales = (payload) => {
    return {
        type: "CHANGE_BEST_SALES_LIST",
        payload
    }
};
export const fetchBestSales = (getBestSales, dispatch) => {
    dispatch(changeLoading(true));
    getBestSales()
        .then((data) => {
            dispatch(changeBestSales({data}));
            dispatch(changeLoading(false))
        })
};
export const openRegistrationModal = () => {
    return {
        type: "OPEN_REGISTRATION_MODAL"
    }
};

