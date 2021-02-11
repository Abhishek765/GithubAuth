import React from 'react'
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NavBar from '../NavBar/NavBar';

const Home = ({isRepo,setisRepo,AccessCode,setAccessCode}) => {
    return (
        <>
        <div className="Content">
            <NavBar isRepo ={isRepo} setisRepo={setisRepo} AccessCode={AccessCode} setAccessCode={setAccessCode}/>
            <Main />
        </div>
        <Footer className="Footer" />
        </>
    )
}

export default Home;
