import React from 'react';

import './style/base.scss';
import './style/header.scss';
import './style/form.scss';
import './style/results.scss';
import './style/footer.scss';


import Header from './components/header';
import Form from './components/form';
import Results from './components/results';
import Footer from './components/footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      requestData:null,
      resultsIn: null,
    };
  }

  getResults = (requestData) => {
    this.setState({ requestData, resultsIn:'results' })
  }

  render = () => (
    <div className="App">
      <Header />
      <main>
        <Form handleInput={this.getResults}  />
        <Results data={this.state.requestData} resultsIn={this.state.resultsIn}/>
      </main>
      <Footer />
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//       <Form />
//       </main>
//       <Footer />
//     </div>
//   );
// }

export default App;