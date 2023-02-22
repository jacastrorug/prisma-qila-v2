import Script from "next/script";
import React from "react";

function TemplateScripts() {
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
