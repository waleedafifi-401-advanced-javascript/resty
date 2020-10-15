
import React from 'react';
// import request from 'superagent';
import './history.scss';


function History(props) {

  console.log('PROPS IN HISTORY.JS:', props.calls);

  const calls = props.calls || {};


  function loadRequest(apiCall) {
    console.log('API CALL IN LOADREQUEST IN HISTORY:', apiCall);
    //apiCall is obj with method, url, data. booyah!

    props.historyHandler(apiCall);
    apiCall.data = apiCall.data ? JSON.stringify(apiCall.data) : undefined;
    props.updateRequest(apiCall);
    // props.handler(apiCall);

  }

  return (
      <ul>
        {
          Object.keys(calls).map(key => 
            <li key={key}>
              <span className={`method ${props.calls[key].method}`}>
                {props.calls[key].method}
              </span>
              <button className="url" onClick={() => loadRequest(props.calls[key])}>
                {props.calls[key].url}
              </button>
            </li>
          )
        }
      </ul>
  )
}


export default History;