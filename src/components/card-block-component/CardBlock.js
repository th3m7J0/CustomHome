import React from 'react';
import './CardBlock.css'

function CardBlock(props) {
    return (
        <div className="my-block">
            <div className="card text-center" >
                <div className="card-body">
                    <div className={'row'}>
                        <div className='col-3 align-self-center justify-content-center mt-0 pt-0'>
                            <div>
                                {props.isFontAwsome? <i className={`${props.image} fs-50`}></i>: <img src={props.image}></img>}
                            </div>
                        </div>
                        <div className='col-9 text-left align-self-center'>
                            <h4 className="card-text font-weight-bolder text-dark" >{props.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBlock;
