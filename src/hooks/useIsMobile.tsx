     import { useMediaQuery } from 'react-responsive';

     export const useIsMobile = () => {
         const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
         const isDesktop = useMediaQuery({ query: '(max-width: 1295px)' });
         const isDesktopMin = useMediaQuery({ query: '(min-width: 1295px)' });

         return {
           isMobile,
           isDesktop,
             isDesktopMin,
       }
     };

