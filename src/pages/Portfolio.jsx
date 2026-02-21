import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Urban Planning', 'Interior', 'Concept', 'Public Space'];

const projects = [
    {
        id: 1,
        title: 'The Glass Pavilion',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA46ynr9pHWOUwpJke7A0VMWS0kokFR9imOZv9shud7qjrFahBPQ1TcZKNeaiTOoD_9JZfsaOQVxvcf5Ga2a-AKrw2lQCbyWpFfo_D8GkixV5pFW4OwCIHeVZ5hJlMyLTlZDpXBEpWNSyBayYOhrZzt2K2eyOCvUMDRCQ1y-Rh_cPeENMEwJ-t1qzjQ47_vW0HU_74zHnSecysPVFSW7ReIUdrzU1ZG2pDNR8zunHlPQNHbh7c4b9hH5MfubGrD3JwLsbLLPW6u7QpP',
        details: ['4,500 SQFT', 'Montecito, CA', '2023'],
        slug: 'glass-pavilion'
    },
    {
        id: 2,
        title: 'Vertex Tower',
        category: 'Commercial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqAkzlao2jR6cDLh3VTAQS7uCgL1XzsspD3jFWYw3F2Y66agN4dIdTtqpVZiaDlAS3KAOrU6rDj2JlsigePQmeq2la9-zrfOY3Bt_8gf2K9_frX18bVbVNneLLzZZFfQ5BCb85bgGdLBsl2LkebLs4mtER7K-YijxkDK_pJRqV_xVl6s4dCYgTtHAczeJRs3UPyQsNMvvxu4b5nNPVSJCJuTGg86Fvc43qvw-Kee1nlT5WFMObO04H-KuVPkUsT4Hs8OdrtxYLnZij',
        details: ['120,000 SQFT', 'Oslo, NO', '2024'],
        slug: 'vertex-tower'
    },
    {
        id: 3,
        title: 'Ossis Villa',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmAi26eK61FLqI8pg_AIhSxvqQafcEvGI2_LjizlMJyW1KJLidAnh8AVbJfeFwa9OcVkZsHOIOnrawiSl34MIr8pz0fpEmjM6e8nq5yO3w3Q56CfAv4ejgIsEd8lofT1FA6Kqrn3mtJLIgQOJSvMin3O3lFXfX07keVN3Ou30kgg9eXOF3-96rncQ8y9iCDBeivf9N1wb6P0p5LwB-4tmyzyQRxw3OY5pEdSKB5b5HLtRSiBww0E_Jdb-_MTze4-vml586AVRfRSYL',
        details: ['4,000 SQFT', 'Malibu, CA', '2022'],
        slug: 'ossis-villa'
    },
    {
        id: 4,
        title: 'The Vertical Forest',
        category: 'Urban Planning',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG1GpCyOQCDX4jnY1xm46f32XW74HdtWY0P2-ngBf4yLdbJWdF-na9-zy8O27-lQg2MUo8Ni6-PVKrTvf0ekQXn1NjrE0-q-bRFwCGmz7S42zQm2lApHZ_C8VFrVSIjZBetM2a0m5HPuz0P5EqwdOK2R73UpMzwq-Dmge4bDBIv5JHt22cI-BDN_osvR-uga7FYX-tUb3jjJCSE5F8bi5LLmWNUVs6g8HTtp_TH5oWpaeP9SI-w1ouAdttdWASQ6ruSRWz7rqKFK77',
        details: ['50 Acres', 'Singapore', '2025'],
        slug: 'vertical-forest'
    },
    {
        id: 5,
        title: 'Void Structure',
        category: 'Concept',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBEWcEHQWaI1qqC7VYAoAOQspFiHi6OCy5Z7UCvuINJOOaWBDFt8cAvvTAKTatBv0pAFrt5aVfSIcSm8n0O28dzsd2Xf5l3eOL1k8WKnAe7-VppvCnQOfmbrYA2TthZZYUFnXKyJR1rQhROaNZotBAKY4K1G5ID2e4z9l1oeQnUbWGXMLVWWWApvmoNDyRCb1AcbFypux8yZkyK91Bz1lA9FsSgGc4HJwDd-OPthXmajzOrrx2g8fWzMebWhJc1CgutKBsTs7gAXWq',
        details: ['Concept', 'Kyoto, JP', '2023'],
        slug: 'void-structure'
    },
    {
        id: 6,
        title: 'Vantage Point Villa',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7iig4vA_LfPXhgErZLT3qqAhg-Hd5TaPtrHeg1deDgyJo5eU3EF61wZMaFa7E-4t1phrOYZnnMuJHBThBVP0Egtm6BJTIGmmLHQLMfZoOAUxsme8nFiMG4XeqDwQ__av4ltaK3E37z6eGOOSjQ7HBH0HkP0w4M2lulpw7jnPzHSR2StBraWeHa_qMuLEUL7bRfD6DaUJXvSY3XR-8XUddcbLD7EXHB23bzLDCb4V1zdtuDPIyCeDd2DUIc580qzQE3Z-_bUER1Zuq',
        details: ['5,100 SQFT', 'Cape Town, SA', '2021'],
        slug: 'vantage-point-villa'
    },
    {
        id: 7,
        title: 'Desert Obelisk',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDX5F7BXqJeEhgLmZqsrIlPEdJl7LEdPDlVGjHYIB8_PmfxU-ynCU3P48CTGoI2KCZCazjSYhS4WfKo0l-eCB1VIU2ONo8L5jp7Kspxz0OaTBDOovNo6oRCYBRLvh_BwCPRFZxNbY__mpVQENU-Ajqe4cI2f9bLKTSm2Rjkkc0v1f8H3bpZFs6HC3yVl4s-yG_Lj7Mw7qkN-7r_2921Bi-SbAk9e7JumGiaUfKQwb6ZAtmPttPzxkKejraeKYUkWgYtmFFjz9rNuPd',
        details: ['3,800 SQFT', 'Arizona, USA', '2024'],
        slug: 'desert-obelisk'
    },
    {
        id: 8,
        title: 'Nexus Hub',
        category: 'Commercial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiVGst5SUiNARFkYSgInFIuby_NEsSJKOEoSKisrLZPpBQ0r20uY-wn5JBzxcPrqUq2RfkctMoDe2RBN38dkg8HD50cce3zIBcp3hRRuCzhvwULjhhHRcmgDOTbCP9kHyqH-3MRMGNMt2_baISu3vAEx7lns_AXwGegelreOueWrDgnkwsnptHfE5zZEIHNIfHkSvoXEPksZ43X4_EL-P0_NGXq_5ROXTMa0QgOwFDJbpZGz0MiCD8nPpXCm3RZeo3jk_kJy2hWStR',
        details: ['25,000 SQFT', 'Toronto, CA', '2024'],
        slug: 'nexus-hub'
    },
    {
        id: 9,
        title: 'Solaris Pavilion',
        category: 'Public Space',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2OZXAKs32pTZtI60Ywxb7R0donI4OIDY_uy5LdoETjvQNk0jk6tQ1qY7JNvV8yJqEee-hIoozo2JJI1qebmpStweu8JpXpwfzEEjZKQWLWZjeVSsUoZzZHLYVJ6lM2lXPIloVrgr13JCJdpPmXxI8Cy1bEHfWJBxXnVRVQmorOo7SjA-ew-nq3TvHE8PLXFD2ps_351dUA8D5Pda3JdtapyZGKSp1Aj7gNUhqLSn0VxBy2Hfso-kFSGwDiPVdW2GwmljljbfFCOt',
        details: ['12,000 SQFT', 'Austin, TX', '2024'],
        slug: 'solaris-pavilion'
    },
    {
        id: 10,
        title: 'Urban Plaza',
        category: 'Public Space',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-CgWrz-tynf9yNvx-u22yUwj_tzQItrm4c0bbK_ev64A2a5cUtCg7Wt2HkbOgbG61F_V2Rtj-LdtB8uMz8CwtPX7jxX5_wj-657AjxXYV06VLIoZPCDL0vpA4m-caZOTPaAudZRRNBVj59awPT-Flk3TDbNo5TdIUSUZS6pv34LyojBe_K1ee8XFIcU5avvEeeogRJKbRuWg6mpUeGZkslz2uAZQIzkrEfsJUuWd8Q77DG7v5wbm3LNKtgFSMy2NaYUbMxZ1sl0Kx',
        details: ['8,000 SQFT', 'Berlin, DE', '2025'],
        slug: 'urban-plaza'
    },
    {
        id: 11,
        title: 'Lumina Gallery',
        category: 'Cultural',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUWfwNHo_keFedyuN3cFm68Zysr19ZzTSWQtT7Ab4iytHID8I2RXCzA9zvqa24x7r9pkprnJOqmaJQrUOsI__R4KXlrD8DbhYjw27QGw8k3ToucwQQ4EfqybiezaTZuydNE6pAlct7pMRlCBkLRLg2p0TTr7HNXTPiWNfjba1HX6Nm1ZMeLWr-gmbc9929HnVo-YLUe9cmcGqRz3_YfrIL8nZAszOe9QORWuPwvwVQV7ZVpH0bwLucz72ivvhmaH3qTXz52yEiP_gH',
        details: ['8,000 SQFT', 'Helsinki, FI', '2023'],
        slug: 'lumina-gallery'
    },
    {
        id: 12,
        title: 'Riverside Villa',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9bhruYgPfZUCVcx-r9tALfRqyr8y3s8sDkxKwrxD0UtWXTsOJrVv8hro8evAxDptiJcw-hjD4oIH1qrzy7SG-3KKjZMD0dlLdPdKG-MU12P8gLQo1lb7dexUCCegedbT4kFWHsW859IQ90X-yAhs4RJefqJJggzV3S4bJACwOFb217B9g3ckzCbT4OUxXtDOO4V6F4_iCaBa7Ba7h3M_--pphTwNVuD_EbO6pfH5MRxWoHK-oncn4wnKUo1wmAgSkRjHER6kyYDoK',
        details: ['5,000 SQFT', 'Kyoto, JP', '2024'],
        slug: 'riverside-villa'
    },
    {
        id: 13,
        title: 'Apex Center',
        category: 'Cultural',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacf0px6ILiSeN_6YwEU8Auc3kka1rFnm-bUfVkFP-WHFIjfHGXb1q-kbhzu9ZAie2_W_Kr1EGf8f3ni_r_wVVUO-DPs77RweZVB7S0K9-Kuocf1twLUrIee6osphC11KClIPEFBLjntxdadtdcCqksilXNGdkpIpoUpOCs887sY43lntKH5Lnp7-sZJioFuAJhk0EPzR7t0orxlCjWwSLRsxsK41OlMPIgNJPVifPvms_YvCQJgN9kV7humphqWSbNWiA-RFd9IM9',
        details: ['15,000 SQFT', 'Oslo, NO', '2021'],
        slug: 'apex-center'
    },
    {
        id: 14,
        title: 'Nordic Retreat',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6_fEI7Q3y5NhhbcFuDV0Fpbkg3r5N-2aloQW02xyB_5utV-otjKX_IIOm_mjDVCfQvjc2vFHas2VaZ8Rxbw9hU1uzffDh-X3HKzpkKSLkpP_g-WOPWWb1a-KRrs4ZcuheC1mN4ZVt1yth_XSW7FRO8oc4GxIDDrTMOn5Q3z47r1xMFjqnKXWB-XAm1tmTmyagrll3lxq-lwcmMU5aoRqImxE5io-2Y0doEv2uPlxFGcuvJl7KNpsXYR72md2VMwut9zoEZUxEyA_n',
        details: ['2,800 SQFT', 'Reykjavik, IS', '2024'],
        slug: 'nordic-retreat'
    },
    {
        id: 15,
        title: 'Ethereal Studio',
        category: 'Commercial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1UGkFL3rqIwlPHej6oLWHBXyxFc1mutLUpqYktMI5Nqf60z1gfEcH1Qg9f-WTxl2p3ny361FQd2PhEh__yQEL30odOy6XPdXb5-xRMGsNnfp7YtTcWEL-D198PwQ7IgQuwhF0wC36t_7z7A-5AEuKLtvTaFAroH_pTlnbPL8Fa3x6kPB2FElAGAhGhvG7VC2q8Cf4OOsPUZl5FRyIfBkoCEBqLwAmOM0FrIt7UwXw-PzE8g2cZMNQDIIkmEAceou-609mDdJDdDnE',
        details: ['8,500 SQFT', 'Paris, FR', '2022'],
        slug: 'ethereal-studio'
    },
    {
        id: 17,
        title: 'Asian Gallery',
        category: 'Cultural',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCLEEqo_WSkgPBhqzQNFyDVali1eoUhJ9UTczYRUTiiBcQlvTOqyBI0Ya_OITZNDUno8lmoEJIY9sHNc8_9xfaiQIfgOcKmA7tq3224TdUgg0zIQ2x44YPNFmX65VuD9_-EaP-M29WUqNcTm0Iq_a51Fc3GC_KWzLgUlRoc-EEuAVIP53NgbtFos2u3v-QRO-kzo6J42x0_FzLPGYanizsukvekK0xBcMOQnet0JKv7KkxeZZ6eO3vJfZt8DkPtFgy9w0I_lPONasC',
        details: ['6,000 SQFT', 'Seoul, KR', '2023'],
        slug: 'asian-gallery'
    },
    {
        id: 18,
        title: 'Monolith House',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkiEK0JOqXq-uPki-817fmQLV8tymPMYMM5sEzKI1wk_46JCIWGZ5PfboGL6Pc1pQHzgSOAxR-AXp3idq7rI5bmTWiDGOsK5hnXOsVFCdALf-XT8MycXkRk4-YGZH0mR1JrlNqVQmdukjkltEMDlUcopTxDHWs79_ln8AdfZQV1L3mZ-_okIAHaULQI2I-_Snk80_z6DV1ybkDYYlbnRwvC0Qfa-L1YTgkG_eJBmwRYTIsm9GVqE0DtaFg2m_mPgC48V4C5csciIC0',
        details: ['3,500 SQFT', 'Portland, OR', '2024'],
        slug: 'monolith-house'
    },
    {
        id: 19,
        title: 'Elysian Towers',
        category: 'Commercial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Xt_WJiwsELihsdRlMziWQXTKXbM3mSEe30C_zaC1_o_0HArjkvYp6V9duUNnzVP5vv4gtANGpmz8jxuP1LtdawgXaHeBeNo_RTDeJm96wtLoQz3UaE779nmMt9LbzDNyxFcPbp2tdFAi0NczrFtsTXY9d-3uD4Ht04D0HkvaJhd2iKipR4D0qMl5nXnLknq7dhd1IU3QQfcVDSOHIN3wP_TotaDMURYEdzheJkqWECR7Eik_GlCU7nYTlrT9qa9bubZEewWoMqsh',
        details: ['210,000 SQFT', 'Sydney, AU', '2025'],
        slug: 'elysian-towers'
    },
    {
        id: 20,
        title: 'The Atrium',
        category: 'Interior',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvy8FUAUuUphlq-2pBV_v_14gLmOil2pngGDqnXKXquXPK66Os0XpN3N8jVLEs6muAAUCjXjul__4qk1NP1lcaR09KXykVn9lIw9n-hxU8UQctJ-MEQUOFVHOiGKW9Kn6BWgY0RV0XCnOKyUy4qNL4H3ZauJbtS6TFTH3_Y-q6ohtfX2oq_IgoODX5mU74LpavycM4tEpluGtRhh0FxWcaNA45ej-V28X0zvnFkjqi5gx8MEq2yUjV4k6de_DUQPE2ZHb8BHS5Oi02',
        details: ['4,500 SQFT', 'London, UK', '2023'],
        slug: 'the-atrium'
    },
    {
        id: 21,
        title: 'Horizon Bridge',
        category: 'Public Space',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz49THEPlp-fb7tRxEQJrgoCfp3_G9FwfDvzYaBxgGf0mFX8Alh35yuGIEnogEMuIK0FKyf9WMgl2e9D9_DS_zE-CM7_dnM8KedV0-KHmz0mY4OPf4x8jhxpAej74DDwXmmb3KHsQlNltr0kIs1KH-VMcrUQoMN1boLhTVXQ9oaEJagNmwT5Uy0LzN2ilYrxTlEaM7LwOcdido-_63yY799zZC_I9QstZdMTMayGOCdMsm-_IcEScmnBYS7pJVxJ-ktPxkYH8JE07_',
        details: ['350 Meters', 'Rotterdam, NL', '2025'],
        slug: 'horizon-bridge'
    },
    {
        id: 22,
        title: 'Terra Nova',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPD72PTWWMpGfNUISGaORDJRl4WW66-oYI8zxwpbOIAAXrzf-DQ8wpLGYFeg5dEWBy0i6pCzdB_aNT1YbDtGvgn-OWeL_teQwGlhkcKn66Nec_kF6bTfWdMpre8Pj0kFuOuN87M6xTEuHwZ_kuy8_k4lYYyz2Pus3gbAbU9UwXVqeFsVhSqrSOlD9LXV9t47TuQRtce5oHNPPEueEyQTFYIaPy_M5NEQdLzyIZkESB-uGa-aI-I3ugpLPcsCmA5LVIpGAggLZ-l8az',
        details: ['3,000 SQFT', 'New Zealand', '2024'],
        slug: 'terra-nova'
    },
    {
        id: 23,
        title: 'Crestview Estate',
        category: 'Residential',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv1ZVjEeGRCwrPu49_HjUZ6h4dBqSgbpRAm1aPyJjupjwhFtYvIonVfr1Sc0sqC7yy8XqFevEI730JmNFmT8kXycxT43zBWO1nJ0ZaXvcM_i_OzTT9lt-JHCOVn8KNoXkIf20iEKEtyVreQ1Xt1InpyS5HTLG5xsVHKfTrk-nIIFkaj8FjFLdEiiC3RKwFR0GeqZstStNfZaoHbscbIIEzc937C_OyMVTvYkxG7yHJ2g3UPUyY6spz9yal5_8smD9VeLYesWneBxJC',
        details: ['6,500 SQFT', 'Beverly Hills, CA', '2022'],
        slug: 'crestview-estate'
    },
    {
        id: 24,
        title: 'Zenith Offices',
        category: 'Commercial',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtkgtjgCJ7c-vFNglyq4HHuZQjJSkaojjehB2v_x8o1tALv7na-ytty8vzetEGuZy03TcU9VgBw-ajv6tB0j8m7K6NSLQOCN-e2F4bpxdMclqrLf54P4McIpXZjyKaiSRz6i3wfdYIY6bj5oGk5SarWVAXVZksAjnJsDxbDDgMwE3GtTI9hOgu80g-5Wb5DoqsBNjmmCpVsT4sNoVosVOIJrl9x2cQ4RQbhTop79iHibEPA4XbbNcVJG5QZ01Q-rkVUTv2MybvHRzk',
        details: ['15,000 SQFT', 'Tokyo, JP', '2024'],
        slug: 'zenith-offices'
    }
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [displayCount, setDisplayCount] = useState(() => {
        const saved = sessionStorage.getItem('portfolioDisplayCount');
        return saved ? parseInt(saved, 10) : 9;
    });

    useEffect(() => {
        sessionStorage.setItem('portfolioDisplayCount', displayCount.toString());
    }, [displayCount]);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const visibleProjects = filteredProjects.slice(0, displayCount);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 9);
    };

    return (
        <main className="flex-grow pt-40 pb-20 px-6">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-20 text-center md:text-left border-b border-gray-800 pb-12">
                    <h1 className="text-5xl md:text-7xl font-display font-light mb-8 text-white">
                        Selected <span className="text-primary italic font-serif">Works</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl text-xl font-light leading-relaxed">
                        Defining modern living through spatial innovation. We create environments that inspire, endure, and harmonize with their surroundings in a sophisticated dark palette.
                    </p>
                </div>

                <div className="bg-background-charcoal/95 backdrop-blur-sm py-6 mb-12 border-b border-gray-800 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setDisplayCount(9);
                                }}
                                className={`px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-surface-dark text-white hover:bg-primary/80 hover:text-white border border-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="block group relative overflow-hidden rounded-sm bg-surface-dark">
                            <div className="relative overflow-hidden aspect-[4/5]">
                                <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-100" src={project.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-6 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 z-10">
                                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-white text-3xl font-display font-medium mb-3">{project.title}</h3>
                                <div className="flex items-center text-gray-300 text-xs tracking-[0.15em] uppercase gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {project.details.map((detail, index) => (
                                        <span key={index} className="flex items-center gap-4">
                                            <span>{detail}</span>
                                            {index < project.details.length - 1 && <span className="w-1 h-1 bg-primary rounded-full"></span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {displayCount < filteredProjects.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="border border-white/20 text-white bg-transparent hover:bg-surface-dark hover:border-primary hover:text-primary px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
