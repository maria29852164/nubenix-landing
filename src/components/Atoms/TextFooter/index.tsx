import type {FC} from "react";

export interface TextFooterProps {
    footerTitleOne:string,
    footerTitleTwo:string,
    footerTitleThree:string,
    footerTitleFour:string,
    footerTitleFive:string,
    footerTitleSix:string,
}
export const TextFooter:FC<TextFooterProps> = ({footerTitleOne,footerTitleTwo,footerTitleThree,footerTitleFour,footerTitleFive}) => {

    return (
        <div>
            <span className={'text-3xl text-white'}>{footerTitleOne}</span> <br/>
            <span className={'text-3xl text-white font-bold'}>{footerTitleTwo}</span> <span className={'text-3xl text-white'}>{footerTitleThree}</span> <br/>
            <span className={'text-3xl text-white'}>{footerTitleFour}</span> <span className={'text-3xl text-white font-bold'}>{footerTitleFive}</span>

        </div>
    )
}