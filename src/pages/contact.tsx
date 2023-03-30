import React from "react";
import Layout from "@/components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { ContactForm } from "@/components/ContactForm";
import { ContactComponent } from "@/components/Contact";

function Contact() {
    const { t } = useTranslation("common");

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
