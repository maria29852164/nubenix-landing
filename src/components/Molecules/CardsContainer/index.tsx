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
        <div>
            {Object.entries(cardsInfo).map(([key, value]) => (
               <div className={'flex justify-center'} key={key}>
                   <CardSection  cards={value} />
               </div>
            ))}




        </div>
    )
}