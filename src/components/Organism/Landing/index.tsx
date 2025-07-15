import {type FC} from "react";
import {useNavbarContent} from "../../../hooks/useNavbarContent.tsx";
import {Navbar} from "../../Molecules/Navbar";
import {useIsMobile} from "../../../hooks/useIsMobile.tsx";
import {NavbarMobile} from "../../Molecules/NavbarMobile";
import {useBannerHome} from "../../../hooks/useBannerHome.tsx";
import {Banner} from "../../Molecules/Banner";
import {useCardServiceInfo} from "../../../hooks/useCardServiceInfo.tsx";
import {CardsContainer} from "../../Molecules/CardsContainer";

export const Landing: FC = () => {
    const {navbarItems} = useNavbarContent();
    const {bannerInfo}= useBannerHome();
    const  {isMobile}= useIsMobile()
    const {cardsInfo} = useCardServiceInfo();

    return (
        <div>
            {isMobile ? <NavbarMobile links={navbarItems}/> : <Navbar links={navbarItems}/>}
            <Banner {...bannerInfo} />
                <CardsContainer cardsInfo={cardsInfo}/>

        </div>
    )
}