import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterLeft}>
          <h2>Join our newsletter for £10 offs</h2>
          <p>
            Register now to get the latest updates on promotions & coupons.
            Don't worry, we don’t spam!
          </p>
        </div>
        <div className={styles.newsletterRight}>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Enter your email address" />
            <button>SEND</button>
          </div>
          <small>
            By subscribing, you agree to our <a href="#">Terms & Conditions</a>{" "}
              and  <a href="#"> Privacy & Cookies Policy</a>.
          </small>
        </div>
      </div>

      <div className={styles.sections}>
        <div className={styles.section}>
          <h3>Do You Need Help?</h3>
          <p>
            Autoseigen syr. Nek diarsak fröbomba. Nör antpol kyonda nynat.
            Pressa fämoska.
          </p>
          <p>
            <strong>Monday-Friday: 08am-9pm</strong>
          </p>
          <p>
            Phone: <a href="tel: 011-420-0349"> 011-420-0349</a>
          </p>
          <p>
            Email: <a href="mailto:info@shopsphere.com">info@shopsphere.com</a>
          </p>
        </div>

        <div className={styles.section}>
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Grogin</li>
            <li>Sell Your Services on Grogin</li>
            <li>Sell on Grogin Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Let Us Help You</h3>
          <ul>
            <li>Accessibility Statement</li>
            <li>Your Orders</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers for Grogin</li>
            <li>About Grogin</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Download our app</h3>
          <div className={styles.appLinks}>
            <svg
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <defs>
                  {" "}
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="linearGradient-1"
                  >
                    {" "}
                    <stop stop-color="#17C9FB" offset="0%">
                      {" "}
                    </stop>{" "}
                    <stop stop-color="#1A74E8" offset="100%">
                      {" "}
                    </stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <g>
                  {" "}
                  <path
                    d="M56.0638473,0 L199.936153,0 C230.899361,-6.57084692e-15 256,25.1006394 256,56.0638473 L256,199.936153 C256,230.899361 230.899361,256 199.936153,256 L56.0638473,256 C25.1006394,256 0,230.899361 0,199.936153 L0,56.0638473 C0,25.1006394 25.1006394,6.57084692e-15 56.0638473,0 Z"
                    fill="url(#linearGradient-1)"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M82.041678,185.810289 L82.0657467,185.817889 L73.3130924,200.977891 C70.1182861,206.51167 63.0418283,208.407779 57.5080489,205.212719 C51.9745229,202.018166 50.0784142,194.941709 53.2732205,189.407929 L59.7211046,178.240042 L60.3397975,177.16835 C61.4449319,175.579561 64.1720448,172.838767 69.6270308,173.353838 C69.6270308,173.353838 82.4637674,174.747037 83.3925667,181.418887 C83.3928201,181.418887 83.5194976,183.614461 82.041678,185.810289 L82.041678,185.810289 Z M206.18511,147.089287 L178.890925,147.089287 C177.032313,146.96489 176.22031,146.3011 175.901843,145.915241 L175.881574,145.880024 L146.663918,95.2738878 L146.626168,95.2992233 L144.873712,92.786702 C142.002187,88.3953002 137.442051,99.6272864 137.442051,99.6272864 C131.997452,112.142769 138.21453,126.372451 140.382488,130.673152 L180.963875,200.962183 C184.158428,206.495962 191.234886,208.392071 196.768665,205.197011 C202.302191,202.002458 204.1983,194.926001 201.003494,189.392221 L190.855613,171.815973 C190.659263,171.390337 190.316981,170.233771 192.398038,170.229211 L206.18511,170.229211 C212.574975,170.229211 217.755071,165.049115 217.755071,158.659249 C217.755071,152.269383 212.574975,147.089287 206.18511,147.089287 Z M153.171088,162.818324 C153.171088,162.818324 154.627879,170.228957 148.99073,170.228957 L143.353582,170.228957 L143.353582,170.229211 L48.0918579,170.229211 C41.701992,170.229211 36.5218962,165.049115 36.5218962,158.659249 C36.5218962,152.269383 41.701992,147.089287 48.0918579,147.089287 L74.0318604,147.089287 C78.2198182,146.846573 79.2127163,144.42906 79.2127163,144.42906 L79.2355183,144.440715 L113.095904,85.7925846 L113.08577,85.7905577 C113.703196,84.6575543 113.189139,83.5871295 113.099704,83.417635 L101.917376,64.0494072 C98.7223163,58.5156278 100.618425,51.4394233 106.152204,48.244617 C111.685984,45.0495574 118.761935,46.9456661 121.956994,52.4794455 L127.143171,61.4623995 L132.320226,52.4954068 C135.515033,46.9616274 142.591237,45.0655188 148.125016,48.2605784 C153.658796,51.455638 155.554904,58.5318425 152.359845,64.0653685 L105.242153,145.675313 C105.036176,146.172142 104.97309,146.951969 106.505888,147.089287 L134.670094,147.089287 L134.676174,147.363671 C134.676174,147.363671 150.954231,147.617026 153.171088,162.818324 Z"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            {/* <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#3A559F;} .st2{fill:#F4F4F4;} .st3{fill:#FF0084;} .st4{fill:#0063DB;} .st5{fill:#00ACED;} .st6{fill:#FFEC06;} .st7{fill:#FF0000;} .st8{fill:#25D366;} .st9{fill:#0088FF;} .st10{fill:#314358;} .st11{fill:#EE6996;} .st12{fill:#01AEF3;} .st13{fill:#FFFEFF;} .st14{fill:#F06A35;} .st15{fill:#00ADEF;} .st16{fill:#1769FF;} .st17{fill:#1AB7EA;} .st18{fill:#6001D1;} .st19{fill:#E41214;} .st20{fill:#05CE78;} .st21{fill:#7B519C;} .st22{fill:#FF4500;} .st23{fill:#00F076;} .st24{fill:#FFC900;} .st25{fill:#00D6FF;} .st26{fill:#FF3A44;} .st27{fill:#FF6A36;} .st28{fill:#0061FE;} .st29{fill:#F7981C;} .st30{fill:#EE1B22;} .st31{fill:#EF3561;} .st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st33{fill:#0097D3;} .st34{fill:#01308A;} .st35{fill:#019CDE;} .st36{fill:#FFD049;} .st37{fill:#16A05D;} .st38{fill:#4486F4;} .st39{fill:none;} .st40{fill:#34A853;} .st41{fill:#4285F4;} .st42{fill:#FBBC05;} .st43{fill:#EA4335;} </style> <g> <path class="st23" d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"></path> <path class="st24" d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"></path> <path class="st25" d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"></path> <path class="st26" d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"></path> </g> </g></svg> */}
            {/* <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FFFFFF;} .st1{fill:#3A559F;} .st2{fill:#F4F4F4;} .st3{fill:#FF0084;} .st4{fill:#0063DB;} .st5{fill:#00ACED;} .st6{fill:#FFEC06;} .st7{fill:#FF0000;} .st8{fill:#25D366;} .st9{fill:#0088FF;} .st10{fill:#314358;} .st11{fill:#EE6996;} .st12{fill:#01AEF3;} .st13{fill:#FFFEFF;} .st14{fill:#F06A35;} .st15{fill:#00ADEF;} .st16{fill:#1769FF;} .st17{fill:#1AB7EA;} .st18{fill:#6001D1;} .st19{fill:#E41214;} .st20{fill:#05CE78;} .st21{fill:#7B519C;} .st22{fill:#FF4500;} .st23{fill:#00F076;} .st24{fill:#FFC900;} .st25{fill:#00D6FF;} .st26{fill:#FF3A44;} .st27{fill:#FF6A36;} .st28{fill:#0061FE;} .st29{fill:#F7981C;} .st30{fill:#EE1B22;} .st31{fill:#EF3561;} .st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;} .st33{fill:#0097D3;} .st34{fill:#01308A;} .st35{fill:#019CDE;} .st36{fill:#FFD049;} .st37{fill:#16A05D;} .st38{fill:#4486F4;} .st39{fill:none;} .st40{fill:#34A853;} .st41{fill:#4285F4;} .st42{fill:#FBBC05;} .st43{fill:#EA4335;} </style> <g> <path class="st23" d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"></path> <path class="st24" d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"></path> <path class="st25" d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"></path> <path class="st26" d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"></path> </g> </g></svg> */}
            <svg
              viewBox="-9 0 274 274"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                    fill="#FFD900"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                    fill="#F43249"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                    fill="#00EE76"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                    fill="#00D3FF"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2024 Example. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="#">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-width="12"
                  d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
                />
              </g>
            </svg>
          </a>
          <a href="#">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#000000"
                stroke-width="12"
                d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
              />
              <circle
                cx="96"
                cy="96"
                r="30"
                stroke="#000000"
                stroke-width="12"
              />
              <circle cx="135" cy="57" r="9" fill="#000000" />
            </svg>
          </a>
          <a href="#">
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
		c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
		c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
		c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
		c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                />
                <path
                  d="M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12
		c-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6
		c0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5
		c-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7
		c0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className={styles.paymentMethods}>
          <svg
            viewBox="0 -11 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                x="0.5"
                y="0.5"
                width="69"
                height="47"
                rx="5.5"
                fill="white"
                stroke="#D9D9D9"
              ></rect>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2505 32.5165H17.0099L13.8299 20.3847C13.679 19.8267 13.3585 19.3333 12.8871 19.1008C11.7106 18.5165 10.4142 18.0514 9 17.8169V17.3498H15.8313C16.7742 17.3498 17.4813 18.0514 17.5991 18.8663L19.2491 27.6173L23.4877 17.3498H27.6104L21.2505 32.5165ZM29.9675 32.5165H25.9626L29.2604 17.3498H33.2653L29.9675 32.5165ZM38.4467 21.5514C38.5646 20.7346 39.2717 20.2675 40.0967 20.2675C41.3931 20.1502 42.8052 20.3848 43.9838 20.9671L44.6909 17.7016C43.5123 17.2345 42.216 17 41.0395 17C37.1524 17 34.3239 19.1008 34.3239 22.0165C34.3239 24.2346 36.3274 25.3992 37.7417 26.1008C39.2717 26.8004 39.861 27.2675 39.7431 27.9671C39.7431 29.0165 38.5646 29.4836 37.3881 29.4836C35.9739 29.4836 34.5596 29.1338 33.2653 28.5494L32.5582 31.8169C33.9724 32.3992 35.5025 32.6338 36.9167 32.6338C41.2752 32.749 43.9838 30.6502 43.9838 27.5C43.9838 23.5329 38.4467 23.3004 38.4467 21.5514ZM58 32.5165L54.82 17.3498H51.4044C50.6972 17.3498 49.9901 17.8169 49.7544 18.5165L43.8659 32.5165H47.9887L48.8116 30.3004H53.8772L54.3486 32.5165H58ZM51.9936 21.4342L53.1701 27.1502H49.8723L51.9936 21.4342Z"
                fill="#172B85"
              ></path>{" "}
            </g>
          </svg>
          <svg
            viewBox="0 -139.5 750 750"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <desc>Created with Sketch.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="paypal" fill-rule="nonzero">
                  {" "}
                  <path
                    d="M697.115385,0 L52.8846154,0 C23.7240385,0 0,23.1955749 0,51.7065868 L0,419.293413 C0,447.804425 23.7240385,471 52.8846154,471 L697.115385,471 C726.274038,471 750,447.804425 750,419.293413 L750,51.7065868 C750,23.1955749 726.274038,0 697.115385,0 Z"
                    id="Shape"
                    fill="#FFFFFF"
                  >
                    {" "}
                  </path>{" "}
                  <g id="Group" transform="translate(54.000000, 150.000000)">
                    {" "}
                    <path
                      d="M109.272795,8.45777679 C101.24875,2.94154464 90.7780357,0.176741071 77.8606518,0.176741071 L27.8515268,0.176741071 C23.8915714,0.176741071 21.7038036,2.15719643 21.2882232,6.11333036 L0.972553571,133.638223 C0.761419643,134.890696 1.07477679,136.03617 1.90975893,137.077509 C2.73996429,138.120759 3.78416964,138.639518 5.03473214,138.639518 L28.7887321,138.639518 C32.9550446,138.639518 35.2450357,136.663839 35.6653929,132.701973 L41.2905357,98.3224911 C41.4959375,96.6563482 42.2286964,95.3016518 43.4792589,94.2584018 C44.7288661,93.2170625 46.2918304,92.5358929 48.1671964,92.2234911 C50.0425625,91.9139554 51.8109286,91.7582321 53.4808929,91.7582321 C55.1460804,91.7582321 57.124625,91.8633214 59.4203482,92.0706339 C61.7103393,92.2789018 63.170125,92.3801696 63.7958839,92.3801696 C81.7145625,92.3801696 95.7793304,87.3311071 105.991143,77.2224732 C116.198179,67.1176607 121.307429,53.1054375 121.307429,35.1829375 C121.307429,22.8903571 117.293018,13.9826071 109.272795,8.45777679 Z M83.4877054,46.7484911 C82.4425446,54.0426429 79.7369732,58.8328036 75.3614375,61.1256607 C70.9849464,63.4213839 64.7340446,64.5620804 56.6087321,64.5620804 L46.2937411,64.8754375 L51.6083929,31.43125 C52.0230179,29.1412589 53.3767589,27.9948304 55.6705714,27.9948304 L61.6109821,27.9948304 C69.9416964,27.9948304 75.9881518,29.1957143 79.7388839,31.5879286 C83.4877054,33.985875 84.7382679,39.041625 83.4877054,46.7484911 Z"
                      id="Shape"
                      fill="#003087"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M637.026411,0.176741071 L613.899125,0.176741071 C611.601491,0.176741071 610.248705,1.32316964 609.835991,3.61507143 L589.518411,133.638223 L589.205054,134.263027 C589.205054,135.310098 589.622545,136.295071 590.457527,137.233232 C591.286777,138.169482 592.332893,138.638562 593.581545,138.638562 L614.212482,138.638562 C618.16575,138.638562 620.354473,136.662884 620.776741,132.701018 L641.092411,4.86276786 L641.092411,4.55227679 C641.091455,1.63557143 639.732938,0.176741071 637.026411,0.176741071 Z"
                      id="Shape"
                      fill="#009CDE"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M357.599732,50.4973125 C357.599732,49.4578839 357.18033,48.4662232 356.352036,47.5299732 C355.516098,46.5927679 354.576982,46.1217768 353.538509,46.1217768 L329.471152,46.1217768 C327.174473,46.1217768 325.300063,47.1688482 323.845054,49.24675 L290.714223,98.0081786 L276.962812,51.1240268 C275.916696,47.7917411 273.62575,46.1217768 270.086152,46.1217768 L246.641687,46.1217768 C245.597482,46.1217768 244.659321,46.5918125 243.831027,47.5299732 C242.995089,48.4662232 242.580464,49.4588393 242.580464,50.4973125 C242.580464,50.9176696 244.612509,57.0615714 248.674687,68.9385714 C252.736866,80.8174821 257.113357,93.6326429 261.80225,107.38692 C266.491143,121.137375 268.936857,128.434393 269.147036,129.262688 C252.059518,152.602063 243.51767,165.104821 243.51767,166.769054 C243.51767,169.480357 244.871411,170.833143 247.580804,170.833143 L271.648161,170.833143 C273.940062,170.833143 275.814473,169.793714 277.274259,167.709125 L356.976839,52.6850804 C357.391464,52.2704554 357.599732,51.5443839 357.599732,50.4973125 Z"
                      id="Shape"
                      fill="#003087"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M581.704545,46.1217768 L557.948634,46.1217768 C555.030018,46.1217768 553.263562,49.5601071 552.638759,56.4367679 C547.215196,48.1060536 537.323429,43.9330536 522.943393,43.9330536 C507.940464,43.9330536 495.174982,49.5601071 484.655545,60.8123036 C474.13133,72.0654554 468.872089,85.2990625 468.872089,100.508348 C468.872089,112.80475 472.465187,122.597161 479.653295,129.887491 C486.842357,137.185464 496.479045,140.827286 508.568134,140.827286 C514.608857,140.827286 520.755625,139.574813 527.006527,137.076554 C533.258384,134.576384 538.150768,131.244098 541.698964,127.07492 C541.698964,127.284143 541.486875,128.220393 541.073205,129.886536 C540.652848,131.5565 540.447446,132.808973 540.447446,133.637268 C540.447446,136.975286 541.798321,138.637607 544.511536,138.637607 L566.079679,138.637607 C570.032946,138.637607 572.32867,136.661929 572.952518,132.700063 L585.768634,51.1230714 C585.974036,49.8725089 585.661634,48.7279911 584.830473,47.6847411 C583.994536,46.6443571 582.955107,46.1217768 581.704545,46.1217768 Z M540.916527,107.696455 C535.60283,112.906018 529.196205,115.509366 521.694741,115.509366 C515.649241,115.509366 510.756857,113.845134 507.004214,110.509027 C503.252527,107.180563 501.377161,102.595804 501.377161,96.7566607 C501.377161,89.0517054 503.981464,82.5361696 509.191982,77.2224732 C514.395812,71.9087768 520.860714,69.2519286 528.571402,69.2519286 C534.400036,69.2519286 539.245607,70.9715714 543.104295,74.4089464 C546.956295,77.8472768 548.888027,82.5896696 548.888027,88.6323036 C548.887071,96.1328125 546.229268,102.489759 540.916527,107.696455 Z"
                      id="Shape"
                      fill="#009CDE"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M226.639375,46.1217768 L202.885375,46.1217768 C199.963893,46.1217768 198.196482,49.5601071 197.570723,56.4367679 C191.944625,48.1060536 182.04617,43.9330536 167.877268,43.9330536 C152.874339,43.9330536 140.109813,49.5601071 129.588464,60.8123036 C119.06425,72.0654554 113.805009,85.2990625 113.805009,100.508348 C113.805009,112.80475 117.400018,122.597161 124.58908,129.887491 C131.778143,137.185464 141.41292,140.827286 153.500098,140.827286 C159.331598,140.827286 165.378054,139.574813 171.628,137.076554 C177.878902,134.576384 182.880196,131.244098 186.630929,127.07492 C185.794991,129.575089 185.380366,131.763813 185.380366,133.637268 C185.380366,136.975286 186.734107,138.637607 189.4435,138.637607 L211.009732,138.637607 C214.965866,138.637607 217.260634,136.661929 217.886393,132.700063 L230.700598,51.1230714 C230.906,49.8725089 230.593598,48.7279911 229.763393,47.6847411 C228.929366,46.6443571 227.888982,46.1217768 226.639375,46.1217768 Z M185.850402,107.851223 C180.53575,112.962384 174.02117,115.509366 166.316214,115.509366 C160.269759,115.509366 155.425143,113.845134 151.781411,110.509027 C148.132902,107.180563 146.311036,102.595804 146.311036,96.7566607 C146.311036,89.0517054 148.914384,82.5361696 154.125857,77.2224732 C159.331598,71.9087768 165.791723,69.2519286 173.504321,69.2519286 C179.335821,69.2519286 184.180437,70.9715714 188.039125,74.4089464 C191.891125,77.8472768 193.820946,82.5896696 193.820946,88.6323036 C193.820946,96.3420357 191.164098,102.751527 185.850402,107.851223 Z"
                      id="Shape"
                      fill="#003087"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M464.337964,8.45777679 C456.314875,2.94154464 445.846071,0.176741071 432.926777,0.176741071 L383.230054,0.176741071 C379.05992,0.176741071 376.767062,2.15719643 376.353393,6.11333036 L356.037723,133.637268 C355.826589,134.889741 356.138991,136.035214 356.974929,137.076554 C357.802268,138.119804 358.849339,138.638563 360.099902,138.638563 L385.728312,138.638563 C388.228482,138.638563 389.894625,137.285777 390.729607,134.576384 L396.356661,98.3215357 C396.563018,96.6553929 397.292911,95.3006964 398.544429,94.2574464 C399.794991,93.2161071 401.356045,92.5349375 403.233321,92.2225357 C405.107732,91.913 406.876098,91.7572768 408.547018,91.7572768 C410.212205,91.7572768 412.19075,91.8623661 414.483607,92.0696786 C416.775509,92.2779464 418.238161,92.3792143 418.859143,92.3792143 C436.780687,92.3792143 450.843545,87.3301518 461.055357,77.2215179 C471.265259,67.1167054 476.370687,53.1044821 476.370687,35.1819821 C476.371643,22.8903571 472.358187,13.9826071 464.337964,8.45777679 Z M432.301018,59.8750982 C427.716259,63.0000714 420.839598,64.5620804 411.672946,64.5620804 L401.670357,64.8754375 L406.985009,31.43125 C407.397723,29.1412589 408.751464,27.9948304 411.047187,27.9948304 L416.671375,27.9948304 C421.254223,27.9948304 424.900821,28.2030982 427.614036,28.6186786 C430.318652,29.0390357 432.926777,30.3373661 435.426946,32.5251339 C437.929027,34.7138571 439.177679,37.8923304 439.177679,42.0595982 C439.177679,50.8106696 436.882911,56.7482143 432.301018,59.8750982 Z"
                      id="Shape"
                      fill="#009CDE"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <svg
            viewBox="0 -9 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                x="0.5"
                y="0.5"
                width="57"
                height="39"
                rx="3.5"
                fill="white"
                stroke="#F3F3F3"
              ></rect>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.6494 12.7211V27.2361H52.6426V12.0115L48.6494 12.7211"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.8205 12.7211L46.8111 12.0115V27.2361H42.8205V12.7211"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.136 27.2361V16.1005H41.1286V27.2361H37.136"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37.1636 13.0775C37.1636 11.9975 38.0453 11.1213 39.1311 11.1213C40.2187 11.1213 41.0998 11.9975 41.0998 13.0775C41.0998 14.1583 40.2187 15.0325 39.1311 15.0325C38.0453 15.0325 37.1636 14.1583 37.1636 13.0775"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.884 15.9372C31.1952 16.0554 29.3211 17.7009 29.3211 20.9717V27.2361H33.3469V22.1267C33.3469 20.1692 33.6052 19.33 35.9435 19.2499V15.9951C35.5503 15.9118 34.884 15.9372 34.884 15.9372V15.9372"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.0524 16.0878C23.9641 16.3102 23.326 18.105 21.7786 19.9647V12.0115L17.6582 12.8215V27.2361H21.7786V22.7798C22.9717 24.5588 23.5613 27.2361 23.5613 27.2361H28.4957C28.0078 25.2195 25.8728 21.5022 25.8728 21.5022C27.7897 19.0866 28.6306 16.5141 28.7649 16.0878H24.0524"
                fill="#862165"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7487 17.6755C10.2442 17.6431 9.0753 17.5675 9.0753 16.5224C9.0753 15.2612 10.757 15.2612 11.3881 15.2612C12.4981 15.2612 13.9342 15.5865 14.9611 15.8921C14.9611 15.8921 15.5328 16.0929 16.0194 16.2975L16.0648 16.3102V12.8558L16.004 12.8374C14.7917 12.4162 13.3843 12.0115 10.7736 12.0115C6.27274 12.0115 4.67804 14.6157 4.67804 16.8489C4.67804 18.1349 5.23305 21.1642 10.3861 21.513C10.8241 21.5397 11.984 21.6064 11.984 22.6864C11.984 23.5785 11.0345 24.1033 9.43785 24.1033C7.68841 24.1033 5.99012 23.6611 4.95938 23.2398V26.7965C6.50293 27.1999 8.24342 27.3994 10.2832 27.3994C14.6823 27.3994 16.6543 24.9349 16.6543 22.4914C16.6543 19.722 14.449 17.922 10.7487 17.6755V17.6755"
                fill="#862165"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
