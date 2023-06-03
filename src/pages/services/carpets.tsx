import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CleaningServices } from "@/components/CleaningServices";
import { GiVacuumCleaner } from 'react-icons/gi';

const carpets: CleaningServicesProps[] = [
  {
    id: 'carpets',
    title: 'steps.carpet_title',
    imgList: [
      '/assets/imgs/ExtracciónAlfombras.png',//fix img size 
      '/assets/imgs/LimpiezaSanitización.png',
      '/assets/imgs/AlfombrasShampoo.png',
      '/assets/imgs/LavadoSeco.png',
    ],
    innerTxtList: [
      'Extracción y shampoo',
      'Limpieza y sanitización',
      'Solo shampoo',
      'services.carpet_services_description4'
    ],
    description: 'steps.carpet_subtitle',
    img: '/assets/imgs/floor-polisher.png',
    text: 'steps.carpet_card',
    icon: GiVacuumCleaner
  }
]

function Carpets() {

  return (
    <Layout>
      {carpets.map((carpet: CleaningServicesProps, index: React.Key | null | undefined) => (
        <CleaningServices
          key={index}
          id={carpet.id}
          title={carpet.title}
          imgList={carpet.imgList}
          innerTxtList={carpet.innerTxtList}
          description={carpet.description}
          img={carpet.img}
          text={carpet.text}
          icon={carpet.icon}
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

export default Carpets;