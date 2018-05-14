import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AuthWrapper from 'components/auth/AuthWrapper'
import AuthForm from 'components/auth/AuthForm';
// import * as someActions from 'store/modules/some';

class MyContainer extends Component {

    render() {
        const {version} = this.props;
        return (
            <AuthWrapper>
                <AuthForm version={version}/>
            </AuthWrapper>
        );
    }
}

export default connect((state) => ({}), (dispatch) => ({}))(MyContainer);