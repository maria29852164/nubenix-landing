import {Card, type CardProps} from "../../Atoms/Card";
import type {FC} from "react";

export interface CardSectionProps{

    cards: CardProps[]
}

export const CardSection: FC<CardSectionProps> = ({cards})=>{
    return (
        <div className={'flex flex-wrap  justify-center items-center py-10'}>
            {
                cards.length > 0 && cards.map((card,index)=><div className={'lg:w-[500px] p-5'} key={index}>
                    <Card  {...card} />
                </div>)
            }
        </div>
    )
}