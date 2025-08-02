import { useOurDiciplines } from "../../../hooks/useOurDiciplines.tsx";
import { CustomImage } from "../../Atoms/CustomImage";
import { motion } from "framer-motion";
import Devops from '../../../../public/images/devops-style.png'
export const OurExperience = () => {
    const { infoTitle, disciplines } = useOurDiciplines();

    return (
        <section className="relative overflow-hidden bg-[#65c8d6] pt-10 pb-20 text-white">
            <div className="absolute bottom-0 left-0 w-full">

                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-40 animate-wave"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#2a7e94"
                        fillOpacity="1"
                        d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,85.3C560,64,640,64,720,85.3C800,107,880,149,960,149.3C1040,149,1120,107,1200,117.3C1280,128,1360,192,1400,224L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className={'flex flex-col justify-center items-center'}>

                    <h2 className="text-3xl font-semibold text-center mb-12">
                        <span className="text-white">{infoTitle.title}</span>
                    </h2>
                    <div className={'bg-[#2a7e94] mb-10 rounded-full'}>
                        <img src={Devops} className={'h-52'} alt=""/>

                    </div>


                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {disciplines.length > 0 &&
                        disciplines.map((discipline, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white p-6 rounded-2xl hover:shadow-xl transition shadow-md border border-gray-700"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <CustomImage className="w-10 h-10" {...discipline.image} />
                                    <h3 className="text-xl text-black font-bold">{discipline.title}</h3>
                                </div>
                                <p className="text-black">{discipline.description}</p>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};
