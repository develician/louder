import React from 'react';
import {ListPage, NotFoundPage, AuthPage} from 'pages';
import {Switch, Route} from 'react-router-dom';
import UploadForm from './upload/UploadForm/UploadForm';
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/auth/:version" component={AuthPage}/>
                <Route path="/upload" component={UploadForm}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;
