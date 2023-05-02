import React from "react";
import Layout from "@/components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContactForm } from "@/components/ContactForm";
import { ContactComponent } from "@/components/Contact";

function Contact() {

    return (
        <Layout>
            <ContactComponent />
            <ContactForm />
        </Layout>
    );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"], null, ["es", "en"])),
    },
});

export default Contact;
