import React from 'react';
import RegisterView from './common/Register';
import axios from 'axios';


const url = 'http://127.0.0.1:8000/api/accounts/v1/register'
const uniUrl = 'http://127.0.0.1:8000/api/accounts/v1/university'
const facultyUrl = 'http://127.0.0.1:8000/api/accounts/v1/faculty'

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'username': '',
            'contact_number':'',
            'address':'',
            'semester':'',
            'year':'',
            'faculty': '',
            'college':'',
            'university':'',
            'password':'',
            'confirm_password':'',
            'emailErrorMessage':'',
            'errorMessage':{},
            'successMessage':'',
            'isLoading': false,
            'universityList': [],
            'facultyUrl': [],
        }
    }

    componentDidMount() {
        axios.get(uniUrl)
          .then(res => {
            const universityList = res.data;
            this.setState({ universityList });
          })
        
        axios.get(facultyUrl)
          .then(res => {
            const facultyUrl = res.data;
            this.setState({ facultyUrl });
          })
        
        
    }
      
    

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'first_name'){
            this.setState({first_name: e.target.value});
        } else if (e.target.name === 'last_name'){
            this.setState({last_name: e.target.value});
        } else if (e.target.name === 'email'){
            this.setState({email: e.target.value})
        } else if (e.target.name === 'username'){
            this.setState({username: e.target.value});
        } else if (e.target.name === 'phone'){
            this.setState({contact_number: e.target.value});
        } else if (e.target.name === 'address'){
            this.setState({address: e.target.value});
        } else if (e.target.name === 'semester'){
            this.setState({semester: parseInt(e.target.value)});
        } else if (e.target.name === 'year'){
            this.setState({year: parseInt(e.target.value)});
        } else if (e.target.name === 'faculty'){
            this.setState({faculty: parseInt(e.target.value)});
        } else if (e.target.name === 'college'){
            this.setState({college: e.target.value});
        } else if (e.target.name === 'university'){
            this.setState({university: parseInt(e.target.value)});
        } else if (e.target.name === 'password'){
            this.setState({password: e.target.value});
        } else if (e.target.name === 'confirm_password'){
            this.setState({confirm_password: e.target.value});
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({isLoading: true});
        try {
            const response = await axios.post(url, {
                username: this.state.username, 
                first_name: this.state.first_name, 
                last_name: this.state.last_name,
                email: this.state.email, 
                password: this.state.password,
                confirm_password: this.state.confirm_password, profile:{
                    contact_number: this.state.contact_number,
                    address: this.state.address,
                    education: {
                        semester: this.state.semester,
                        year: this.state.year,
                        college: this.state.college,
                        faculty: this.state.faculty,
                        university: this.state.university
                    }
                }}).then(
                    res => {
                        this.setState({isLoading: false});
                        this.setState({errorMessage:{}});
                        this.setState({successMessage: res.data.message})
                    }
                );
        } catch(e){
                console.log(e.response.data)
                this.setState({isLoading: false});
                this.setState({errorMessage:e.response.data});

        }
    }

    render(){
        return (
            <div>
                <RegisterView 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                successMessage={this.state.successMessage} 
                errorMessage={this.state.errorMessage}
                isLoading={this.state.isLoading}
                universityList={this.state.universityList}
                facultyUrl={this.state.facultyUrl}
                />
            </div>
        )
    }
}

export default Register;