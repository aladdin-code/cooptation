import React from 'react';

import OffersList from '../components/OffersList';
const Offers = () => {
  const Offers = [
    {
      id: 'off1',
      name: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    },
     {
      id: 'off2',
      name: 'Dev Mobile Flutter',
      image:
        'https://sannacode.com/storage/app/uploads/public/5ee/897/555/5ee8975550eff237186992.png',
        description: 'This offers seems to be good for you',
      
    },
    {
      id: 'off1',
      name: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    }
    ,{
      id: 'off1',
      name: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    }
    ,{
      id: 'off1',
      name: 'Dev JAVA',
      image:
        'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
        description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you', 
      
    },
  ];

  return    <OffersList items={Offers} />;
   
  
};

export default Offers;
