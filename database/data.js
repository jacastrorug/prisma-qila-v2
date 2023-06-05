const data = {
  'services': {
    'serviceItem1': {
      id: 'service-1',
      image: '/assets/imgs/CardAlfombras.jpg',
      title: 'services.floor_services_title',
      listServices: [
        'services.floor_services_description1',
        'services.floor_services_description2',
        'services.floor_services_description3',
      ],
      href: '/services/floor'
    },
    'serviceItem2': {
      id: 'service-2',
      image: '/assets/imgs/CardPisos.jpg',
      title: 'services.carpet_services_title',
      listServices: [
        'services.carpet_services_description1',
        'services.carpet_services_description2',
        'services.carpet_services_description3',
        'services.carpet_services_description4',
      ],
      href: '/services/carpets'
    },
    'serviceItem3': {
      id: 'service-3',
      image: '/assets/imgs/CardLimpiezaGen.png',
      title: 'services.general_services_title',
      listServices: [
        'services.general_services_description1',
        'services.general_services_description2',
      ],
      href: '/services/general'
    },
  }
}

export { data };