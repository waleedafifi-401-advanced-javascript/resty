import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);

    console.log('PROPS IN CONSTRUCTOR IN FORM:', props)

    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify(props.request.data) : '';


    this.state = {
      request: {
        method,
        url,
        data,
        headers: {'Content-Type': 'application/json'}
      }
    };

  }
  
  handleMethodClick = event => {
    event.preventDefault();
    let method = event.target.value;
    const newRequest = { ...this.state.request, method };
    this.setState({request: newRequest});
  }
  
  handleURLChange = event => {
    let url = event.target.value;
    const newRequest = { ...this.state.request, url};
    this.setState({request: newRequest});
  }

  handleBodyChange = event => {
    let data = event.target.value;
    console.log('DATA IN handleBodyChange IN FORM.JS:', data);
    const newRequest = {...this.state.request, data};
    this.setState({request: newRequest});
  }


  handleSubmit = async event => {

    event.preventDefault();

    console.log('+++++ state.req in HANDLESUBMIT FORM>JS:', this.state.request);

    this.props.handler(this.state.request);

  }


  render() {
    return (<div className="App-form">
      <ul>
        <li><button value="get" onClick={this.handleMethodClick}>GET</button></li>
        <li><button value="post" onClick={this.handleMethodClick}>POST</button></li>
        <li><button value="put" onClick={this.handleMethodClick}>PUT</button></li>
        <li><button value="delete" onClick={this.handleMethodClick}>DELETE</button></li>
      </ul>

      <form onSubmit={this.handleSubmit}>
      <textarea name="data" onChange={this.handleBodyChange} defaultValue={this.state.request.data} />
        <input type="text" name="url" defaultValue={this.state.request.url} placeholder="URL" onChange={this.handleURLChange}/>
        <button>Go!</button>
      </form>

    </div>)
  }

}



export default Form;
