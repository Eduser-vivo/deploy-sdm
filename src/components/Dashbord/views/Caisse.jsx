import React from 'react'
import {caisseStyle} from '../../makeStyles/CaisseStyle'
import { Calculater } from '../CaisseComponent/Calculater';
import CaisseSearchBar from '../CaisseComponent/SearchBar';
import { CaisseScreen } from '../CaisseComponent/CaisseScreen';
import { CategorieProduct } from '../CaisseComponent/CategorieProduct';

export const Caisse = () => {
    const pClasses = caisseStyle();
    return (
        <div className={pClasses.root}>  
            <div className={pClasses.rigthDiv}>
               <Calculater />
               <CaisseScreen />
            </div>  

            <div className={pClasses.leftDiv}>
                <div className={pClasses.topLeft}>
                    <CaisseSearchBar />
                </div>
                <div className="container">
                    <CategorieProduct />
                </div>

                <div className={pClasses.downLeft}>
                    
                    product List
                </div>
            </div>
        </div>
    )
}


