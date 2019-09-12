import React from 'react';
import './Footer.css';


function Footer() {
    return(
        <div id="footer" className="text-white">
                    <br/><br/><br/>
                    <hr className='big-hr'/>
                    <br/><br/><br/>
                    <div className="row container-fluid">
                        <div className="col-lg-4 col-md-12 col-sm-12 pb-3 text-center">
                            <i className="fas fa-map-marker-alt fs-50 px-3 py-3 mystyle"></i>
                            <p>San Francisco- Adress- 18 California Street 1100</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pb-3 text-center">
                            <a href="mailto:a.mecheref@esi-sba.dz"
                               target="_blank"><i className="far fa-envelope fs-50 px-3 py-3 mystyle"></i>
                            </a>
                            <p>support@company.com</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pb-3 text-center">
                            <i className="fas fa-phone fs-50 px-3 py-3 mystyle"></i>
                            <p>+ (555) 345 234343</p>
                        </div>
                    </div>
                    <div className=" pt-3 pb-3">
                        <ul className="list-inline text-center pt-4">
                            <li className="list-inline-item mx-2">
                                <a href="https://www.facebook.com/th3m7J0"
                                   target="_blank"><i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-2">
                                <a href="https://github.com/th3m7J0"
                                   target="_blank"><i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-2">
                                <a  href="https://www.linkedin.com/in/mecheref-adel-youcef-34b170168/"
                                    target="_blank"><i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-2">
                                <a href="mailto:a.mecheref@esi-sba.dz"
                                   target="_blank"><i className="fa fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center mtb">
                        <small> <hr className="small-hr"/>Copyright © 2019 . All rights reserved.</small>
                    </div>

        </div>
    )
}

export default Footer;
