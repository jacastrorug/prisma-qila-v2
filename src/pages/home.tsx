import Layout from "@/components/Layout";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "@/components/Carousel";

function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <Layout>
      <Carousel />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
