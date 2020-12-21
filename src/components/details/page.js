import React, { Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import CurrencyFormat from 'react-currency-format';
//import Button from '@material-ui/core/Button';
import './style.sass';

function Page(props) {
    const {
        //goTo,
        item,
    } = props;

    function Conditions(condition) {
        condition = condition.condition;
        let textCondition = 'No Definido';
        switch (condition) {
            case "new":
                textCondition = 'Nuevo';
                break;

            default:
                textCondition = condition + '';
                break;
        }

        return textCondition;
    }

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />
            <div className="breadcrumb"> </div>
            {item ?
                <div className="details-page">
                    <div className="details-header">
                        <div className="details-img">
                            <img src={item.picture} alt="product" />
                            <div className="details-description">
                                <h2>Descripción del Producto</h2>
                                <p>{item.description} </p>
                            </div>
                        </div>
                        <div className="details-data">
                            <p className="quality"><Conditions condition={item.condition} /> - {item.sold_quantity} Vendidos</p>
                            <h2 className="title">{item.title} </h2>
                            <div className="price">
                                <CurrencyFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </div>

                            <button className="btn-buy">Comprar</button>

                        </div>
                    </div>

                </div>
                :
                <CircularProgress className="item-loader" />
            }




        </Fragment>
    );
}

export default Page;