import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { CleaningServices } from "@/components/CleaningServices";
import { CleaningServicesProps } from "index";
import { GiBroom } from 'react-icons/Gi';

const generalCleaning : CleaningServicesProps[]= [
  {
    id: 'general-cleaning',
    title: 'Limpieza General',
    imgList: [
      '/assets/imgs/Prisma-serv-1.jpg',
      '/assets/imgs/Prisma-serv-2.jpg',
      '/assets/imgs/Prisma-serv-3.jpg',
      '/assets/imgs/Prisma-serv-4.jpg',
    ],
    innerTxtList: [
      'Limpieza de áreas comunes',
      'Limpieza y sanitización',
    ],
    description: 'Tus alfombras limpias en 3 simples pasos.',
    img: '/assets/imgs/floor-polisher.png',
    text: 'Limpieza de tus pisos',
    icon: GiBroom
  }
]

function GeneralCleaning() {
  const { t } = useTranslation("common");

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