import Carousel from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import Layout from "@/components/Layout";
import { ServicesList } from "@/components/Services/ServicesList";
import { useTranslation } from "next-i18next";
import Testimonial from "@/components/Testimonial";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutUs from "@/components/AboutUs";

function Home() {

  return (
    <Layout>
      <Carousel />
      <AboutUs />
      <ServicesList />
      <Testimonial />
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
