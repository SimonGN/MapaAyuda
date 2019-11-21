import React, { useState } from "react";


import { OpportunityStyle } from "./OpportunityStyle";
import ParagraphTitle from "../../styles/fontsStyles/paragraphTitle";
import ParagraphBodyRegular from "../../styles/fontsStyles/paragraphBodyRegular";
import ParagraphBodySmall from "../../styles/fontsStyles/paragraphBodySmall";


import Button from "../Button/Button";
import CardCountry from "../CardCountry/CardCountry";

import cardCountry from "../../content/cardCountry.json";
import countrys from "../../content/countrys.json"

import { i18n, withTranslation } from '../../i18n'
import Dropdown from 'react-dropdown'


const Opportunity = ({ country, photo, t }) => {
    const displayCardCountry =() => {
        return(
            cardCountry.map((card, i) => {
                const { country, photo} = card;
                return(
                    <CardCountry photo={photo} country={country}/>
                )
            })
        )
    }
    const optionCountry =() =>{
        return(
            countrys.map((country) =>{
                return (country.name)
            })
        )
    }

    
    return (
        <OpportunityStyle photo={photo} country={country}>
            <div className="textAll">
                <div className="text">
                    <ParagraphTitle>{t("intro3")}</ParagraphTitle>
                    <ParagraphBodyRegular>{t("description3")}</ParagraphBodyRegular>
                </div>
                <div className="filter">
                    <ParagraphBodySmall size="16px">{t("desplegable")}</ParagraphBodySmall>
                    <div>
                    <ParagraphBodySmall size="16px"color="#54C39F"><Dropdown options={optionCountry()}  placeholder={t("description3")} /></ParagraphBodySmall>
                    </div> 
                </div>
            </div>
            <div className="card">
                {displayCardCountry()}
            </div>
            <div className="button">
                <Button content={t("button4")} backgroundColor="#D2E4F9" color="#1C76E3" />
            </div>


        </OpportunityStyle>
    );
};

export default withTranslation("home")(Opportunity);
