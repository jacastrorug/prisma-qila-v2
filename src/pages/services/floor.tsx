import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { CleaningServices } from "@/components/CleaningServices";

const floors = [
  {
    id: 'floors',
    title: 'Limpieza de Pisos',
    imgList: [
      '/assets/imgs/Prisma-serv-1.jpg',
      '/assets/imgs/Prisma-serv-2.jpg',
      '/assets/imgs/Prisma-serv-3.jpg',
      '/assets/imgs/Prisma-serv-4.jpg',
    ],
    innerTxtList: [
      'Pulido o cristalizacion de Marmol',
      'Cepillado de pisos en cerámica',
      'Finalización y encerado de pisos en cerámica',
    ],
    description: 'Tus pisos limpios en 3 simples pasos',
    img: '/assets/imgs/floor-polisher.png',
    text: 'Limpieza de tus pisos'
  }
]

function Floors() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      {floors.map((item: CleaningServices, index: React.Key | null | undefined) => (
        <CleaningServices
          key={index}
          id={item.id}
          title={item.title}
          imgList={item.imgList}
          innerTxtList={item.innerTxtList}
          description={item.description}
          img={item.img}
          text={item.text}
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

export default Floors;