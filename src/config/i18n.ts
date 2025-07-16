import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "bannerTitleOne": "We work side by side",
            "bannerTitleTwo": "to grow your business",
            "bannerDescription": "We offer IT services that enhance and transform your business, adapting it to new challenges to remain competitive in the market.",
            "menuHome": "Home",
            "menuHomeLink": "#",
            "menuServices": "Services",
            "menuServicesLink": "#",
            "menuContactUs": "Contact Us",
            "menuAbout": "About Us",
            "menuAboutLink": "#",
            "cardCloudTitle": "Cloud Onboarding",
            "cardCloudDescription": "Strategy and implementation of cloud best practices",
            "cardMigrationTitle": "Cloud Migration Services",
            "cardMigrationDescription": "The success of your business is in the cloud. We securely migrate all your data.",
            "cardDevopsTitle": "DevOps",
            "cardDevopsDescription": "Improve the quality and speed of your deployments with support from our team.",
            "cardDevSecOpsTitle": "DevSecOps",
            "cardDevSecOpsDescription": "Automate the security of your critical applications before deployment",
            "cardSupportServiceTitle": "Support Service",
            "cardSupportServiceDescription": "We manage and support your cloud applications.",
            "cardContractTitle": "Outsourcing",
            "cardContractDescription": "Outsource a custom team of specialists to ensure your business runs smoothly.",
            "cardFinOpsTitle": "FinOps",
            "cardFinOpsDescription": "Reduce cloud costs and increase performance",
            "cardReviewCloudTitle": "Cloud Architecture Review",
            "cardReviewCloudDescription": "Align your cloud environment with market best practices",
            "cardSoCaaSTitle": "SoCaaS",
            "cardSoCaaSDescription": "Critical security operations",
            "sectionExperienceTitle": "Over 10 years of experience",
            "sectionExperienceDescription": "We are strategic partners of our clients, supporting their growth and development, increasing productivity, and reducing costs through technology.",
            "cardServicesOneTitle": "24/7 Monitoring and Support",
            "cardServiceOneDescription": "Proactive infrastructure monitoring and technical support services, 365 days a year.",
            "cardServiceTwoTitle": "Specialized Engineers",
            "cardServiceTwoDescription": "We have a group of highly certified professionals including specialists in Azure, GCP, AWS environments with broad experience in DevOps, DevSecOps, Cloud Engineers, Networking, and Security roles.",
            "cardServiceThreeTitle": "Interactive Tools",
            "cardServiceThreeDescription": "Visualization, reporting, and 24/7 tracking tools for your contracted services",

            "footerTitleOne": "Don't have any idea what",
            "footerTitleTwo": "your website needs?",
            "footerTitleThree": "Contact us",
            "footerTitleFour": "right now",
            "footerTitleFive": "and let us",
            "footerTitleSix": "advise you",
            "send": "Send",

            "facebook": "Facebook",
            "instagram": "Instagram",
            "whatsapp": "Whatsapp",
            "gmail": "Gmail",
            "privacy": "Privacy Policy",
            "terms": "Terms of Service",
            "cookies": "Cookie Settings",

            "titleServicePartOne": "Custom",
            "titleServicePartTwo": "services",
            "titleServicePartThree": "to",
            "titleServicePartFour": "Boost",
            "titleServicePartFive": "Your Business",
            "titleServiceClients":"Who are our clients?",

            "servicesAppsPartOne": "Your Code",
            "servicesAppsPartTwo": "Scalable Apps",
            "servicesDescription": "Optimized ASynka's AWS cloud infrastructure, ensuring secure connectivity between on-premises and cloud environments.",
            "designAppsPartOne": "Infra as Code",
            "designAppsPartTwo": "AWS Edge",
            "designDescription": "We transform your ideas into functional websites designed to stand out in the digital world.",
            "optimizeAppsPartOne": "Automated",
            "optimizeAppsPartTwo": "Observability",
            "optimizeDescription": "Boost your sales and customer relationships - discover how our CRM simplifies your business.",
            "membersTitle":"A world-class team redefining collaboration for real-world impact.",

            "strategyTitle": "Strategy",
            "strategyDescription": "Fueling growth, crafting winning roadmaps, and securing a market edge—all begin with a powerful strategy. (And that's exactly where we begin).",
            "transformationTitle": "Transformation",
            "transformationDescription": "Redefining workflows and empowering your team to build an agile, growth-driven culture.",
            "designTitle": "Design",
            "designDescriptionProcess": "Simplifying ideas into their purest, most compelling form—turning business challenges into elegant solutions.",
            "technologyTitle": "Technology",
            "technologyDescription": "Future-proofing your brand: from vision to execution, with expert guidance across platforms and cutting-edge tech."

        }
    },

    es:{
        translation: {
            "Welcome to React": "Bienvenido a react con react-i18next",
            "bannerTitleOne":"Trabajamos codo a codo",
            "bannerTitleTwo":"en el crecimiento de tu empresa",
            "bannerDescription":"Ofrecemos servicios de TI que potencian y transforman su negocio adaptándolo a los nuevos retos para mantenerse competitivo en el mercado.",
            "menuHome":"Hogar",
            "menuHomeLink":"#",
            "menuServices":"Servicios",
            "menuServicesLink":"#",
            "menuContactUs":"Contáctanos",
            "menuContactUsLink":"#",
            "menuAbout":"Nosotros",
            "menuAboutLink":"#",
            "cardCloudTitle":"Incorporación a la nube",
            "cardCloudDescription":"Estrategia e implementación de mejores prácticas en la nube",
            "cardMigrationTitle":"Cloud Migration Services",
            "cardMigrationDescription":"El éxito de tu negocio está en la nube, migramos de forma segura toda tu información",
            "cardDevopsTitle":"Devops",
            "cardDevopsDescription":"Mejore la calidad y velocidad de sus implementaciones con el apoyo de nuestro equipo.",
            "cardDevSecOpsTitle":"DevSecOps",
            "cardDevSecOpsDescription":"Automatice la seguridad de sus aplicaciones críticas antes de la implementación",
            "cardSupportServiceTitle":"Servicio de soporte",
            "cardSupportServiceDescription":"Realizamos la administración y soporte de tus aplicaciones en la nube.",
            "cardContractTitle":"Subcontratación",
            "cardContractDescription":"Subcontrata un equipo personalizado de especialistas para garantizar el funcionamiento de tu negocio.",
            "cardFinOpsTitle":"FinOps",
            "cardFinOpsDescription":"Reducir los costos de la nube y aumentar el rendimiento",
            "cardReviewCloudTitle":"Revisión de la arquitectura de la nube",
            "cardReviewCloudDescription":"Alinee su entorno de nube con las mejores prácticas del mercado",
            "cardSoCaaSTitle":"SoCaaS",
            "cardSoCaaSDescription":"Operaciones de seguridad críticas",
            "sectionExperienceTitle":"Más de 10 años de experiencia",
            "sectionExperienceDescription":"Ser socios estratégicos de nuestros clientes, acompañando su crecimiento y desarrollo, incrementando la productividad y reduciendo costos a través de la tecnología.",
            "cardServicesOneTitle":"Monitoreo y soporte 24/7",
            "cardServiceOneDescription":"Servicios de monitoreo proactivo de infraestructura y soporte técnico los 365 días del año.",
            "cardServiceTwoTitle":"Ingenieros especializados",
            "cardServiceTwoDescription":"Contamos con un grupo de profesionales altamente certificados y está formado por ingenieros especialistas en diversas tecnologías como Azure, GCP, entornos AWS con vasta experiencia en roles DevOps, DevSecOps, Ingenieros de Nube, Redes y seguridad.",
            "cardServiceThreeTitle":"Herramientas interactivas",
            "cardServiceThreeDescription":"Herramientas de visualización, informes y seguimiento las 24 horas de sus servicios contratados",
            "footerTitleOne": "¿No tienes idea de que",
            "footerTitleTwo": "necesita tu sitio web?",
            "footerTitleThree": "Contáctanos",
            "footerTitleFour": "ahora mismo",
            "footerTitleFive": "y déjanos",
            "footerTitleSix": "asesorarte",
            "send": "Enviar",

            "facebook": "Facebook",
            "instagram": "Instagram",
            "whatsapp": "Whatsapp",
            "gmail": "Gmail",
            "privacy": "Política de Privacidad",
            "terms": "Términos del Servicio",
            "cookies": "Configuración de Cookies",

            "titleServicePartOne": "Servicios a",
            "titleServicePartTwo": "medida",
            "titleServicePartThree": "para",
            "titleServicePartFour": "Potenciar",
            "titleServicePartFive": "tu Negocio",
            "titleServiceClients":"¿Quienes son nuestros clientes?",

            "servicesAppsPartOne": "Tus ideas en",
            "servicesAppsPartTwo": "Apps Escalables",
            "servicesDescription": "Optimicé la infraestructura cloud de ASynka en AWS, asegurando conectividad segura entre entornos locales y la nube.",
            "designAppsPartOne": "nfraestructura como",
            "designAppsPartTwo": "Código AWS",
            "designDescription": "En ASynka brindé acompañamiento estratégico en la implementación y optimización de su infraestructura de red en la nube, utilizando servicios de AWS. Mi trabajo se centró en garantizar una conectividad segura y escalable entre sus entornos locales y la nube, facilitando la integración de sistemas, el acceso eficiente a los recursos y la estabilidad operativa de su plataforma tecnológica.",
            "optimizeAppsPartOne": "Observabilidad",
            "optimizeAppsPartTwo": "Automatizada",
            "optimizeDescription": "Potencia tus ventas y la relación con tus clientes, descubre cómo nuestro CRM simplifica tu negocio.",

            "membersTitle":"Excelencia sin fronteras: un equipo que redefine el éxito con estrategias reales.",

            "strategyTitle": "Estrategia",
            "strategyDescription": "Impulsar el crecimiento, diseñar planes ganadores y dominar el mercado comienza con una estrategia sólida. (Ahí es donde empezamos nosotros).",
            "transformationTitle": "Transformación",
            "transformationDescription": "Reinventando procesos y liberando el potencial de tu equipo para crear una cultura ágil orientada al crecimiento.",
            "designTitle": "Diseño",
            "designDescriptionProcess": "Refinamos ideas hasta su esencia más impactante, resolviendo tus desafíos empresariales con soluciones elegantes.",
            "technologyTitle": "Tecnología",
            "technologyDescription": "Preparando tu marca para el futuro: desde el concepto hasta la implementación, con expertise en tecnologías líderes."


        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;