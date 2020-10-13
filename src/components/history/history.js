
import React from 'react';
import './history.scss';


function History(props) {

  console.log('PROPS IN HISTORY.JS:', props.calls);

  const calls = props.calls || {};


  function loadRequest(apiCall) {
    console.log('API CALL IN LOADREQUEST IN HISTORY:', apiCall);
    //apiCall is obj with method, url, data. booyah!

    props.historyHandler(apiCall);
  }

  return (
    <aside className="App-history">
      <h4>Search History</h4>

      <ul>
        {
          Object.keys(calls).map(key => 

            <li key={key}>

              <span className="method-span">
                {props.calls[key].method}
              </span>
              <button className="url-button" onClick={() => loadRequest(props.calls[key])}>
                {props.calls[key].url}
              </button>
            </li>
          )
        }
      </ul>


    </aside>

  )
}


export default History;