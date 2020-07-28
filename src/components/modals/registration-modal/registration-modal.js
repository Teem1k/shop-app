import React, { Component } from 'react';
import withService from "../../hoc/with-service";
import {connect} from "react-redux";
import {updateUser} from "../../../actions";

class RegistrationModal extends Component {

    state = {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { success,first_name,last_name,phone,email,password,confirmPassword } = this.state;
        if(success) return;

        const user = { first_name,last_name,phone,email,password,confirmPassword };
        this.props.service.checkIn( user )
            .then((data) => {
                if(data.status === -1){
                    this.setState({error: data.error})
                }
                if(data.status === 0){
                    this.setState({
                        error: false,
                        success: true
                    });
                    this.props.updateUser(user)
                }
            })
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    };

    render() {

        const { close } = this.props;
        const { first_name,last_name,phone,email,password,confirmPassword,error,success } = this.state;

        return(
            <div>
                <div className={"modal-overflow"} >
                    <form className="modal" onSubmit={this.onSubmit} onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className={"title"}>Registration</div>
                            <div className="close" onClick={close}>close</div>
                        </div>
                        <input
                            className={'input'}
                            type="text"
                            value={first_name}
                            name={"first_name"}
                            onChange={this.onChange}
                            placeholder={"First name..."}
                        />
                        <input
                            className={'input'}
                            type="text"
                            value={last_name}
                            name={"last_name"}
                            onChange={this.onChange}
                            placeholder={"Last name..."}
                        />
                        <input
                            className={'input'}
                            type="number"
                            value={phone}
                            name={"phone"}
                            onChange={this.onChange}
                            placeholder={"Phone number..."}
                        />
                        <input
                            className={"input"}
                            type="text"
                            required
                            value={email}
                            name={"email"}
                            onChange={this.onChange}
                            placeholder={"Email..."}/>
                        <input
                            className={"input"}
                            type="password"
                            required
                            value={password}
                            name={"password"}
                            onChange={this.onChange}
                            placeholder={"Password..."}/>
                        <input
                            className={"input"}
                            type="password"
                            required
                            value={confirmPassword}
                            name={"confirmPassword"}
                            onChange={this.onChange}
                            placeholder={"Confirm password..."}/>
                        <div className="modal-error">
                            {
                                error? error : ""
                            }
                        </div>

                        <div className="modal-success">
                            {
                                success? "Success registration" : ""
                            }
                        </div>
                        <div className="modal-footer">
                            <button
                                className="button"
                                type={"submit"}>Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = () => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
};

export default (withService(
        connect(mapStateToProps, mapDispatchToProps)(RegistrationModal)
    )
)