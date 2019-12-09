import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Button, Input, Label } from 'reactstrap';
import {login} from '../../store/auth/authActions';
import {Redirect} from 'react-router-dom';

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    submit(e) {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        if (this.props.auth._id) {
          return <Redirect to="/admin/explorations" />
        }
        return (
            <div>
                <Form onSubmit={this.submit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button>Login</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
