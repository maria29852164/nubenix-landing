import type {CardProps} from "../../Atoms/Card";
import type {FC} from "react";
import {CardSection} from "../CardSection";
import {CustomImage, type CustomImageProps} from "../../Atoms/CustomImage";

export interface CardsContainerProps{
    cardsInfo: {
        sectionOne: {
            data:Array<CardProps>,
            imageSection:CustomImageProps
        },
        sectionTwo: {
            data:Array<CardProps>,
            imageSection:CustomImageProps
        },
        sectionThree: {
            data:Array<CardProps>,
            imageSection:CustomImageProps
        },
    },

}

export const CardsContainer:FC<CardsContainerProps> = ({cardsInfo}) => {
    return (
        <div className={'flex flex-wrap items-center justify-evenly py-10'}>
            {Object.entries(cardsInfo).map(([key, value]) => (

               <div key={key}>
                   <div className={'flex  items-center justify-center'}>
                       <span className={'h-0.5 bg-gray-600 w-72'}></span>
                       <CustomImage className={'h-40 mb-2'} {...value.imageSection.image}/>
                       <span className={'h-0.5 bg-gray-600 w-72'}></span>


                   </div>

                   <CardSection  cards={value.data} />
               </div>
            ))}




        </div>
    )
}