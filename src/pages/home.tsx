import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "@/components/Carousel";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Carousel />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], null, ["es", "en"])),
  },
});

export default Home;
