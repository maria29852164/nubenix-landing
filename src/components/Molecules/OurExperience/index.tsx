import { useOurDiciplines } from "../../../hooks/useOurDiciplines.tsx";
import { CustomImage } from "../../Atoms/CustomImage";
import { motion } from "framer-motion";

export const OurExperience = () => {
    const { infoTitle, disciplines } = useOurDiciplines();

    return (
        <section className="bg-[#1a1a1a] py-20 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    <span className="text-gray-300">{infoTitle.title}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {disciplines.length > 0 &&
                        disciplines.map((discipline, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-amber-50 p-6 rounded-2xl hover:shadow-xl transition shadow-md border border-gray-700"
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
