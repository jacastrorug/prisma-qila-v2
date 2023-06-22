import Script from "next/script";
import { useEffect } from "react";

function TemplateScripts() {
  useEffect(() => {
    console.log("Load tempalte script");
  });

  return (
    <>
      <Script src="/assets/js/jquery.js" strategy="afterInteractive" />
      <Script src="/assets/js/popper.min.js" />
      <Script src="/assets/js/owl.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.js" />
      <Script src="/assets/js/jquery.fancybox.js" strategy="lazyOnload" />
      <Script src="/assets/js/appear.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.countTo.js" strategy="lazyOnload" />
      <Script src="/assets/js/scrollbar.js" strategy="lazyOnload" />
      <Script
        src="/assets/js/jquery.nice-select.min.js"
        strategy="lazyOnload"
      />

      <Script src="/assets/js/script.js" strategy="lazyOnload" />
    </>
  );
}

export default TemplateScripts;
