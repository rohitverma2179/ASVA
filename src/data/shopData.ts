// import aswaGlassBottle from '../assets/productimg/asva_glass_bottle.png';

// Glass Bottle Images
import A_1 from '../assets/shop_img/A/gift_1/gift_shop.png';
// import A_2 from '../assets/shop_img/A/750ml_Glass_Bottle_(Single)/A_2.jpg';
import A_3 from '../assets/shop_img/A/750ml_Glass_Bottle_(Pack_of_6)/A_3.jpg';
import A_4 from '../assets/shop_img/A/750ml_Glass_Bottle_(Pack_of_12)/A_4.jpg';

// ------------------------
import A_2_2 from '../assets/shop_img/A/750ml_Glass_Bottle_(Single)/A_2_2.png';


// PET Bottle Images
import B_1 from '../assets/shop_img/B/200ml_Bottle_(Pack_of_24)/B_1.jpg';
import B_2 from '../assets/shop_img/B/250ml_Bottle/B_2.jpg';
import B_3 from '../assets/shop_img/B/500ml_Bottle/B_3.jpg';
import B_4 from '../assets/shop_img/B/1L_Bottle/B_4.jpeg';

// Jar & Can Images
import C_1 from '../assets/shop_img/C/5L/C_1.jpg';
import C_2 from '../assets/shop_img/C/10L/C_2.jpg';
import C_3 from '../assets/shop_img/C/DP_20L/C_3.jpg';
import C_4 from '../assets/shop_img/C/AL_20L/C_4.jpg';

// Filter Images
import F_1 from '../assets/shop_img/F/HOME_Series/F_1.jpg';
import F_2 from '../assets/shop_img/F/HOME_Series/F_1_2.jpg';
import F_3 from '../assets/shop_img/F/HOME_Series/F_1_3.jpg';

// Accessory Images
import H_1 from '../assets/shop_img/H/Jar_Stand/H_1.jpg';
import H_2 from '../assets/shop_img/H/Manual_Pump/H_2.jpg';
import H_3 from '../assets/shop_img/H/Dispenser_Tap/H_3.jpg';

// Corporate Images
import I_1 from '../assets/shop_img/I/Event_Pack/I_1.jpg';
import I_2 from '../assets/shop_img/I/Corporate_Pantry_Pack/I_2.jpg';

// Machine Image
import aswaMachine from '../assets/productimg/alkaline_water.jpg';

export interface Product {
    id: string;
    title: string;
    type: string;
    image: string;
    badges: string[];
    // date?: string;
    author?: string;
    price: string;
    description: string;
    subDescription: string;
    // disclaimer: string;

    tagline: string;
    keyFeatures: string[];

}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Gift Tube)',
        type: 'Bottle',
        image: A_1,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹299 | Offer ₹249',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>750ml</b> bottle and offered in a <b> Gift Tube </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 750ml </b> with <b> Gift Tube </b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
        
    },
    {
        id: '2',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Single)',
        type: 'Bottle',
        image: A_2_2,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹199 | Offer ₹169',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>750ml</b> bottle and offered in a <b> Single </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 750ml </b> with <b> Single </b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],

    },
    {
        id: '3',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Pack of 6)',
        type: 'Bottle',
        image: A_3,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹1,099 | Offer ₹999',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>750ml</b> bottle and offered in a <b> Pack of 6 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 750ml </b> with <b>Pack of 6</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '4',
        title: 'ASVA Alkaline Water – 750ml Glass Bottle (Pack of 12)',
        type: 'Bottle',
        image: A_4,
        badges: ['750ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹1,999 | Offer ₹1,799',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>750ml</b> bottle and offered in a <b> Pack of 12 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 750ml </b> with <b>Pack of 12</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],

    },
    // PET Bottles
    {
        id: '5',
        title: 'ASVA Alkaline Water – 200ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: B_1,
        badges: ['200ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹499',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>200ml</b> bottle and offered in a <b> Pack of 24 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 200ml </b> with <b>Pack of 24</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '6',
        title: 'ASVA Alkaline Water – 250ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: B_2,
        badges: ['250ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹649 | Offer ₹549',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>250ml</b> bottle and offered in a <b> Pack of 24 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 250ml </b> with <b>Pack of 24</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '7',
        title: 'ASVA Alkaline Water – 500ml Bottle (Pack of 24)',
        type: 'Bottle',
        image: B_3,
        badges: ['500ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹899 | Offer ₹799',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>500ml</b> bottle and offered in a <b> Pack of 24 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 500ml </b> with <b>Pack of 24</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '8',
        title: 'ASVA Alkaline Water – 1L Bottle (Pack of 12)',
        type: 'Bottle',
        image: B_4,
        badges: ['1L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹549',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>1L</b> bottle and offered in a <b> Pack of 12 </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 1L </b> with <b>Pack of 12</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    // Jars & Cans
    {
        id: '9',
        title: 'ASVA Alkaline Water – 5L Can (Single)',
        type: 'Bottle',
        image: C_1,
        badges: ['5L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹99 | Offer ₹89',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b>5L</b> bottle and offered in a <b> Single </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 5L </b> with <b>Single</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '10',
        title: 'ASVA Alkaline Water – 10L Can (Single)',
        type: 'Bottle',
        image: C_2,
        badges: ['10L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹149 | Offer ₹129',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b> 10L </b> bottle and offered in a <b> Single </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 10L </b> with <b>Single</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '11',
        title: 'ASVA Alkaline Water – 20L Refill Jar (Deposit System)',
        type: 'Bottle',
        image: C_4,
        badges: ['20L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹90 | Offer ₹80 (per refill)',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b> 20L </b> Refill Jar and offered in a <b> Deposit System </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 20L </b> with <b>Deposit System</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],
    },
    {
        id: '12',
        title: 'ASVA 20L Jar Deposit (Refundable Security)',
        type: 'Bottle',
        image: C_3,
        badges: ['20L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹300 | Offer ₹300',
        description: 'Premium alkaline drinking water crafted to provide clean, balanced hydration for everyday wellness and professional use. Carefully processed to maintain optimal pH levels, it delivers a smooth and refreshing taste suitable for daily consumption as well as premium serving.',
        subDescription: 'This variant is available in a <b> 20L </b> Jar Deposit and offered in a <b> Refundable Security </b> format. Designed with a standardized, high quality packaging system, it ensures consistent brand presentation across all sizes while allowing flexibility based on consumption needs. Suitable for retail, hospitality, corporate environments, events, and lifestyle use.',
        tagline: 'Pure Alkaline Hydration Crafted for Everyday Balance and Refreshment',
        keyFeatures: [
            'Alkaline pH balanced for smooth and refreshing hydration',
            "Clean taste suitable for daily and premium consumption",
            'Hygienic food grade packaging for safe consumption',
            'Available in <b> 20L </b> with <b>Refundable Security</b> options',
            "Standardized premium design across all size variants",
            "Ideal for hospitality, offices, meetings, events, and retail",
        ],

    },
    // Machines
    {
        id: '13',
        title: 'ASVA Portable Alkaline Ionizer – HOME Series (Countertop)',
        type: 'Machine',
        image: aswaMachine,
        badges: ["Home"],
        author: 'ASVA Official Store',
        price: 'MRP ₹18,999 | Offer ₹16,999',
        description: 'The ASVA Portable Alkaline Ionizer from the HOME Series is designed to deliver clean, pH balanced drinking water for daily health and wellness. Built for convenience and performance, this countertop system uses advanced filtration and alkalizing technology to enhance water quality while maintaining a smooth, refreshing taste.',
        subDescription: 'Designed for home use, this model features a Portable Alkaline Ionizer – HOME Series and comes in a compact <b>Countertop</b> configuration, making it easy to install and operate without complex setup. With a focus on reliability, consistency, and ease of use, it offers a practical solution for families seeking continuous alkaline hydration.',
        tagline: 'Advanced Alkaline Water Technology for Everyday Home Wellness',
        keyFeatures: [
            'Produces alkaline pH balanced drinking water for daily use',
            'Advanced filtration and alkalizing technology',
            'Compact and portable countertop design',
            'Designed for Portable Alkaline Ionizer – HOME Series',
            'Easy to install, operate, and maintain',
            'Ideal for homes and small family usage',
        ],
    },
    {
        id: '14',
        title: 'ASVA Portable Alkaline Ionizer – PRO Series (High Usage)',
        type: 'Machine',
        image: aswaMachine,
        badges: ['Pro'],
        author: 'ASVA Official Store',
        price: 'MRP ₹28,999 | Offer ₹25,999',

        description: 'The ASVA Portable Alkaline Ionizer from the PRO Series is designed to deliver clean, pH balanced drinking water for continuous daily use. Built for high usage environments, this system uses advanced filtration and alkalizing technology to enhance water quality while delivering a smooth and refreshing taste.',

        subDescription: 'Designed for demanding usage, this PRO Series ionizer comes in a compact yet powerful <b>High Usage</b> configuration, making it suitable for homes with higher consumption, offices, and professional environments. Easy to install and operate, it ensures reliable and consistent alkaline hydration without complex setup.',

        tagline: 'Advanced Alkaline Water Technology Designed for Continuous Daily Wellness',

        keyFeatures: [
            'Produces alkaline pH balanced drinking water for high usage needs',
            'Advanced filtration and alkalizing technology',
            'Compact yet powerful high usage design',
            'Suitable for homes, offices, and professional environments',
            'Easy to install, operate, and maintain',
            'Designed for consistent performance and long term use',
        ],

    },
    {
        id: '15',
        title: 'ASVA Portable Alkaline Ionizer – PRIME Series (Premium)',
        type: 'Machine',
        image: aswaMachine,
        badges: ['Prime'],
        author: 'ASVA Official Store',
        price: 'MRP ₹39,999 | Offer ₹34,999',
        description: 'The ASVA Portable Alkaline Ionizer from the PRIME Series is designed for those who seek premium alkaline hydration with refined performance. Built with advanced filtration and alkalizing technology, it delivers clean, pH balanced drinking water with a smooth and superior taste for everyday wellness.',

        subDescription: 'Designed for premium home and lifestyle use, the PRIME Series features an elegant and compact <b>Premium</b> configuration that blends seamlessly into modern kitchens and spaces. Easy to install and operate, it offers reliable alkaline water with consistent quality and minimal maintenance.',

        tagline: 'Premium Alkaline Water Technology for Refined Everyday Living',

        keyFeatures: [
            'Produces premium alkaline pH balanced drinking water',
            'Advanced filtration and alkalizing technology',
            'Elegant and compact premium design',
            'Designed for consistent performance and refined usage',
            'Easy to install, operate, and maintain',
            'Ideal for premium homes and lifestyle environments',
        ],
    },
    // Filter Replacement Sets
    {
        id: '16',
        title: 'ASVA Filter Set – HOME Series (Replacement Pack)',
        type: 'Accessory',
        image: F_1,
        badges: ["Home"],
        author: 'ASVA Official Store',
        price: 'MRP ₹2,499 | Offer ₹2,199',
        description: 'The ASVA Filter Set for the HOME Series is designed to maintain the performance and water quality of your alkaline ionizer. Engineered for effective filtration, it helps remove impurities while supporting consistent alkaline water output for everyday home use.',

        subDescription: 'This <b>Replacement Pack</b> is specifically compatible with ASVA <b>HOME Series</b> alkaline ionizers and is intended for routine filter replacement based on usage and water quality. Easy to install and reliable in performance, it ensures uninterrupted access to clean and balanced drinking water.',

        tagline: 'Reliable Filtration for Consistent Alkaline Water Quality',

        keyFeatures: [
            'Designed for ASVA <b>HOME Series</b> alkaline ionizers',
            'Helps maintain clean and pH balanced drinking water',
            'Effective filtration for everyday household use',
            'Easy to replace with simple installation process',
            'Supports consistent performance and water quality',
            'Ideal for routine maintenance and long term use',
        ],
    },
    {
        id: '17',
        title: 'ASVA Filter Set – PRO Series (Replacement Pack)',
        type: 'Accessory',
        image: F_2,
        badges: ["Pro"],
        author: 'ASVA Official Store',
        price: 'MRP ₹3,499 | Offer ₹3,199',

        description: 'The ASVA Filter Set for the PRO Series is engineered to support high usage alkaline ionizers by maintaining consistent filtration performance and water quality. Designed for demanding environments, it helps remove impurities while ensuring reliable alkaline water output.',

        subDescription: 'This <b> replacement pack </b> is specifically compatible with ASVA <b> PRO Series </b> alkaline ionizers and is intended for routine replacement in high usage conditions. Built for durability and efficiency, it ensures uninterrupted access to clean, pH balanced drinking water in professional and heavy use environments.',

        tagline: 'High Performance Filtration for Continuous Alkaline Water Use',

        keyFeatures: [
            'Designed for ASVA <b> PRO Series </b> alkaline ionizers',
            'Supports high usage and continuous water output',
            'Advanced filtration for improved water quality',
            'Easy to replace with a secure installation process',
            'Maintains consistent alkaline performance',
            'Ideal for offices, commercial spaces, and high consumption homes',
        ],
    },
    {
        id: '18',
        title: 'ASVA Filter Set – PRIME Series (Replacement Pack)',
        type: 'Accessory',
        image: F_3,
        badges: ["Prime"],
        author: 'ASVA Official Store',
        price: 'MRP ₹4,499 | Offer ₹3,999',
        description: 'The ASVA Filter Set for the PRIME Series is designed to preserve the premium performance and refined water quality of your alkaline ionizer. Engineered with high efficiency filtration, it helps deliver consistently clean, pH balanced drinking water for everyday premium use.',

        subDescription: 'This <b> replacement pack </b> is specifically compatible with ASVA <b> PRIME Series </b> alkaline ionizers and is intended for routine filter replacement to maintain optimal performance. Designed for reliability and ease of installation, it supports uninterrupted access to high quality alkaline water in premium home and lifestyle environments.',

        tagline: 'Premium Filtration Designed to Maintain Superior Alkaline Water Quality',

        keyFeatures: [
            'Designed for ASVA <b> PRIME Series </b> alkaline ionizers',
            'High efficiency filtration for premium water quality',
            'Helps maintain clean and pH balanced drinking water',
            'Easy to replace with a simple installation process',
            'Supports consistent performance and refined usage',
            'Ideal for premium homes and lifestyle environments',
        ],
    },
    // Accessories
    {
        id: '19',
        title: 'ASVA 20L Jar Stand (Steel)',
        type: 'Accessory',
        image: H_1,
        badges: ["Stand"],
        author: 'ASVA Official Store',
        price: 'MRP ₹999 | Offer ₹899',
        description: 'The ASVA 20L Jar Stand is designed to provide stable and convenient support for standard 20 liter water jars. Built using durable steel construction, it ensures safety, balance, and ease of use for daily water dispensing needs.',
        subDescription: 'Designed for homes, offices, and commercial spaces, this <b> steel jar stand </b> offers a sturdy and practical solution for placing 20L water jars at a comfortable height. Its compact design allows easy placement while maintaining strength and long term durability.',
        tagline: 'Strong and Reliable Support for Everyday Water Dispensing',
        keyFeatures: [
            'Designed to support standard 20 liter water jars',
            'Durable <b>steel construction</b> for long term use',
            'Stable and balanced design for safe placement',
            'Suitable for homes, offices, and commercial spaces',
            'Compact structure for easy placement and handling',
            'Ideal for everyday water dispensing convenience',
        ],
    },
    {
        id: '20',
        title: 'ASVA Manual Pump for 20L Jar',
        type: 'Accessory',
        image: H_2,
        badges: ["Pump"],
        author: 'ASVA Official Store',
        price: 'MRP ₹399 | Offer ₹299',
        description: 'The ASVA Manual Pump is designed for easy and hygienic dispensing of drinking water from standard <b>20L jars</b>. Built for simplicity and convenience, it allows smooth water flow without the need for electricity or complex installation.',

        subDescription: 'Compatible with standard <b>20L water jars</b>, this manual pump is ideal for homes, offices, and outdoor use. Easy to assemble and operate, it offers a practical solution for everyday water dispensing while maintaining hygiene and ease of use.',

        tagline: 'Simple and Convenient Manual Water Dispensing Solution',

        keyFeatures: [
            'Designed for standard <b>20L water jars</b>',
            'Manual operation with smooth water flow',
            'No electricity or installation required',
            'Easy to assemble, use, and clean',
            'Suitable for home, office, and outdoor use',
            'Compact and lightweight for easy handling',
        ],
    },
    {
        id: '21',
        title: 'ASVA Dispenser Tap for 20L Jar',
        type: 'Accessory',
        image: H_3,
        badges: ["Tap"],
        author: 'ASVA Official Store',
        price: 'MRP ₹249 | Offer ₹199',
        description: 'The ASVA Dispenser Tap is designed for easy and controlled dispensing of drinking water from standard <b>20L jars</b>. Made for everyday convenience, it ensures smooth water flow while helping maintain hygiene during use.',

        subDescription: 'Compatible with standard <b>20L water jars</b>, this dispenser tap is easy to install and use without any tools. Ideal for homes, offices, and temporary setups, it offers a simple and efficient solution for daily water dispensing needs.',

        tagline: 'Easy and Hygienic Water Dispensing for Everyday Use',

        keyFeatures: [
            'Designed for standard <b>20L water jars</b>',
            'Smooth and controlled water flow',
            'Easy to install with no tools required',
            'Helps maintain hygienic water dispensing',
            'Suitable for home, office, and outdoor use',
            'Lightweight and compact design',
        ],
    },
    // Corporate / Event Products
    {
        id: '22',
        title: 'ASVA Event Pack – 200ml Bottles (Pack of 24)',
        type: 'Bottle',
        image: I_1,
        badges: ['200ml'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹499',

        description: 'The ASVA Event Pack is designed to provide convenient and hygienic alkaline drinking water for gatherings, meetings, and large scale events. Each bottle contains <b>200ml</b> of clean, pH balanced water, making it ideal for quick consumption and easy distribution.',
        subDescription: 'This pack includes <b> Pack of 24 </b> <b>200ml</b> bottles, offering a practical hydration solution for conferences, corporate events, hospitality setups, and social functions. Designed for ease of handling and consistent quality, it ensures reliable hydration for every occasion.',
        tagline: 'Convenient Alkaline Hydration for Events and Gatherings',
        keyFeatures: [
            'Includes <b> Pack of 24 </b> <b>200ml</b> alkaline drinking water',
            'Compact size ideal for events and quick consumption',
            'Clean and pH balanced water for smooth hydration',
            'Hygienic sealed bottles for safe distribution',
            'Suitable for meetings, conferences, and hospitality use',
            'Easy to store, carry, and distribute',
        ],
    },
    {
        id: '23',
        title: 'ASVA Corporate Pantry Pack – 1L Bottles (Pack of 12)',
        type: 'Bottle',
        image: I_2,
        badges: ['1L'],
        author: 'ASVA Official Store',
        price: 'MRP ₹599 | Offer ₹549',
        description: 'The ASVA Corporate Pantry Pack is designed to meet the daily hydration needs of offices and professional environments. Each 1L bottle contains clean, pH balanced alkaline drinking water, offering smooth taste and reliable hydration throughout the workday.',

        subDescription: 'This pack includes <b> Pack of 12 </b> <b>1L</b> capacity, making it ideal for office pantries, meeting rooms, and corporate spaces. Designed for convenience and consistency, it supports regular consumption while maintaining a professional and organized setup.',

        tagline: 'Reliable Alkaline Hydration for Professional Workspaces',

        keyFeatures: [
            'Includes <b> Pack of 12 </b> <b>1L</b> alkaline drinking water',
            'Ideal for office pantries and corporate environments',
            'Clean and pH balanced water for daily consumption',
            'Hygienically sealed bottles for safe use',
            'Convenient size for individual daily hydration',
            'Easy to store and manage in professional settings',
        ],
    }
];

