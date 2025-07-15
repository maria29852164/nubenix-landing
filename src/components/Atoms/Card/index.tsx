import type {FC} from "react";
import {CustomImage, type CustomImageProps} from "../CustomImage";

export type CardProps={
    title:string;
    description:string;
    image:CustomImageProps;
}


export const Card: FC<CardProps> = ({title, description, image}) => {

  return (

        <div className={' max-w-[400px]'}>
            <div className={'flex flex-col  items-center'}>
                <CustomImage {...image} className={'h-20 w-20'}/>

                <h1 className={'text-lg font-semibold pt-2'}>{title}</h1>
                <p className={'max-w-[300px] pt-2 text-center'}>{description}</p>
            </div>


        </div>
    )
}