import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CleaningServices } from "@/components/CleaningServices";
import { GiFloorPolisher } from 'react-icons/gi';

const floors: CleaningServicesProps[] = [
  {
    id: 'floors',
    title: 'steps.floor_title',
    imgList: [
      '/assets/imgs/Pisosmarmol.png',
      '/assets/imgs/banner/SliderPisos.png',
      '/assets/imgs/CepilladoPisos.png',
    ],
    innerTxtList: [
      'Pulido o cristalizacion de Marmol',
      'Finalización y encerado de pisos en cerámica',
      'services.floor_services_description2',
    ],
    description: 'steps.floor_subtitle',
    img: '/assets/imgs/floor-polisher.png',
    text: 'steps.floor_card',
    icon: GiFloorPolisher
  }
]

function Floors() {
  return (
    <Layout>
      {floors.map((item: CleaningServicesProps, index: React.Key | null | undefined) => (
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

export default Floors;