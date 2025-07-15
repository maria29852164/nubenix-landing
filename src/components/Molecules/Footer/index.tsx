import React, {FC, useTransition} from "react";
import './footer.css'
import {useTranslation} from "react-i18next";
import {TextFooter, type TextFooterProps} from "../../Atoms/TextFooter";

export interface FooterProps {
    footerInfo:TextFooterProps
}
export const Footer:FC<FooterProps> = ({footerInfo})=>{
    const {t} = useTranslation()
    return (
        <div>
            <div className={'gradientFooter h-0.5vh '}>
                <div className={'pl-10 flex flex-wrap justify-between'}>
                    <div className={'flex flex-col space-y-28  mx-4  py-10'}>


                        <div className={'pt-2'}>
                            <div className={'text-left'}>
                                <TextFooter {...footerInfo} />
                            </div>
                        </div>
                        <div className="relative mb-6">

                            <input type="text" id="input-group-1"
                                   className="bg-gray-50 px-5 py-7  rounded-full border border-gray-300 text-gray-900 text-[24px]  focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="name@example.com"/>
                            <div>
                                <button
                                    className={'bg-black h-[44px] w-[108px] rounded-3xl text-[24px] text-white  absolute right-4 inset-y-7'}>    {t("send")}</button>
                            </div>

                        </div>

                        <div className={' pt-10 flex flex-row pb-2'}>
                            <li>
                                <a className={'text-white text-md'} href="#">
                                    {t('privacy')}
                                </a>
                            </li>
                            <li>
                                <a className={'text-white text-md'} href="#">
                                    {t('terms')}
                                </a>
                            </li>
                            <li>
                                <a className={'text-white text-md'} href="#">
                                    {t('cookies')}
                                </a>
                            </li>
                        </div>


                    </div>
                    <div className={'flex justify-center pr-40 pt-12 '}>
                        <div className={'flex flex-col items-center '}>
                            <div className={'py-5'}>
                                <img className={'w-44'} src="/images/logo.png" alt=""/>
                            </div>
                            <button
                                className={'bg-[#9CC454] text-white font-semibold rounded-full text-[19px] p-2.5 min-w-[180.99px]'}>    {t("linkContact")}</button>


                            <ul className={'py-10  text-left flex flex-col items-start  space-y-3'}>
                                <li className={'flex  justify-center items-center'}>
                                    <div className={'pr-3'}>
                                        <img className={'size-[46px] '} src="/images/facebook-white.png" alt=""/>

                                    </div>

                                    <a className={'text-white text-[32px]'} href="#">

                                        {t('facebook')}
                                    </a>
                                </li>
                                <li  className={'flex  justify-center items-center'}>
                                    <div className={'pr-3'}>
                                        <img className={'size-[46px] '} src="/images/instagram_white.png" alt=""/>

                                    </div>
                                    <a className={'text-white text-[32px]'} href="#">
                                        {t('instagram')}
                                    </a>
                                </li>
                                <li  className={'flex  justify-center items-center'}>
                                    <div className={'pr-3'}>
                                        <img className={'size-[46px] '} src="/images/whatsapp-white.png" alt=""/>

                                    </div>
                                    <a className={'text-white text-[32px]'} href="#">
                                        {t('whatsapp')}
                                    </a>
                                </li>
                                <li  className={'flex  justify-center items-center'}>
                                    <div className={'pr-3'}>
                                        <img className={'size-[46px] '} src="/images/gmail-white.png" alt=""/>

                                    </div>
                                    <a className={'text-white text-[32px]'} href="#">
                                        {t('gmail')}
                                    </a>
                                </li>

                            </ul>


                        </div>
                    </div>





                </div>

            </div>

        </div>
    )
}