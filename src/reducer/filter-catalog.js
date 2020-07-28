export const filterCatalog = (state, action) => {

    if(state === undefined) {
        return {
            minPrice: 0,
            maxPrice: 0,
            filteredDevices: [],
            filterActive: false
        }
    };


    switch (action.type) {

        case "SET_MIN_PRICE":
            return {
                ...state.filterCatalog,
                minPrice: Math.abs(action.payload)
            };

        case "SET_MAX_PRICE":
            return {
                ...state.filterCatalog,
                maxPrice: Math.abs(action.payload)
            };

        case "FILTER_DEVICES":
            const { minPrice,maxPrice } = state.filterCatalog;
            console.log(action.payload);
            const maxValue = state.catalog.data[action.payload].reduce((acomulator,el) => {
                return Math.max(acomulator,+el.price)
            },0);
            state.filterCatalog.minPrice = minPrice < maxValue ? minPrice : maxValue;
            state.filterCatalog.maxPrice =  maxPrice < minPrice ? minPrice : maxPrice;
            const filteredArr = state.catalog.data[action.payload].filter((el) => {
                return +el.price >= state.filterCatalog.minPrice &&  +el.price <= state.filterCatalog.maxPrice
            });
            return {
                ...state.filterCatalog,
                filteredDevices: filteredArr
            };

        case "DEACTIVATE_FILTER":
            return {
                ...state.filterCatalog,
                filterActive: false
            };
        case "ACTIVE_FILTER":
            return {
                ...state.filterCatalog,
                filterActive: true
            };

        default:
            return {
                ...state.filterCatalog
            };

    }
};