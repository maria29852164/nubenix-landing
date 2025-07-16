import type {FC} from "react";
import {BannerImage} from "../../Atoms/BannerImage";
import AWSImage from '../../../../public/images/aws.png';
import GoogleCloudImage from '../../../../public/images/google-cloud.png';
import AzureImage from '../../../../public/images/azure.png';
export type BannerProps={
    titleOne: string;
    titleTwo: string;
    description:string;
}

export const Banner:FC<BannerProps> = ({titleOne,titleTwo,description})=>{
   return <section id={'home'} className={'relative'}>
       <div  >
           <BannerImage/>

       </div>
       <div className={'absolute top-1/4  lg:left-1/4 left-4 text-white z-10'}>
           <h1 className={'lg:text-[60px] md:text-[40px]   font-bold '}>{titleOne}</h1>


           <h2 className={'lg:text-[60px]  md:text-[40px]   font-bold '}>{titleTwo}</h2>

           <p className={'text-lg max-w-[700px] pt-10'}>{description}</p>
           <div className={'flex flex-wrap items-center pt-6'}>
               <div className={'px-2 pt-4'}>
                   <img className={'lg:h-20 h-14'} src={AWSImage}/>

               </div>
      
           </div>
       </div>

   </section>
}