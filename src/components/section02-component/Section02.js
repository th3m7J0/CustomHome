import React from 'react';
import './Section02.css';
import CardBlock from "../card-block-component/CardBlock";
import ml from '../../icons/machine-learning.png';
import bc from '../../icons/bc.png';
import cb from '../../icons/chatbot.png';
import tf from '../../icons/tensorflow.png';
import ethereum from '../../icons/ethereum.png';
import exchange from '../../icons/exchange.png';
import multi from '../../icons/multi.png';
import stellar from '../../icons/stellar.png';
import solidity from '../../icons/solidity.svg';
import crypto from '../../icons/crypto.png';
import hyperledger from '../../icons/hyperledger.png';
import sc from '../../icons/smart-contract.png';
import erc from '../../icons/erc.png';
import ico from '../../icons/ico.png';




function Section02() {
    return(
        <div id="section02">
            <br/>
            <hr className='big-hr'/>
            <div className="mt-5 px col-lg-auto col-sm-12  text-center mb-5">
                <h2 className="text-white">Technologies Our Devlopers Excel</h2>
            </div>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={bc} title={"Blockchain"} />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={ml} title={"Machine Learning"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={cb} title={"ChatBot"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={tf} title={"Tensorflow"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={ethereum} title={"Ethereum"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={exchange} title={"Crypto Exchange"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={multi} title={"Multichain"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={stellar} title={"Stellar"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={solidity} title={"Solidity"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={crypto} title={"Cryptocurrency"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={hyperledger} title={"Hyperledger"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={sc} title={"Smart Contract"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={erc} title={"ERC"}/>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-4">
                        <a href="#">
                            <CardBlock image={ico} title={"ICO"}/>
                        </a>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Section02;


