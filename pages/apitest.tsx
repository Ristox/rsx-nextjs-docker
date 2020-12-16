import React from 'react';

import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

const apiButton = {
  marginLeft: 10,
  marginBottom: 10,
}

class ApiTest extends React.Component {

  private hostname = 'localhost';
  private port = '3000';

   constructor(props) {
     super(props);
     this.state = {
       helloResponse: undefined,
       isLoading: false,
     };
   }

   async componentDidMount() {
     const hostname = window != null ? window.location.hostname : undefined;
     if (hostname != null) {
       this.hostname = hostname;
       this.port = window.location.port!;
     }
   }

  render() {
     return (
         <Layout>

           <h1>Api Tests</h1>

           <p style={{marginLeft: 10}}>The following API test commands are available</p>

           <div>
             <Button style={apiButton} variant="outlined" disabled={this.state['isLoading']} color="primary" onClick={this.executeHello}>
               Hello
             </Button>
             <Button style={apiButton} disabled={this.state['isLoading']} variant="outlined" color="primary" onClick={this.executeDelay1}>
               Delay 3.456 sec
             </Button>
             <Button style={apiButton} disabled={this.state['isLoading']} variant="outlined" color="primary" onClick={this.executeDelay2}>
               Delay 6.532 sec
             </Button>
             <Button style={apiButton} disabled={this.state['isLoading']} variant="outlined" color="primary" onClick={this.executeLoad1}>
               CPU Load 6.789 sec
             </Button>
             <Button style={apiButton} disabled={this.state['isLoading']} variant="outlined" color="primary" onClick={this.executeLoad2}>
               CPU Load 24.900 sec
             </Button>
           </div>

           <div style={{ paddingTop: 15, height: 70, width: 800, display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
           { this.state['isLoading']
               ? <CircularProgress />
               : ( this.state['apiResponse'] ? <p>API Response: <b>{this.state['apiResponse']}</b></p> : '') }
           </div>

         </Layout>
     );
   }

  private executeHello = async (event?: any) => {
    event?.preventDefault();
    await this.executeApiRequest('hello');
  }

  private executeDelay1 = async (event?: any) => {
    event?.preventDefault();
    await this.executeApiRequest('delay/3456');
  }

  private executeDelay2 = async (event?: any) => {
    event?.preventDefault();
    await this.executeApiRequest('delay/6532');
  }

  private executeLoad1 = async (event?: any) => {
    event?.preventDefault();
    await this.executeApiRequest('cpu-load-during/6789');
  }

  private executeLoad2 = async (event?: any) => {
    event?.preventDefault();
    await this.executeApiRequest('cpu-load-during/24900');
  }

  private async executeApiRequest(path: string = 'hello') {
    this.setState({apiResponse: undefined, isLoading: true});
    try {
      const apiResponse = await this.getRequestTo(path);
      this.setState({apiResponse, isLoading: false});
    } catch (e) {
      this.setState({apiResponse: '(ERROR)', isLoading: false});
    }
  }

  private async getRequestTo(path: string = 'hello') {
    const response = await fetch(`http://${this.hostname}:${this.port}/api/${path}`);
    return await response.text();
  }
}

export default ApiTest;
