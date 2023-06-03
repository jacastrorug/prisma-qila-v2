import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CleaningServices } from "@/components/CleaningServices";
import { GiBroom } from 'react-icons/gi';

const generalCleaning: CleaningServicesProps[] = [
  {
    id: 'general-cleaning',
    title: 'steps.general_title',
    imgList: [
      '/assets/imgs/Prisma-serv-1.jpg',// add another img
      '/assets/imgs/CardLimpiezaGen.png',
      '/assets/imgs/LimpiezaZonas.png'
    ],
    innerTxtList: [
      'Limpieza de áreas comunes',
      'services.carpet_services_description1',
    ],
    description: 'steps.general_subtitle',
    img: '/assets/imgs/floor-polisher.png',
    text: 'steps.general_card',
    icon: GiBroom
  }
]

function GeneralCleaning() {

  return (
    <Layout>
      {generalCleaning.map((item: CleaningServicesProps, index: React.Key | null | undefined) => (
        <CleaningServices
          key={index}
          id={item.id}
          title={item.title}
          imgList={item.imgList}
          innerTxtList={item.innerTxtList}
          description={item.description}
          img={item.img}
          text={item.text}
          icon={item.icon}
        />
      ))}

    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], null, ["es", "en"])),
  },
});

export default GeneralCleaning;