import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CleaningServices } from "@/components/CleaningServices";
import { CleaningServicesProps } from "index";
import { GiVacuumCleaner } from 'react-icons/Gi';

const carpets: CleaningServicesProps[] = [
  {
    id: 'carpets',
    title: 'Limpieza de alfombras',
    imgList: [
      '/assets/imgs/Prisma-serv-1.jpg',
      '/assets/imgs/Prisma-serv-2.jpg',
      '/assets/imgs/Prisma-serv-3.jpg',
      '/assets/imgs/Prisma-serv-4.jpg',
    ],
    innerTxtList: [
      'Extracción y shampoo',
      'Limpieza y sanitización',
      'Solo shampoo',
      'Lavado en seco'
    ],
    description: 'Tus alfombras limpias en 3 simples pasos',
    img: '/assets/imgs/floor-polisher.png',
    text: 'Limpieza de tus alfombras',
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