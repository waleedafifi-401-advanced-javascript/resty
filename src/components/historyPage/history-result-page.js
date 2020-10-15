
import React from 'react';
import { NavLink } from "react-router-dom";
import './history-page.scss';

// import request from 'superagent';
// import './history.scss';


function History(props) {

  console.log('PROPS IN HISTORY.JS:', props.calls);

  const calls = props.calls || {};


  function loadRequest(apiCall) {
    console.log('API CALL IN LOADREQUEST IN HISTORY:', apiCall);
    //apiCall is obj with method, url, data. booyah!

    // props.historyHandler(apiCall);
    apiCall.data = apiCall.data ? JSON.stringify(apiCall.data) : undefined;

    // props.handler(apiCall);
    props.fetchResults(apiCall);
    // props.handler(apiCall);

  }

  return (
    <div>
      {
          Object.keys(calls).map(key => 
            // <div onClick={() => loadRequest(props.calls[key])} className="url">
            <div onClick={() => loadRequest(props.calls[key])} className="url">
              {/* <NavLink to='/'> */}
                {props.calls[key].method} - {props.calls[key].url}
              {/* </NavLink> */}
            </div>
          )
        }
    </div>
  )
}


export default History;