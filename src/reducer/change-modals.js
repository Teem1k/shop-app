export const changeModals = (state, action) => {

    if(state === undefined) {
        return {
            registrationModal: true
        }
    }

    switch (action.type) {
        case "OPEN_LOGIN_MODAL":
            return { loginModal: true };
        case "OPEN_REGISTRATION_MODAL":
            return{
                registrationModal: true
            };
        case  "CLOSE_MODAL":
            return {};
        default:
            return state.modals
    }
};