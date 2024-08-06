import Image from "next/image";


function ComingSoon() {
  return (
    <section className="faq-section sec-pad">
      <figure className="image-layer">
        <Image src="/assets/images/banner/SliderAlfombras.png" alt="" width={100} height={100} />
      </figure>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_13">
              <div className="content-box wow fadeInLeft animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="upper-box">
                  <h3>Accreditations & Awards</h3>
                  <p>Proud to share some of our achivements</p>
                </div>
                <div className="inner-box">
                  <div className="single-box">
                    <figure className="image-box">
                      <Image src="/assets/images/resource/award-4.png" alt="" layout="fill" objectFit="contain" />
                    </figure>
                    <h4>ISO Accredited - 2005</h4>
                    <p>Indignation  dislike men who are so demoralized by the charms of pleasure of the moment.</p>
                  </div>
                  <div className="single-box">
                    <figure className="image-box">
                      <Image src="/assets/images/resource/award-5.png" alt="" layout="fill" objectFit="contain" />
                    </figure>
                    <h4>Best Choice Award - 2008</h4>
                    <p>Dislike men who are so demoralized the charms of pleasure of the moment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_14">
              <div className="content-box">
                <div className="sec-title text-left">
                  <h6>Coming soon</h6>
                  <h2>Grandes Proyectos</h2>
                </div>
                <div>
                  <p>
                    Estamos liderando una innovadora iniciativa de limpieza y desinfección no tóxica bajo la dirección de Jeams Quiroz. Nuestro objetivo es ampliar nuestros servicios para incluir escuelas, hospitales, centros médicos y edificios residenciales de alta gama.

                    Hemos desarrollado un sistema de limpieza altamente eficiente, diseñado especialmente para entornos de salud, que prioriza la higiene y la seguridad sin el uso de productos químicos nocivos. Este sistema protege tanto a pacientes como a profesionales de la salud.

                    Como proveedores de servicios de limpieza y sanitización, nos comprometemos a mantenernos a la vanguardia de la tecnología para reducir la contaminación ambiental y ofrecer la mejor calidad en nuestros servicios.



                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon;