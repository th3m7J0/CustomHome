import React, {Component} from 'react';
import './Section01.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

class Section01 extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
            <div className="Header">

                <a className="navbar-brand" href="#">
                    <img src="https://bridgr.co/wp-content/uploads/2018/01/Footer_BRIDGR_logowhite.png"
                         alt="BRIDGR"
                         className="mt-3 ml-5"/>
                </a>
                <section id="section01" className="container-fluid text-center">
                    <h1 className="display-4 text-responsive">
                        <span>reinvent and evolve</span>
                        <hr/>
                    </h1>
                    <p className="text-white lead text-responsive-2">Onsite and offsite software development and team extension.</p>
                    <a href="mailto:a.mecheref@esi-sba.dz" className="btn btn-outline-light btn-lg mb-3 px-5" target="_blank">
                        Contact us
                    </a>
                    <br/>

                    <AnchorLink href="#section02" ><span></span></AnchorLink>
                </section>
                <div className='my-position'>
                    <Particles params={particlesOptions}/>
                </div>

                {/*<div>*/}
                    {/*<div*/}
                        {/*style={{*/}
                            {/*position: "absolute",*/}
                            {/*top: 0,*/}
                            {/*left: 0,*/}
                            {/*width: "100%",*/}
                            {/*height: "100%"*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*<div*/}
                            {/*style={{*/}
                                {/*position: "absolute",*/}
                                {/*top: 0,*/}
                                {/*left: 0,*/}
                                {/*width: "100%",*/}
                                {/*height: "100%"*/}
                            {/*}}*/}
                        {/*>*/}
                            {/*<h1>Testing</h1>*/}
                            {/*/!* You can render <Route> and <NavTabs /> here *!/*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }

}


export default Section01;
