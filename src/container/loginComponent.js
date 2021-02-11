//core
import * as React from 'react';
import { connect } from 'react-redux';
import { Spinner } from "react-bootstrap";


import { Toster } from '../component/alert';
import { getPeople, setLoginUser } from '../action/LoginActions';
import Login from '../component/login';
import "./styles.css";
import { PEOPLE_API_ERROR, LoginData } from '../Constants';

//Login contaniner
class LoginComponent extends React.Component {

    componentDidMount() {
        this.props.getPeople();
    }


    handleLogin = (params) => {
        const { userName, password } = params;
        if (userName == LoginData.user && password == LoginData.password) {
            //Login successfull
            //Then load first people details
            if (this.props.people && this.props.people.length > 0) {
                this.props.setLoginUser(this.props.people[0]);
                Toster.success('Login Sucessfully!');
                this.props.history.push("/search");
            } else {
                Toster.error(PEOPLE_API_ERROR);
                Toster.error('Reload and try again.');
            }
        } else {
            //Username or password is wrong.
            Toster.error('User name or password is wrong.');
        }
    }

    renderLoader = () => {
        if (this.props.loading) {
            return (<div className="loader-contaner"><Spinner animation="border" variant="primary" /></div>);
        }
        return null;
    }

    render() {
        return (
            <div class="card login">
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    {this.renderLoader()}
                    {!this.props.loading && <Login onLogin={this.handleLogin} />}
                </div>
            </div>
        );
    }
}



const mapStateToProps = ({ login }) => {
    const { people, message, loading } = login;
    return { people, message, loading };
};

export default connect(mapStateToProps, { getPeople, setLoginUser })(LoginComponent);





