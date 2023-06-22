import AboutUs from "@/components/AboutUs";
import Carousel from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import Layout from "@/components/Layout";
import { ServicesList } from "@/components/Services/ServicesList";
import Testimonials from "@/components/Testimonials";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {

  return (
    <Layout>
      <Carousel />
      <AboutUs />
      <ServicesList />
      <Testimonials />
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
