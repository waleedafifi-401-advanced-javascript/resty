import React from 'react';
import History from './history-result-page';
import Results from './result';

import ReactJson from 'react-json-view';
import { If, Then, Else, When } from '../if/if.js';

function HistoryPage(props) {

  return (
    <main>
      <If condition={props.history}>
        <Then>
        <aside>
          <History calls={props.history} fetchResults={props.fetchResults} historyHandler={props.historyHandler}/>
        </aside>

        <section>
          <Results loading={props.loading} results={ props.results }/>
        </section>
        </Then>
        <Else>
          <img className="no-data" src='https://localwala.in/site_assets/images/no_data_found.png' />
        </Else>
      </If>
    </main>

  )
}


export default HistoryPage;
