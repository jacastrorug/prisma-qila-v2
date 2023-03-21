import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { ServiceItem } from '../Services/ServiceItem';


function ServicesList() {
  const [serviceList, setServiceList] = useState<any>([]);

  useEffect(() => {
    window
      .fetch('/api/services')
      .then((response) => response.json())
      .then(({ services }) => {
        console.log('services', services);
        setServiceList(services)
      });
  }, [])

  return (
    <section className="service-section_container">
      <div className="service-subTitle_container">
        <Image
          className='service-img_container'
          src='/assets/imgs/icons/wave-7.png'
          alt="img PrismaQila"
          width="47" height="26"
        />
        <h4>services</h4>
      </div>
      <h2 className='sec-title h2 title_custom'>Our services</h2>
      <section className='service_container'>
        {serviceList.map((service: Service, index: React.Key | null | undefined) => (
          <ServiceItem
            key={index}
            img={service.image}
            title={service.title}
            list={service.listServices}
          />
        ))}
      </section>
    </section>
  )
}

export { ServicesList };
