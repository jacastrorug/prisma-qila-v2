import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { CleaningServices } from "@/components/CleaningServices";

const carpets = [
  {
    id: 'carpets',
    title: 'Limpieza de alfombras',
    imgList: [
      'url(/assets/imgs/Prisma-serv-1.jpg)',
      'url(/assets/imgs/Prisma-serv-2.jpg)',
      'url(/assets/imgs/Prisma-serv-3.jpg)',
      'url(/assets/imgs/Prisma-serv-4.jpg)',

    ],
    description: 'Tus alfombras limpias en 3 simples pasos',
    img: '/assets/imgs/floor-polisher.png',
    text: 'Limpieza de tus alfombras'
  }
]

function Carpets() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      {carpets.map((carpets: CleaningServices, index: React.Key | null | undefined) => (
        <CleaningServices
          key={index}
          id={carpets.id}
          title={carpets.title}
          imgList={carpets.imgList}
          description={carpets.description}
          img={carpets.img}
          text={carpets.text}
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