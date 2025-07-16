import type {FC} from "react";
import {CustomText} from "../../Atoms/CustomText";
import {BannerService} from "../BannerService";

export type BannerServiceContainerProps = {
    title:string
}

export const BannerServiceContainer:FC<BannerServiceContainerProps> = ({title}) => {

    return (
        <section id={'about'} className={'flex flex-col justify-center items-center'}>
            <div className={'pb-32'}>

                <CustomText className={'text-gray-900 font-semibold lg:text-4xl text-lg'} value={title}/>

            </div>

            <BannerService/>
        </section>
    )

}