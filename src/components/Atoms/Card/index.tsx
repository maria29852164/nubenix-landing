import type {FC} from "react";
import {CustomImage, type CustomImageProps} from "../CustomImage";

export type CardProps={
    title:string;
    description:string;
    image:CustomImageProps;
}


export const Card: FC<CardProps> = ({title, description, image}) => {
    return (

        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <CustomImage {...image}/>
        </div>
    )
}