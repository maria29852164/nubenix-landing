import type {CardProps} from "../../Atoms/Card";
import type {FC} from "react";
import {CardSection} from "../CardSection";
import {CustomImage, type CustomImageProps} from "../../Atoms/CustomImage";
import {useIsMobile} from "../../../hooks/useIsMobile.tsx";

export interface CardsContainerProps{
    cardsInfo: {
        sectionOne: {
            data:Array<CardProps>,
            imageSection:{
                image:CustomImageProps
            }
        },
        sectionTwo: {
            data:Array<CardProps>,
            imageSection:{
                image:CustomImageProps

            }
        },
        sectionThree: {
            data:Array<CardProps>,
            imageSection:{
                image:CustomImageProps

            }
        },
    },

}

export const CardsContainer:FC<CardsContainerProps> = ({cardsInfo}) => {
    const {isMobile} = useIsMobile()
    return (
        <section id={'services'} className={'flex flex-wrap items-center justify-evenly py-10'}>
            {Object.entries(cardsInfo).map(([key, value]) => (

               <div key={key}>
                   <div className={'flex  items-center justify-center'}>
                       {!isMobile &&  <span className={'h-0.5 bg-gray-600 w-72'}></span>
                       }
                       <CustomImage className={'h-40 mb-2 px-2'} {...value.imageSection.image}/>
                       {!isMobile &&  <span className={'h-0.5 bg-gray-600 w-72'}></span>
                       }

                   </div>

                   <CardSection  cards={value.data} />
               </div>
            ))}




        </section>
    )
}