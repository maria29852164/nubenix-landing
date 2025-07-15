import {Card, type CardProps} from "../../Atoms/Card";
import type {FC} from "react";

export interface CardSectionProps{

    cards: CardProps[]
}

export const CardSection: FC<CardSectionProps> = ({cards})=>{
    return (
        <div>
            {
                cards.length > 0 && cards.map((card,index)=><Card key={index} {...card} />)
            }
        </div>
    )
}