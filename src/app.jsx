import React, {Fragment} from 'react';

import StatelessFunction from './stateless-function';


const App = () => (
    <Fragment>
        <StatelessFunction name="World" />
        <StatelessFunction />
    </Fragment>
);

export default App;