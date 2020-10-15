import React from 'react';
import md5 from 'md5';
import axios from 'axios';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import './design/design.scss';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import HistoryPage from './components/historyPage/history-page.js';
import Help from './components/help/help.js';
import Footer from './components/footer/footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null,
      headers: null,
      results: {},
      loading: false,
      request: {},
      history: JSON.parse(localStorage.getItem('history')),
    }
  }

  //class method that can update state. it gets (takes in as parameters) stuff from this.props.handler on the Form itself and uses it to set state
  // handleForm = (headers, count, results) => {
  //   this.setState({count, results, headers});
  // }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  updateRequest = (request) => {

    console.log('!!!!REQ IN UPDATEREQUEST:', request);
    this.setState({ request });

    console.log(this.state.request);
  }

  updateHistory = (request) => {

    let hash = md5(JSON.stringify(request));

    console.log(hash);
    
    const history = { ...this.state.history, [hash]: request};
    
    console.log('HISTORY IN UPDATE HISTORY:', history);

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    }); 
  }

  updateResults = (headers, count, results) => {
    this.setState({headers, count, results});
  }

  fetchResults = async (request) => {

    // i think i need to drill into request
    console.log('REQEST IN FETCHRESULTUS IN APP:', request);

    this.toggleLoading();
    this.updateRequest(request);

    let response = await axios(request);

    // fetch(request.url,{method: request.method,headers: {
    //   // 'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin':'*' 
    // },
    //   body: JSON.stringify(request.data), mode:"cors"}).then(res => res.json()).then(response => {
      
    //       console.log('RESPONSE FROM AXIOS IN FETCHRESULTS:', response);
    //       // console.log('COUNT IN RESPONSE FROM AXIOS IN FETCHRESULTS:', response.data.count);
      
    //       setTimeout( () => {
    //         this.toggleLoading();
    //       }, 3000);
    //       this.updateHistory(request);
    //       // this.updateResults(response.headers, response.data.count, response.body.results);
    //     this.updateResults(request.headers, response.count, response.results ? response.results : response.result); 
    // });
  

              console.log('RESPONSE FROM AXIOS IN FETCHRESULTS:', response);
          // console.log('COUNT IN RESPONSE FROM AXIOS IN FETCHRESULTS:', response.data.count);
      
          setTimeout( () => {
            this.toggleLoading();
          }, 3000);
          this.updateHistory(request);
          // this.updateResults(response.headers, response.data.count, response.body.results);
        this.updateResults(response.headers, response.data.count ? response.data.count : 0, response); 


  }

  render(){
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Form request={this.state.request} handler={this.fetchResults} />
            <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} historyHandler={this.updateHistory} updateRequest={this.updateRequest} history={this.state.history}/>
          </Route>

          <Route path="/history">
            <HistoryPage loading={this.state.loading} results={this.state.results} fetchResults={this.fetchResults} history={this.state.history}/>
          </Route>

          <Route path="/help">
            <Help />
          </Route>

        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
  );
  }
}

export default App;