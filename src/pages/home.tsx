import Layout from "@/components/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Carousel from "@/components/Carousel";
import { useTranslation } from "next-i18next";
import { ServicesList } from "@/components/Services/ServicesList";
import { ContactForm } from "@/components/ContactForm";

function Home() {
  const { t, i18n } = useTranslation("common");

  return (
    <Layout>
      <Carousel />
      <ServicesList />
      <ContactForm />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], null, ["es", "en"])),
    },
  };
};

export default Home;
