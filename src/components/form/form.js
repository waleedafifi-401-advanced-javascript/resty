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

    console.log(event.target.id);
    let method = event.target.id;
    const newRequest = { ...this.state.request, method };
    this.setState({request: newRequest});
  }
  
  handleURLChange = event => {
    let url = event.target.value;
    console.log(url);
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

    // console.log(this);

    console.log('+++++ state.req in HANDLESUBMIT FORM>JS:', this.state.request);

    this.state.request.url = this.state.request.url ? this.state.request.url : this.props.request.url;
    this.state.request.data = this.state.request.data ? this.state.request.data : this.props.request.data;

    console.log('+++++ state.req in HANDLESUBMIT FORM>JS:', this.state.request);

    this.props.handler(this.state.request);

  }


  render() {
    return (<div className="App-form">
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name="url" placeholder="http://api.url.here" defaultValue={this.props.request.url} onChange={this.handleURLChange}/>
          <button>GO!</button>
        </div>

        <div className="methods">
            <span className={`method ${this.props.request.method === 'get' ? 'active' : ''}`} id="get" onClick={this.handleMethodClick}>GET</span>
            <span className={`method ${this.props.request.method === 'post' ? 'active' : ''}`} id="post" onClick={this.handleMethodClick}>POST</span>
            <span className={`method ${this.props.request.method === 'put' ? 'active' : ''}`} id="put" onClick={this.handleMethodClick}>PUT</span>
            <span className={`method ${this.props.request.method === 'delete' ? 'active' : ''}`} id="delete" onClick={this.handleMethodClick}>DELETE</span>
        {/* <ul>
        <li><button className="method" value="get" onClick={this.handleMethodClick}>GET</button></li>
        <li><button className="method" value="post" onClick={this.handleMethodClick}>POST</button></li>
        <li><button className="method" value="put" onClick={this.handleMethodClick}>PUT</button></li>
        <li><button className="method" value="delete" onClick={this.handleMethodClick}>DELETE</button></li>
      </ul> */}
          <textarea name="data" onChange={this.handleBodyChange} defaultValue={this.state.request.data} />
          </div>
      
        {/* <input type="text" name="url" defaultValue={this.state.request.url} placeholder="URL" onChange={this.handleURLChange}/> */}
        {/* <button>Go!</button> */}
      </form>

    </div>)
  }

}



export default Form;
