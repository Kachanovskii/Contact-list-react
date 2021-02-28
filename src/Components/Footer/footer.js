import React, {Fragment} from "react";

const Footer = () => {
    return (
        <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-dark flex-column bg-dark">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" aria-current="page" href="/add-contact">Add new contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='container-fluid footer-bottom justify-content-center '>
                                    <a className="navbar-brand" href="/">Contact List</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
export default Footer;
