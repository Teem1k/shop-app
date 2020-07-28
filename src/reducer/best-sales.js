export const bestSales = (state, action) => {
    if(state === undefined) {
        return {
            list: [],
        }
    }

    switch(action.type){
        case "CHANGE_BEST_SALES_LIST":
            return {
                list: action.payload.data
            };
        default:
            return {
                ...state.bestSales
            }
    }

};