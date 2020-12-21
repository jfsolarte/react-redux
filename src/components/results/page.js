import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CurrencyFormat from 'react-currency-format';
import AppBar from '../appBar';
import './style.sass';

function Page(props) {
    const {
        results,
        //goTo,
    } = props;

    const isEmpty = results.length === 0;
    function Conditions(condition){
        condition = condition.condition;  
        let textCondition = 'No Definido';
        switch (condition) {
            case "new":
                textCondition = 'Nuevo';
                break;
        
            default:
                textCondition = condition+'';
                break;
        }

        return textCondition; 
    }
    return (
        <Fragment>
            <CssBaseline />

            <AppBar />
            <div className="breadcrumb"> </div>
            <div className="results-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        No Hay Resultados
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                            <div className="card">
                                <div className="card-img">
                                    <img src={item.picture} alt={item.title} />
                                </div>
                                <div className="card-details">
                                    <div className="card-title">
                                        <p><CurrencyFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /> {item.free_shipping ? <img alt="shipping" title="Envío gratis" src="./assets/ic_shipping.png" /> : <span></span>}</p>
                                    </div>
                                    <div className="card-title-product">
                                    <Link to={{pathname: `/details/${item.id}`}}>
                                        {item.title}
                                    </Link>
                                    </div>
                                    <Conditions condition={item.condition} />
                                </div>

                            </div>
                        </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;