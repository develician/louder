import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import AuthContainer from 'containers/auth/AuthContainer';

const AuthPage = ({match}) => {
    const {version} = match.params;
    return (
        <PageTemplate>
            <AuthContainer version={version}/>
        </PageTemplate>
    );
};

export default AuthPage;