import {type FC, useMemo, useState} from "react";
import '../Footer/footer.css'
import {useTranslation} from "react-i18next";
export const BannerService:FC = ()=>{
    const {t} = useTranslation()
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);


    const arrayCardsTranslation = useMemo(()=>(
        {
            cards:[
                {
                    image:'/images/asynka.png',
                    alt:'Asset 1',
                    title: [
                        t('servicesAppsPartOne'),
                        t('servicesAppsPartTwo'),
                    ],
                    description: t('servicesDescription')
                },
                {
                    image:'/images/aws-vpc-icon.png',
                    alt:'Asset 2',
                    title: [
                        t('designAppsPartOne'),
                        t('designAppsPartTwo'),
                    ],
                    description: t('designDescription')

                },
                {
                    image:'/images/branching-icon.png',
                    alt:'Asset 3',
                    title: [
                        t('optimizeAppsPartOne'),
                        t('optimizeAppsPartTwo'),
                    ],
                    description: t('optimizeDescription')
                }
            ]
        }
    ),[])
    return (
        <div>

            <div className={` flex flex-col justify-between items-center text-center  p-6  py-10 overflow-visible`}>


                <div className="flex justify-center gap-6 mt-8  overflow-visible items-start">
                    {
                        arrayCardsTranslation.cards.length > 0 && arrayCardsTranslation.cards.map((item, i) => (
                            <div
                                className={`relative group bg-white rounded-xl shadow-md p-6 w-[350px] text-center text-black pt-20 transition-all duration-300 ease-in-out hover:-translate-y-10 hover:z-10  ${hoveredCard === i ? 'pb-80 h-[550px]' : 'pb-10 h-[376.99px]'}`}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <img
                                    className={`w-[228px] h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                                    src={item.image}
                                    alt={item.alt}
                                />
                                <div className={`flex flex-col items-center justify-center h-full transition-all duration-300 ${hoveredCard === i ? 'pt-10' : 'pt-4'}`}>
                                    <div className={`${hoveredCard ? 'mt-64':'mt-52'} transition-all duration-300`}>
                                        <span className={`text-[40px] font-bold block transition-all duration-300 `}>{item.title[0]}</span>
                                        <span className={`text-[40px] text-[#5252a2] font-bold block `}>{item.title[1]}</span>

                                        <div className={`opacity-0 transition-all duration-300 ease-out ${ hoveredCard === i && 'opacity-100'} bg-[#65c8d6] h-[19px] w-72 mt-2`}></div>

                                        {/* Contenido extendido */}
                                        <div className={`opacity-0 translate-y-4 transition-all duration-500  w-[270px] ease-in-out   ${hoveredCard === i ? 'opacity-100 translate-y-0' : ''}`}>

                                            <p className="text-[24px] text-gray-700 pb-4 ">
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>



                                    <div className="w-full absolute bottom-4  ">
                                        <button
                                            className="bg-[#65c8d6] text-white p-2 w-full sm:w-52 rounded-3xl text-xl font-semibold"
                                            onMouseEnter={() => setHoveredCard(i)}
                                        >
                                            <div className="flex items-center justify-center">
                                                <span className="text-lg font-semibold">Más info</span>
                                                <img
                                                    className="px-2"
                                                    src="/images/plus.svg"
                                                    alt="plus"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </div>


    )
}