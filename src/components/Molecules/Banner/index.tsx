import type { FC } from "react";
import Person from '../../../../public/images/banner-original.svg';

export type BannerProps = {
    titleOne: string;
    titleTwo: string;
    description: string;
};

export const Banner: FC<BannerProps> = ({ titleOne, titleTwo, description }) => {
    return (
        <section
            className="relative overflow-hidden flex justify-center items-center bg-[rgba(82,82,162,0.5)]"
            id="home"
        >
            {/* Olas animadas en el fondo inferior */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-40 animate-wave"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#5252a2"
                        fillOpacity="1"
                        d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,85.3C560,64,640,64,720,85.3C800,107,880,149,960,149.3C1040,149,1120,107,1200,117.3C1280,128,1360,192,1400,224L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="z-10 text-black py-10 w-full max-w-screen-xl px-4">
                <div className="flex justify-between flex-wrap items-center gap-4">
                    <div>
                        <h1 className="lg:text-[60px] md:text-[40px] font-bold">{titleOne}</h1>
                        <h2 className="lg:text-[60px] md:text-[40px] font-bold">{titleTwo}</h2>
                        <p className="text-lg max-w-[700px] pt-10">{description}</p>
                        <div className="flex flex-wrap items-center pt-6">
                            {/* botones o CTA */}
                        </div>
                    </div>
                    <div>
                        <img className="h-[29rem]  w-auto" src={Person} alt="Banner person" />
                    </div>
                </div>
            </div>
        </section>
    );
};
