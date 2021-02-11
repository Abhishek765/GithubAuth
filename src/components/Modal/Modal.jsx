import React, { useState } from 'react'

import GitHubLogin from 'react-github-login';
import Projects from '../Projects/Projects';
const Modal = ({ isRepo, setisRepo,AccessCode,setAccessCode }) => {

  
    const onSuccessGithub = (res) => {
        console.log(res.code);
        if (res.code) {
            setAccessCode(res.code);
            setisRepo(true);
            // return <Projects AccessCode={AccessCode} />
        }

    }

    return (
        <div>

            <GitHubLogin clientId={process.env.REACT_APP_CLIENT_ID}
                onSuccess={onSuccessGithub}
                buttonText="LOGIN"
                className="git-login"
                valid={true}
                redirectUri="http://localhost:3000/user/signin/repos"
            />
        </div>
    )
}

export default Modal;
