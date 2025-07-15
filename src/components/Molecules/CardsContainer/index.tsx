import type {CardProps} from "../../Atoms/Card";
import type {FC} from "react";
import {CardSection} from "../CardSection";

export interface CardsContainerProps{
    cardsInfo: {
        sectionOne: Array<CardProps>,
        sectionTwo: Array<CardProps>,
        sectionThree: Array<CardProps>,
    }
}

export const CardsContainer:FC<CardsContainerProps> = ({cardsInfo}) => {
    return (
        <div className={'flex flex-wrap items-center justify-evenly'}>
            {Object.entries(cardsInfo).map(([key, value]) => (
               <div key={key}>
                   <CardSection  cards={value} />
               </div>
            ))}




        </div>
    )
}