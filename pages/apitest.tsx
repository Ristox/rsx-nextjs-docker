import React from 'react';

import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

import Button from "@material-ui/core/Button";

class ApiTest extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       helloResponse: '',
     };
   }

   async componentDidMount() {
     const hostname = window != null ? window.location.hostname : undefined;
     if (!hostname) {
       this.setState({helloResponse: 'unknown'})
     }
     const port = window.location.port;
     const response = await fetch(`http://${hostname}:${port}/api/hello`);
     const helloResponse = await response.text();
     console.log(helloResponse);
     this.setState({helloResponse});
   }

  render() {

     return (
         <Layout>
           <h1>Api Tests</h1>
           <p>There are supposed to be some API tests here</p>
           <p>Api quick response: <b>{this.state['helloResponse']}</b></p>
           <Button variant="outlined" color="primary">Hello</Button>
         </Layout>
     );
   }
}

export default ApiTest;
