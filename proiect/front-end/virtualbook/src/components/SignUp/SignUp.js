import React, { Component } from 'react';

import ApiService from "../../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SignUp extends Component {

  constructor(props){
          super(props);
          this.state ={
              nume: '',
              prenume: '',
              email: '',
              dataNasterii: '',
              parola: ''
          }
          this.saveUser = this.saveUser.bind(this);
      }

      saveUser = (e) => {
          e.preventDefault();
          let doc = {nume: this.state.nume, parola: this.state.parola , prenume: this.state.prenume, email: this.state.email, dataNasterii: this.state.dataNasterii};
          ApiService.addUser(doc)
              .then(res => {
                  this.setState({message : 'User added successfully.'});
                  this.props.history.push('/login');
              });
      }

      onChange = (e) =>
          this.setState({ [e.target.name]: e.target.value });

      render() {
          return(
              <div>
                  <Typography variant="h4" style={style}>Add</Typography>
                  <form style={formContainer}>

                      <TextField type="text" label="Nume" fullWidth margin="normal" name="nume" value={this.state.nume} onChange={this.onChange}/>

                      <TextField type="text" label="Prenume" fullWidth margin="normal" name="prenume" value={this.state.prenume} onChange={this.onChange}/>

                      <TextField type="password" label="Parola" fullWidth margin="normal" name="parola" value={this.state.parola} onChange={this.onChange}/>

                      <TextField type="text" label="Email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                      <TextField type="date" label="Data Nasterii" fullWidth margin="normal" name="dataNasterii" value={this.state.dataNasterii} onChange={this.onChange}/>

                      <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>
              </form>
      </div>
          );
      }
}
  const formContainer = {
      display: 'flex',
      flexFlow: 'row wrap'
  };

  const style ={
      display: 'flex',
      justifyContent: 'center'

  }


export default SignUp;