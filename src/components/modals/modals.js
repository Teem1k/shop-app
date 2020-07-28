import React from 'react'
import LogInModal from "./log-in-modal/log-in-modal";
import {connect} from "react-redux";
import {closeModal} from "../../actions";
import RegistrationModal from './registration-modal/registration-modal'

const Modals = ({modals, close}) => {

    const { loginModal,registrationModal } = modals;

    if(loginModal) return <LogInModal close={close}/>;


    if(registrationModal)return <RegistrationModal close={close} />;

    return'';

};

const mapStateToProps = ({modals}) => {
    return {modals}
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modals)

