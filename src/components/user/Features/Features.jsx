import styles from './Features.module.css';

const Features = () => {
  const features = [
    { 
      icon: (
        <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_6314_1095" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="1" width="56" height="57">
          <path d="M56 1.15039H0V57.1504H56V1.15039Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_6314_1095)">
          <mask id="mask1_6314_1095" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="1" width="56" height="57">
            <path d="M56 1.15039H0V57.1504H56V1.15039Z" fill="white"/>
          </mask>
          <g mask="url(#mask1_6314_1095)">
            <path d="M16.625 43.6753L11.375 47.0003L16.8 55.4003L22.05 52.0753L16.625 43.6753Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.75 52.0753L7 55.4003L12.425 47.0003L7.175 43.6753L1.75 52.0753Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50.4015 40.5253C46.7265 48.0503 33.4265 48.9253 33.4265 48.9253C33.4265 48.9253 28.1765 38.7753 32.7265 31.7753C37.9765 23.5503 54.7765 22.6753 54.7765 22.6753C54.7765 22.6753 54.0765 33.1753 50.4015 40.5253Z" fill="#634C9F"/>
            <path d="M47.6 28.8003C47.6 28.8003 32.55 44.7253 32.375 54.1753" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M44.8008 2.90039H11.5508V42.8004H44.8008V2.90039Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.4266 51.5503C17.6766 51.5503 21.8766 47.3503 21.8766 42.1004C21.8766 36.8504 17.6766 32.6504 12.4266 32.6504C7.17656 32.6504 2.97656 36.8504 2.97656 42.1004C2.97656 47.3503 7.17656 51.5503 12.4266 51.5503Z" fill="#FFB909"/>
            <path d="M12.425 47.5253C15.4 47.5253 17.85 45.0753 17.85 42.1003C17.85 39.1253 15.4 36.6753 12.425 36.6753C9.45 36.6753 7 39.1253 7 42.1003C7 45.0753 9.45 47.5253 12.425 47.5253Z" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.375 13.2256H38.15" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.375 21.6255H38.15" stroke="#1D1D1B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>
      </svg>
        ), 
      title: 'Payment only online', 
      description: 'Secure online payments. Mobile checkout.' 
    },
    { 
      icon: (
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6314_1115)">
<mask id="mask0_6314_1115" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="1" width="56" height="57">
<path d="M57 1.15039H1V57.1504H57V1.15039Z" fill="white"/>
</mask>
<g mask="url(#mask0_6314_1115)">
<path d="M57 30.9319L48.3455 37.1683L51.6545 47.2228L40.9636 47.0955L37.6545 57.1501L29 50.9137L20.3455 57.1501L17.0364 47.0955L6.34545 47.2228L9.65455 37.1683L1 30.9319L9.65455 24.8228L6.34545 14.7683H17.0364L20.3455 4.71371L29 10.8228L37.6545 4.58643L40.9636 14.641H51.6545L48.3455 24.6955L57 30.9319Z" fill="#634C9F"/>
<path d="M43.6351 19.0958C47.1987 16.9321 50.5078 14.1321 52.7987 10.8231C53.9442 9.16852 54.9624 7.25943 54.7078 5.35034C54.4533 3.56852 53.1805 2.04125 51.3987 1.7867C50.5078 1.53215 49.6169 1.65943 48.8533 1.91397C48.0896 2.04125 47.326 2.29579 46.8169 2.67761C45.2896 3.69579 44.6533 5.73216 44.1442 7.51397C43.2533 10.8231 42.4896 13.8776 41.9805 17.1867" stroke="#1D1D1B" stroke-width="0.5714" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.4366 46.2052L25.5638 45.4415L19.582 33.3506L36.1275 8.65967L55.982 21.5143L39.4366 46.2052Z" fill="#FFB709"/>
<path d="M43.6367 19.0958C47.2004 16.9321 50.5094 14.1321 52.8004 10.8231C53.9458 9.16852 54.964 7.25943 54.7094 5.35034C54.4549 3.56852 53.1822 2.04125 51.4004 1.7867C50.5094 1.53215 49.6185 1.65943 48.8549 1.91397C48.0913 2.04125 47.3276 2.29579 46.8185 2.67761C45.2913 3.69579 44.6549 5.73216 44.1458 7.51397C43.8913 8.15034 43.764 8.65943 43.6367 9.42306" stroke="#1D1D1B" stroke-width="0.5714" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5078 27.623L27.9805 30.0412L28.8715 31.0594L44.3987 28.6412L43.5078 27.623Z" fill="#1D1D1B"/>
<path d="M38.5472 31.9502C38.2926 31.8229 38.1654 31.8229 38.0381 31.8229C37.529 31.6957 37.0199 31.6957 36.5108 31.8229C36.0017 32.0775 35.3654 32.332 34.8563 32.7138C34.3472 33.2229 33.9654 33.732 33.7108 34.2411C33.4563 34.7502 33.4563 35.2593 33.5835 35.7684C33.7108 36.2775 33.9654 36.7866 34.3472 37.1684L34.4745 37.2957C35.1108 37.932 35.7472 38.1866 36.5108 38.1866C37.2745 38.1866 38.1654 37.8048 38.929 37.1684C39.6926 36.4048 40.0745 35.6411 40.2017 34.8775C40.329 34.1138 39.9472 33.3502 39.4381 32.7138C39.1835 32.332 38.8017 32.2048 38.5472 31.9502ZM35.6199 37.0411C35.4926 36.9138 35.2381 36.7866 35.1108 36.6593C34.729 36.2775 34.6017 35.7684 34.729 35.132C34.8563 34.6229 35.1108 34.1138 35.7472 33.4775C36.3835 32.9684 36.8926 32.5866 37.4017 32.5866C37.529 32.5866 37.529 32.5866 37.6563 32.5866C38.1654 32.5866 38.4199 32.7138 38.8017 33.0957C39.1835 33.4775 39.3108 33.9866 39.1835 34.6229C39.0563 35.132 38.6745 35.6411 38.1654 36.1502C37.6563 36.6593 37.0199 37.0411 36.5108 37.0411C36.2563 37.1684 35.8745 37.1684 35.6199 37.0411Z" fill="#1D1D1B"/>
<path d="M32.945 26.2232C33.5814 26.8596 34.2178 27.1141 34.9814 27.1141C34.9814 27.1141 34.9814 27.1141 35.1087 27.1141C35.8723 27.1141 36.7632 26.7323 37.5268 26.0959C38.2905 25.3323 38.6723 24.5687 38.7996 23.805C38.9268 23.0414 38.545 22.2778 38.0359 21.6414C37.7814 21.2596 37.3996 21.1323 37.145 21.005C36.7632 20.7505 36.3814 20.7505 35.8723 20.7505C35.1087 20.7505 34.2178 21.1323 33.4541 21.7687C32.6905 22.5323 32.3087 23.2959 32.1814 24.0596C31.9268 24.8232 32.1814 25.4596 32.945 26.2232ZM35.9996 21.6414C36.3814 21.6414 36.7632 21.8959 37.2723 22.1505C37.6541 22.5323 37.7814 23.0414 37.6541 23.6778C37.5268 24.1869 37.145 24.6959 36.6359 25.3323C35.9996 25.8414 35.4905 26.2232 34.9814 26.2232C34.5996 26.3505 34.345 26.2232 34.0905 26.0959C33.8359 25.9687 33.7087 25.8414 33.5814 25.7141C33.1996 25.3323 33.0723 24.8232 33.1996 24.1869C33.3268 23.6778 33.7087 23.1687 34.2178 22.5323C34.8541 22.0232 35.3632 21.6414 35.8723 21.6414C35.745 21.6414 35.8723 21.6414 35.9996 21.6414Z" fill="#1D1D1B"/>
</g>
</g>
<defs>
<clipPath id="clip0_6314_1115">
<rect width="57" height="57" fill="white" transform="translate(0.5 0.950195)"/>
</clipPath>
</defs>
</svg>

      ), 
      title: 'New stocks and sales', 
      description: 'Get the latest deals and stock updates.' 
    },
    { 
      icon: (
        <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.3023 39.8254C41.3023 39.8254 47.0773 34.0504 47.0773 27.0504C47.0773 20.0504 41.3023 14.2754 34.3023 14.2754C27.3023 14.2754 21.5273 20.0504 21.5273 27.0504C21.5273 34.0504 27.1273 39.8254 34.3023 39.8254Z" fill="#FFB709"/>
<path d="M25.7247 22.1504C26.5997 21.1004 26.9497 19.8754 26.9497 18.4754C26.9497 15.6754 25.0247 13.2254 22.3997 12.7004C22.5747 12.0004 22.7497 11.3004 22.7497 10.6004C22.7497 6.40039 19.2497 2.90039 14.8747 2.90039C10.6747 2.90039 7.17471 6.40039 7.17471 10.6004C7.17471 11.3004 7.34971 11.8254 7.34971 12.5254C4.89971 13.2254 2.97471 15.6754 2.97471 18.4754C2.97471 19.8754 3.49971 21.1004 4.19971 22.1504C2.79971 23.5504 1.39971 25.4754 1.74971 27.7504C2.09971 29.8504 11.0247 51.2004 11.0247 51.2004H18.7247C18.7247 51.2004 27.6497 29.8504 27.9997 27.7504C28.5247 25.4754 27.1247 23.5504 25.7247 22.1504Z" fill="#634C9F"/>
<path d="M14.875 11.6504V50.6754" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.22656 28.625L14.8766 36.15" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.7 28.625L14.875 36.15" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.22656 17.6001L15.0516 25.3001" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.7 17.6001L14.875 25.3001" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.3477 39.1253C42.6977 40.3503 42.8727 41.5753 43.0477 42.6253H54.2477L49.6977 28.8003L40.5977 35.6253C41.2977 36.6753 41.8227 37.9003 42.3477 39.1253Z" fill="#634C9F"/>
<path d="M2.45039 52.2501C1.75039 50.3251 2.45039 48.2251 3.85039 47.3501L29.9254 31.9501C34.4754 29.6751 40.2504 33.0001 42.3504 39.1251C44.2754 45.2501 41.6504 51.3751 36.5754 52.2501L6.4754 55.4001C4.9004 55.5751 3.15039 54.1751 2.45039 52.2501Z" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.5742 32.3003C29.7492 32.6503 33.4242 44.7253 33.4242 44.7253" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.375 46.125C25.55 46.475 27.65 53.125 27.65 53.125" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8477 39.4751C18.0227 39.8251 20.1227 46.4751 20.1227 46.4751" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.875 49.8003L9.45 54.8753" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.8492 9.2002L36.5742 17.7752" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.9008 17.6002C39.3758 17.9502 38.6758 17.9502 37.9758 17.9502C36.5758 17.9502 35.1758 17.2502 34.3008 16.2002" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ), 
      title: 'Quality assurance', 
      description: 'Top-notch quality checks for all items.' 
    },
    { 
      icon: (
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_6314_1147" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="1" width="56" height="57">
<path d="M57 1.15039H1V57.1504H57V1.15039Z" fill="white"/>
</mask>
<g mask="url(#mask0_6314_1147)">
<mask id="mask1_6314_1147" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="1" y="1" width="56" height="57">
<path d="M57 1.15039H1V57.1504H57V1.15039Z" fill="white"/>
</mask>
<g mask="url(#mask1_6314_1147)">
<path d="M39.5016 24.0752H7.47656V49.8002H39.5016V24.0752Z" fill="#634C9F"/>
<path d="M39.6758 31.4253H46.6758L54.5508 46.4753C55.4258 48.0503 54.2008 49.8003 52.6258 49.8003H38.8008" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3523 55.2256C17.6273 55.2256 19.5523 53.3006 19.5523 50.8506C19.5523 48.4006 17.6273 46.4756 15.3523 46.4756C13.0773 46.4756 11.1523 48.4006 11.1523 50.8506C11.1523 53.3006 13.0773 55.2256 15.3523 55.2256Z" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.1492 55.2256C48.4242 55.2256 50.3492 53.3006 50.3492 50.8506C50.3492 48.4006 48.4242 46.4756 46.1492 46.4756C43.8742 46.4756 41.9492 48.4006 41.9492 50.8506C41.9492 53.3006 43.8742 55.2256 46.1492 55.2256Z" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.72656 44.7256H18.8516" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.10156 40.7002H16.2266" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.7742 28.8004C48.9492 28.8004 54.7242 23.0254 54.7242 15.8504C54.7242 8.67539 48.9492 2.90039 41.7742 2.90039C34.5992 2.90039 28.8242 8.67539 28.8242 15.8504C28.8242 22.8504 34.5992 28.8004 41.7742 28.8004Z" fill="#FFB709"/>
<path d="M36.1758 13.5754L41.2508 23.3754L48.4258 9.90039" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>

      ), 
      title: 'Delivery from 1 hour', 
      description: 'Fast and reliable delivery within an hour.' 
    }
  ];

  return (
    <div className={styles.featureContainer}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <div className={styles.icon}>{feature.icon}</div>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.description}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
