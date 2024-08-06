import Image from "next/image";
import PictureGroup from '../../../public/assets/imgs/groupPicture.jpg'
import { TiStarFullOutline } from "react-icons/ti";
import { TiGlobe } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";


import { FaLeaf } from "react-icons/fa";

function ComingSoon() {
  return (
    <section className="text_container_bigProyects">
      <h6 className="title_custom ">Grandes Proyectos</h6>

      <section className="section_content">
        <div className="section_content_imagen">
          <Image 
          alt="photo" 
          src={PictureGroup} 
          className="section_content_img"
          />
        </div>
        <div className="section_content_text">
        <article className="article_bigProyects">
          <div className="article_title">
            <TiGlobe className="icon" />
            <h4>Expansión de Servicios</h4>
          </div>
          <p>Nuestro proyecto principal es ampliar nuestro portafolio para brindar servicios de limpieza y
            desinfección en escuelas, hospitales, centros médicos y edificios residenciales de alta gama.
          </p>
        </article>

        <article className="article_bigProyects">
          <div className="article_title">
            <TiStarFullOutline className="icon" />
            <h4>Innovación en Limpieza</h4>
          </div>
          <p>
            Jeams Quiroz está liderando una iniciativa innovadora para desarrollar un sistema
            de limpieza no tóxico y altamente eficiente.
          </p>
        </article>

        <article className="article_bigProyects">
          <div className="article_title">
            <FaLeaf className="icon" />
            <h4>Seguridad y Bienestar</h4>
          </div>
          <p>
            Este sistema no solo prioriza la higiene y desinfección, sino que también garantiza
            la seguridad y bienestar de los pacientes y profesionales de la salud al eliminar
            el uso de productos químicos nocivos.
          </p>
        </article>

        <article className="article_bigProyects">
          <div className="article_title">
            <FaCheckCircle className="icon" />
            <h4>Calidad y Actualización</h4>
          </div>
          <p>
            Como proveedores de limpieza y sanitización de espacios, tenemos presente que hay
            un amplio territorio que necesita de nuestros servicios. Queremos seguir brindando
            la mejor calidad y tecnología disponible y estar siempre actualizados para ayudar
            a reducir la contaminación ambiental.
          </p>
        </article>

        </div>
       
      </section>

    </section>
  )
}

export default ComingSoon;



