import React from 'react'
import Modal from '../Modal/Modal'
import './NavBar.css'
const NavBar = ({ isRepo, setisRepo, AccessCode, setAccessCode }) => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <a className="navbar-brand" href="#">
                    <img src="https://png.pngitem.com/pimgs/s/113-1131059_dragon-circle-flame-fire-combustion-blue-royalty-free.png" alt="" width="30" height="30" />ORIZON</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="top_header navbar-nav m-auto justify-content-between w-50">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Technology</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Client</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`} >Login</a> */}
                            <Modal className="nav-link" isRepo={isRepo} setisRepo={setisRepo} AccessCode={AccessCode} setAccessCode={setAccessCode} />
                            {/* <button className="nav-link" type="submit" onClick="">Login</button> */}

                            {/* <button className="nav-link" onClick={() => <Modal />}>Login</button> */}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 justify-content-between">
                        <i className="fa fa-home mx-2" aria-hidden="true"></i>
                        <i className="fa fa-inbox mx-2" aria-hidden="true"></i>
                        <i className="fa fa-arrows-alt mx-2" aria-hidden="true"></i>

                    </form>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
