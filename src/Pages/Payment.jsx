import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Payment = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  const price = products[0].price;

  const upi = "netc.34161FA820328AA2D1DB3820@mairtel";

  const paytm_link = `paytmmp://cash_wallet?pa=${upi}&pn=Shop&am=${price}&tr=&mc=8999&cu=INR&tn=Order:asdfsdfdfde766c&sign=AAuN7izDWN5cb8A5scnUiNME+LkZqI2DWgkXlN1McoP6WZABa/KkFTiLvuPRP6/nWK8BPg/rPhb+u4QMrUEX10UsANTDbJaALcSM9b8Wk218X+55T/zOzb7xoiB+BcX8yYuYayELImXJHIgL/c7nkAnHrwUCmbM97nRbCVVRvU0ku3Tr&featuretype=money_transfer`;

  const phonepe_link = `phonepe://pay?pa=${upi}&pn=Meesho%20&am=${price}&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Meesho`;

  return (
    <div class="w-full h-full bg-gray-100 pb-[200px]">
      <div class="w-full fixed top-0 z-[9999999]">
        <div class="w-full">
          <div class="w-full bg-white px-[24px] gap-[16px] py-[16px] flex justify-start items-center border-b-[1px] border-[#cecede]">
            <button type="button" class="m-0 p-0 w-fit bg-transparent">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#353543"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7461 2.31408C13.5687 2.113 13.3277 2 13.0765 2C12.8252 2 12.5843 2.113 12.4068 2.31408L6.27783 9.24294C5.90739 9.66174 5.90739 10.3382 6.27783 10.757L12.4068 17.6859C12.7773 18.1047 13.3757 18.1047 13.7461 17.6859C14.1166 17.2671 14.0511 16.5166 13.7461 16.1718L8.29154 9.99462L13.7461 3.82817C13.9684 3.57691 14.1071 2.72213 13.7461 2.31408Z"
                  class="w-[20px] h-[20px]"
                ></path>
              </svg>
            </button>
            <p class="text-[13px] w-fit text-center text-[rgb(53_53_67)] font-[500]">
              PAYMENT METHOD
            </p>
          </div>
          <div class="w-full min-w-[300px] h-full bg-white p-[8px] flex justify-center items-center border-b-[1px] border-[#cecede]">
            <ul class="w-full flex items-center justify-center p-0 m-0 list-none">
              <div class="flex flex-col items-center w-1/2 gap-[6px] max-w-200">
                <div class="w-full flex items-center justify-center p-0 m-0">
                  <div class="flex-grow h-[2px] bg-blue-500 invisible"></div>
                  <div class="flex justify-center items-center w-[20px] h-[20px] rounded-full border-2 border-blue-500 text-blue-500 text-sm">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0.5 0 20 20"
                      class="w-[20px] h-[20px]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.25"
                        y="0.75"
                        width="18.5"
                        height="18.5"
                        rx="9.25"
                        fill="#5585F8"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.6716 7.37285C17.0971 6.96439 17.1108 6.28832 16.7023 5.86289C16.2939 5.43755 15.618 5.4238 15.1926 5.83218L10.9997 9.85723L10.9997 9.85727L9.02229 11.7557L6.82333 9.55674C6.40622 9.13963 5.72995 9.13963 5.31284 9.55674C4.8957 9.97388 4.89573 10.6502 5.31289 11.0673L8.26525 14.0192C8.66883 14.4227 9.32103 14.4293 9.73274 14.0341L10.9998 12.8178V12.8178L16.6716 7.37285Z"
                        fill="white"
                      ></path>
                      <rect
                        x="1.25"
                        y="0.75"
                        width="18.5"
                        height="18.5"
                        rx="9.25"
                        stroke="#5585F8"
                        stroke-width="1.5"
                      ></rect>
                    </svg>
                  </div>
                  <div class="flex-grow h-[2px] bg-blue-500"></div>
                </div>
                <div class="text-[11px] font-normal text-[#353543]">Review</div>
              </div>
              <div class="flex flex-col items-center w-1/2 gap-[6px] max-w-200">
                <div class="w-full flex items-center justify-center p-0 m-0">
                  <div class="flex-grow h-[2px] bg-blue-500 visible"></div>
                  <div class="flex justify-center items-center w-[20px] h-[20px] rounded-full border-2 border-blue-500 text-blue-500 text-xs">
                    2
                  </div>
                  <div class="flex-grow h-[2px] bg-blue-500 invisible"></div>
                </div>
                <div class="text-[11px] font-normal text-[#353543]">
                  Payment
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-[rgb(234_234_242)] pb-2 w-full pt-[114px]">
        <div class="w-full h-full bg-white">
          <div class="flex justify-between items-center pb-[18px] pt-[16px] px-[16px]">
            <p class="text-[14px] font-[600] text-[#353543]">
              Select Payment Method
            </p>
            <svg
              width="80"
              height="24"
              viewBox="0 0 80 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1172 3C10.3409 3 9.04382 3.29813 7.82319 3.63C6.57444 3.9675 5.31557 4.36687 4.57532 4.60875C4.26582 4.71096 3.99143 4.8984 3.78367 5.14954C3.57591 5.40068 3.44321 5.70533 3.40082 6.0285C2.73032 11.0651 4.28619 14.7979 6.17394 17.2672C6.97447 18.3236 7.92897 19.2538 9.00557 20.0269C9.43982 20.334 9.84257 20.5691 10.1845 20.73C10.4995 20.8785 10.8382 21 11.1172 21C11.3962 21 11.7337 20.8785 12.0498 20.73C12.4621 20.5296 12.8565 20.2944 13.2288 20.0269C14.3054 19.2538 15.2599 18.3236 16.0604 17.2672C17.9482 14.7979 19.504 11.0651 18.8335 6.0285C18.7912 5.70518 18.6586 5.40035 18.4508 5.14901C18.2431 4.89768 17.9686 4.71003 17.659 4.60762C16.5845 4.25529 15.5015 3.92894 14.4112 3.62888C13.1905 3.29925 11.8934 3 11.1172 3ZM13.5314 9.68925C13.637 9.58363 13.7803 9.52429 13.9297 9.52429C14.079 9.52429 14.2223 9.58363 14.3279 9.68925C14.4335 9.79487 14.4929 9.93813 14.4929 10.0875C14.4929 10.2369 14.4335 10.3801 14.3279 10.4858L10.9529 13.8608C10.9007 13.9131 10.8386 13.9547 10.7703 13.9831C10.7019 14.0114 10.6287 14.026 10.5547 14.026C10.4807 14.026 10.4074 14.0114 10.3391 13.9831C10.2707 13.9547 10.2087 13.9131 10.1564 13.8608L8.46894 12.1733C8.41664 12.121 8.37516 12.0589 8.34685 11.9905C8.31855 11.9222 8.30398 11.849 8.30398 11.775C8.30398 11.701 8.31855 11.6278 8.34685 11.5595C8.37516 11.4911 8.41664 11.429 8.46894 11.3767C8.52124 11.3244 8.58333 11.283 8.65166 11.2547C8.71999 11.2264 8.79323 11.2118 8.86719 11.2118C8.94115 11.2118 9.01439 11.2264 9.08272 11.2547C9.15105 11.283 9.21314 11.3244 9.26544 11.3767L10.5547 12.6671L13.5314 9.68925Z"
                fill="#ADC6FF"
              ></path>
              <path
                d="M24.1172 3.53998L24.2472 4.65998L26.0372 3.67998V9.49998H27.1472V2.49998H26.1472L24.1172 3.53998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M31.5958 9.64998C33.2058 9.64998 34.2458 8.19998 34.2458 5.99998C34.2458 3.79998 33.2058 2.34998 31.5658 2.34998C29.9458 2.34998 28.9158 3.79998 28.9158 5.99998C28.9158 8.19998 29.9458 9.64998 31.5958 9.64998ZM31.5958 8.62998C30.5958 8.62998 30.0658 7.55998 30.0658 5.99998C30.0658 4.43998 30.5858 3.36998 31.5658 3.36998C32.5658 3.36998 33.0958 4.43998 33.0958 5.99998C33.0958 7.55998 32.5658 8.62998 31.5958 8.62998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M38.149 9.64998C39.759 9.64998 40.799 8.19998 40.799 5.99998C40.799 3.79998 39.759 2.34998 38.119 2.34998C36.499 2.34998 35.469 3.79998 35.469 5.99998C35.469 8.19998 36.499 9.64998 38.149 9.64998ZM38.149 8.62998C37.149 8.62998 36.619 7.55998 36.619 5.99998C36.619 4.43998 37.139 3.36998 38.119 3.36998C39.119 3.36998 39.649 4.43998 39.649 5.99998C39.649 7.55998 39.119 8.62998 38.149 8.62998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M43.4923 6.24998C44.3823 6.24998 45.0923 5.55998 45.0923 4.29998C45.0923 3.03998 44.3823 2.34998 43.4923 2.34998C42.6123 2.34998 41.9023 3.03998 41.9023 4.29998C41.9023 5.55998 42.6123 6.24998 43.4923 6.24998ZM48.2923 2.49998H47.4323L42.7823 9.49998H43.6423L48.2923 2.49998ZM43.4923 5.43998C43.0623 5.43998 42.7623 5.06998 42.7623 4.29998C42.7623 3.52998 43.0623 3.15998 43.4923 3.15998C43.9223 3.15998 44.2323 3.52998 44.2323 4.29998C44.2323 5.06998 43.9223 5.43998 43.4923 5.43998ZM47.5823 9.64998C48.4723 9.64998 49.1823 8.95998 49.1823 7.69998C49.1823 6.43998 48.4723 5.74998 47.5823 5.74998C46.7023 5.74998 45.9923 6.43998 45.9923 7.69998C45.9923 8.95998 46.7023 9.64998 47.5823 9.64998ZM47.5823 8.83998C47.1523 8.83998 46.8523 8.46998 46.8523 7.69998C46.8523 6.92998 47.1523 6.55998 47.5823 6.55998C48.0223 6.55998 48.3223 6.92998 48.3223 7.69998C48.3223 8.46998 48.0223 8.83998 47.5823 8.83998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M55.4541 9.64998C56.9141 9.64998 57.9341 8.78998 57.9341 7.47998C57.9341 4.79998 54.3341 5.96998 54.3341 4.29998C54.3341 3.69998 54.8141 3.34998 55.4641 3.34998C56.2141 3.34998 56.6841 3.78998 56.7941 4.42998L57.9041 4.22998C57.7241 3.12998 56.8241 2.34998 55.4941 2.34998C54.1441 2.34998 53.1741 3.16998 53.1741 4.39998C53.1741 7.07998 56.7641 5.90998 56.7641 7.59998C56.7641 8.22998 56.2541 8.65998 55.4841 8.65998C54.7941 8.65998 54.1341 8.28998 54.0141 7.57998L52.9041 7.81998C53.1041 8.98998 54.2041 9.64998 55.4541 9.64998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M65.2964 9.49998L62.6764 2.45998H61.4064L58.7864 9.49998H59.9964L60.6264 7.68998H63.4264L64.0664 9.49998H65.2964ZM62.0564 3.73998L63.0864 6.65998H60.9964L62.0164 3.73998H62.0564Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M71.3322 2.49998H66.7522V9.49998H67.8922V6.54998H70.4722V5.50998H67.8922V3.53998H71.3322V2.49998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M77.6917 2.49998H73.0417V9.49998H77.6917V8.45998H74.1817V6.49998H76.8417V5.44998H74.1817V3.53998H77.6917V2.49998Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M27.307 18.9C28.657 18.9 29.627 17.95 29.627 16.7C29.627 15.33 28.537 14.5 27.207 14.5H24.717V21.5H25.857V18.9H27.307ZM28.447 16.7C28.447 17.31 28.027 17.85 27.117 17.85H25.857V15.55H27.007C28.037 15.55 28.447 16.11 28.447 16.7Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M36.4524 21.5L33.8324 14.46H32.5624L29.9424 21.5H31.1524L31.7824 19.69H34.5824L35.2224 21.5H36.4524ZM33.2124 15.74L34.2424 18.66H32.1524L33.1724 15.74H33.2124Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M39.6613 21.5V18.57L42.0913 14.5H40.8413L39.1513 17.45H39.1013L37.4113 14.5H36.0813L38.5213 18.57V21.5H39.6613Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M50.8513 21.5V14.5H49.1513L47.1513 19.76H47.1113L45.1213 14.5H43.3513V21.5H44.4913V15.98H44.5313L46.6113 21.5H47.5913L49.6713 15.98H49.7113V21.5H50.8513Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M57.5103 14.5H52.8604V21.5H57.5103V20.46H54.0004V18.5H56.6604V17.45H54.0004V15.54H57.5103V14.5Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M65.3439 21.54V14.5H64.2039V19.78L60.5339 14.46H59.2639V21.5H60.4039V16.22L64.0739 21.54H65.3439Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M72.0671 14.5H66.7571V15.55H68.8471V21.5H69.9871V15.55H72.0671V14.5Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
              <path
                d="M75.4028 21.65C76.8628 21.65 77.8828 20.79 77.8828 19.48C77.8828 16.8 74.2828 17.97 74.2828 16.3C74.2828 15.7 74.7628 15.35 75.4128 15.35C76.1628 15.35 76.6328 15.79 76.7428 16.43L77.8528 16.23C77.6728 15.13 76.7728 14.35 75.4428 14.35C74.0928 14.35 73.1228 15.17 73.1228 16.4C73.1228 19.08 76.7128 17.91 76.7128 19.6C76.7128 20.23 76.2028 20.66 75.4328 20.66C74.7428 20.66 74.0828 20.29 73.9628 19.58L72.8528 19.82C73.0528 20.99 74.1528 21.65 75.4028 21.65Z"
                class="fill-[rgb(139_139_163)]"
              ></path>
            </svg>
          </div>
          <div class="pb-[18px] px-[20px]">
            <div class="w-full flex justify-between items-center text-left bg-[#FDE9F2] rounded px-[16px] py-[20px]">
              <p class="text-[#F43397] text-[15px] font-[500] w-full">
                Pay online &amp; get EXTRA ₹25 off
              </p>
            </div>
          </div>
          <div class="px-[16px] py-[6px] w-full flex items-center gap-2 justify-start">
            <p class="text-[#353543] text-[10px] font-[500] w-fit text-nowrap">
              PAY ONLINE
            </p>
            <div class="w-full h-[1px] bg-[rgb(206_206_222)]"></div>
          </div>
          <div class="border-r-0 border-l-0 border-t-0 border-[1px] border-[rgb(206_206_222)]">
            <button
              type="button"
              class="m-0 px-[16px] py-[18px] w-full flex justify-between items-center"
            >
              <div class="flex justify-start items-center gap-2">
                <img
                  class="w-[20px] object-cover"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABACAYAAABx0tv8AAAEbUlEQVR4nO2cP2wbVRzHv3fOxRdfSKwaE1sg5SSoZClDW6FUGZDiCiGidmgWm4EhFnShWVoxwWJ7qYS6lCGdOnhBQgapYQClKoNhgqaDGVJZgkhnCWIHo8gG/C+2cwxN6j9Hbd/Z917u+j6TfXrP7+ePz7977/fs41RVRSfheO49AH4wDJGM+u/0HuNOJIfjuRsAbgOYIByX3VAB/JiM+oMnBzhVVRGO5+4B+JBaWPZkNxn1vwEAfDieewvAB5QDsiOvh+O5+wDAA0gA4KiGY1+uAgAXiu01wPKwmdzkwQSbDk87gBcBJpkATDIBmGQCMMkEYJIJwCQTgEkmAJNMACaZAEwyAQzXLSSRRyxyBkq+iY3Nou7+66tuyL4JxBIHKNeOBrYPBV9CaHl66NcvlFrYztTw7U9lFIot3fHJPgGxiAeJrRJS6aru/p04FoIfx4x0vHXNg/k5AbJPgDTFI/1bfei+kZUZvPOmC+5pBy6cdeLh40rf9pLI49P3z+iKTxJ5nH1tEpcuuNBoqvj198bQfb1uB25dexkuJ4fFgAhlv4m9v5q6xu/ggeF0MT8nPHss+4Q+LbV0tu98nee3N14odDk5rL07g/VV99B9XnE74HK2S+x6318vlixzFkqtvilAEjnNh7d8bgqPMjVsZ2pmh6fBkpJT6Sq+Sv3Tt82CPInIykyX7PVVN9bv/DnUNWCc2HZ2saMcIpY4QKHUPuOf5lgn8VhsKxkAyrUjzRm/GBCJx2FryQA00y9JJP+WbS/5NGB7yTTO3F7oR2Ayl5ekrudGVn+jYmvJsk/AlR7JqXT/1aUZWHKePAhJ5HF5ScKVJalr5Zbdb2BHOSQejyUlh5andRWLAKBSV7GxWTIpov7YOl2cUKmrSGyVoOSHLxKNE0ueyXrI7jewsUlPMGBRyYMKRACg5BvYztSo5OBeLCl5mALRaYJKTva6HTSGpYZhyZV6+w89eoraXrcD3tm25CdZ+l9nszEseUdpbze5nByC56eG6hc87+p6TvOCRArDknt3GCIrswPPaNknaOa3NHYqSGNYcipd1RTEYxEPFuTJ/22/GBARi3i6jj3JHp6Kq7/ZjDS7uLtZRHStLc7l5BBd8yC738CjTDudXAw4NXtuTxcIf48yvGUYSfKOcoi73xRx/Wr3TvD8nDBwF5rmCow0I8+TT3YeIiuzXcWY51Gpq7j95YGuNFGudf81uWLyRui4xzP845ZOlHwTDx9XMClweNUrQJjQyi6UWvju5wo+/7qIP3T+UKT47xEKpRYWAyJ++KWKL743dyEy5vEecKHYnjq4nT5knwBJbIsu19SxpAbZJxBNMWMa76Ypy2qzRJDO4eMa74UoddKGSSYAk0wAJpkATDIBmGQCMMkEYJIJwCQTgEkmAJNMACaZADyAPO0gbM59HsBntKOwMbvJqD/LH9/Ac5d2NDakCeBt4DgnH99TMk0zIptRBXApGfVngY67zgLPbuv7EYBzdGKzPAqArWTU/0nnwf8AobFjj+BIcyoAAAAASUVORK5CYII="
                  alt="img"
                  title="img"
                />
                <p class="text-[#353543] text-[14px] font-[500] w-fit text-nowrap">
                  UPI(GPay/PhonePe/Paytm)
                </p>
                <span class="w-[4px] h-[4px] bg-[#CECECE] rounded-full"></span>
                <p class="text-[13px] font-medium text-[#038D63] text-left">
                  Offers <br /> Available
                </p>
              </div>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 7 12"
                fill="#353543"
                class="w-[12px] h-[12px] -rotate-90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310934 0.315696C-0.103645 0.734816 -0.103645 1.41186 0.310934 1.83097L4.43546 6.00068L0.310934 10.1704C-0.103645 10.5895 -0.103645 11.2665 0.310934 11.6857C0.725513 12.1048 1.39522 12.1048 1.8098 11.6857L6.68907 6.75294C7.10364 6.33382 7.10364 5.65679 6.68907 5.23767L1.8098 0.304949C1.40585 -0.103424 0.725513 -0.103424 0.310934 0.315696Z"
                  class="fill-[rgb(139_139_163)]"
                ></path>
              </svg>
            </button>
            <div class="py-[12px] border-r-0 border-l-0 border-b-0 border-[1px] border-[rgb(206_206_222)]">
              <div class="w-full pl-[52px] pr-[52px] py-[14px] flex justify-start items-start flex-col gap-[20px]">
                <button
                  type="button"
                  class="w-full mx-0 mt-0 p-0 bg-transparent border-none flex justify-between items-center"
                ></button>
                <div>
                  <button
                    type="button"
                    class="w-full mx-0 mt-0 mb-0 p-0 bg-transparent border-none flex justify-between items-center"
                  >
                    <div class="flex justify-start w-fit items-center gap-2">
                      <img
                        class="rounded-full w-[30px] object-cover"
                        src="../../public/phonepe.png"
                        alt="img"
                        title="img"
                      />
                      <p class="text-[14px] font-normal text-[#353543]">
                        Phone Pe
                      </p>
                    </div>
                    <input
                      className="phonepe-button"
                      //   checked={setSelectedOption("phonepe")}
                      id="phonepe-button"
                      type="radio"
                      class="w-[16px] h-[16px] accent-[rgb(159_32_137)]"
                    />
                  </button>
                  <p class="pl-[38px] text-[13px] text-[#E11900] pr-[16px]">
                    Add items worth 69.00 more to avail this offer
                    <span class="ml-[8px] underline">T&amp;C</span>
                  </p>
                </div>
                <button
                  type="button"
                  class="w-full mx-0 mt-0 mb-0 p-0 bg-transparent border-none flex justify-between items-center"
                >
                  <div class="flex justify-start w-fit items-center gap-2">
                    <img
                      class="rounded-full w-[30px] object-cover"
                      src="../../public/paytm.png"
                      alt="img"
                      title="img"
                    />
                    <p class="text-[14px] font-normal text-[#353543]">Paytm</p>
                  </div>
                  <input
                    // checked={setSelectedOption("paytm")}
                    className="paytm-button"
                    id="paytm-button"
                    type="radio"
                    class="w-[16px] h-[16px] accent-[rgb(159_32_137)]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="border-none">
            <button
              type="button"
              class="m-0 px-[16px] py-[18px] w-full flex justify-between items-center"
            >
              <div class="flex justify-start items-center gap-2">
                <img
                  class="w-[20px] object-cover"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAkCAYAAAAkcgIJAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB7dk/SgNBFMfx33tu4h+EgAkYBUHMBUxt5Q3s1E5PEEUvYK+gJ9BOsPIIglprZRcJWGipYMiSxXnO2K6ELd8M79Msu7CwX+ZNsQzBO7356JGTAwFWERkCrlhwcri7NKCz6/c9IVwiYj5owNN5l4Wkh8iFiXL5zBb7rnUkwPkgRkIsRqukYrL7h1ekgNghG+UF0iC2Z9SyGK0sRquss9ZECkj+YlpIgYjtGb0sRiuL0cpitLIYrbL/HnZWZtFu1Se+OC4EL/0hhqMfaFGKCSEb3QaqqNcIj09f0KI0ZuEDq5qfm4ImpZXpv+VYaNTQbk4es28/XppWJSjFjAun7iOr4nC2gQQQ87PfM3KByIUFOd5evOWjneVz/8u5H+MKEejTX+78MeBmuP8FXGFJfqhNO2MAAAAASUVORK5CYII="
                  alt="img"
                  title="img"
                />
                <p class="text-[#353543] text-[14px] font-[500] w-fit text-nowrap">
                  Debit/Credit Cards ( Not Available )
                </p>
              </div>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 7 12"
                fill="#353543"
                class="w-[12px] h-[12px] rotate-90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310934 0.315696C-0.103645 0.734816 -0.103645 1.41186 0.310934 1.83097L4.43546 6.00068L0.310934 10.1704C-0.103645 10.5895 -0.103645 11.2665 0.310934 11.6857C0.725513 12.1048 1.39522 12.1048 1.8098 11.6857L6.68907 6.75294C7.10364 6.33382 7.10364 5.65679 6.68907 5.23767L1.8098 0.304949C1.40585 -0.103424 0.725513 -0.103424 0.310934 0.315696Z"
                  class="fill-[rgb(139_139_163)]"
                ></path>
              </svg>
            </button>
          </div>
          <div class="px-[16px] py-[6px] w-full flex items-center gap-2 justify-start">
            <p class="text-[#353543] text-[10px] font-[500] w-fit text-nowrap">
              PAY IN CASE
            </p>
            <div class="w-full h-[1px] bg-[rgb(206_206_222)]"></div>
          </div>
          <div class="border-none">
            <button
              type="button"
              class="m-0 px-[16px] py-[18px] w-full flex justify-between items-center"
            >
              <div class="flex justify-start items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-[16px] h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="16" height="16" fill="white"></rect>
                  <g clip-path="url(#clip0_1522_56449)">
                    <path
                      d="M13.1306 1.75918L0.0769665 5.93773C-0.468501 6.11233 -0.792684 6.65432 -0.631688 7.15726L1.59253 14.1056C1.75093 14.6005 2.33218 14.8615 2.87765 14.6869L15.9218 10.5114C16.4767 10.3338 16.7915 9.79481 16.6305 9.29187L14.4063 2.34351C14.2479 1.84868 13.6666 1.58759 13.1212 1.76219L13.1306 1.75918Z"
                      fill="#90B1FB"
                    ></path>
                    <path
                      d="M14.9493 3.72461H1.06066C0.4803 3.72461 0 4.11077 0 4.59939V11.8498C0 12.3306 0.4803 12.7246 1.06066 12.7246H14.9393C15.5297 12.7246 16 12.3384 16 11.8498V4.59939C16 4.11865 15.5197 3.72461 14.9393 3.72461H14.9493Z"
                      fill="#5580E6"
                    ></path>
                    <path
                      d="M9.8286 6.9569C9.83963 7.02307 9.86169 7.0782 9.86169 7.14437C9.86169 7.18848 9.86169 7.24362 9.83963 7.28773C9.8286 7.33184 9.79552 7.37595 9.76244 7.40903C9.72936 7.44211 9.69627 7.46417 9.65216 7.4752C9.60805 7.4752 9.56394 7.49725 9.51983 7.49725H8.76996C8.76996 7.77294 8.67071 8.0376 8.51632 8.26918C8.36194 8.51179 8.13036 8.71028 7.85467 8.84262C7.52384 8.997 7.15993 9.09625 6.78499 9.10728L9.22209 10.3424C9.22209 10.3424 9.2662 10.3754 9.28825 10.3975C9.29928 10.4196 9.32134 10.4416 9.33236 10.4637V10.5409C9.33236 10.5409 9.32134 10.596 9.29928 10.607C9.189 10.7394 9.04565 10.8496 8.88023 10.9158C8.70379 10.982 8.51632 11.004 8.33988 10.982C8.1855 10.9709 8.03111 10.9268 7.88775 10.8607C7.76645 10.7945 7.63412 10.7063 7.52384 10.6291L5.60504 9.06317C5.57196 8.997 5.56093 8.91981 5.56093 8.85364C5.56093 8.78748 5.56093 8.71028 5.60504 8.64412C5.63813 8.57795 5.69327 8.52282 5.75943 8.47871H6.34389C6.7078 8.48973 7.06068 8.40151 7.33637 8.20302C7.45768 8.1148 7.55692 8.00452 7.62309 7.88322C7.68926 7.76191 7.73337 7.62958 7.73337 7.48622H5.25216C5.25216 7.48622 5.19703 7.38698 5.186 7.34287C5.16394 7.2767 5.15291 7.21053 5.14189 7.13334C5.14189 7.08923 5.14189 7.03409 5.16394 6.98998C5.17497 6.94587 5.20805 6.90176 5.24113 6.86868C5.27422 6.84663 5.3073 6.82457 5.35141 6.80252C5.39552 6.79149 5.43963 6.78046 5.48374 6.79149H7.76645C7.74439 6.59299 7.67823 6.39449 7.59001 6.20703H5.24113C5.24113 6.20703 5.186 6.10778 5.17497 6.05264C5.15291 5.98648 5.13086 5.90928 5.13086 5.84312C5.13086 5.79901 5.13086 5.74387 5.15291 5.69976C5.17497 5.65565 5.19702 5.61154 5.23011 5.57845C5.26319 5.54537 5.29627 5.52332 5.34038 5.51229C5.38449 5.51229 5.4286 5.49023 5.47271 5.49023H9.72936C9.72936 5.49023 9.79552 5.58948 9.80655 5.64462C9.80655 5.71079 9.83963 5.76592 9.83963 5.84312C9.83963 5.89825 9.83963 5.94236 9.8286 5.9975C9.81758 6.04161 9.78449 6.09675 9.74038 6.12983C9.7073 6.16292 9.67422 6.17394 9.63011 6.196C9.586 6.20703 9.54189 6.21805 9.49778 6.20703H8.53838C8.61557 6.39449 8.67071 6.59299 8.70379 6.79149H9.72936C9.72936 6.79149 9.78449 6.89074 9.80655 6.94587H9.8286V6.9569Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1522_56449">
                      <rect
                        width="16"
                        height="13.25"
                        fill="white"
                        transform="translate(0 1.59961)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p class="text-[#353543] text-[14px] font-[500] w-fit text-nowrap">
                  Cash on Delivery ( Not Available )
                </p>
              </div>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 7 12"
                fill="#353543"
                class="w-[12px] h-[12px] rotate-90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310934 0.315696C-0.103645 0.734816 -0.103645 1.41186 0.310934 1.83097L4.43546 6.00068L0.310934 10.1704C-0.103645 10.5895 -0.103645 11.2665 0.310934 11.6857C0.725513 12.1048 1.39522 12.1048 1.8098 11.6857L6.68907 6.75294C7.10364 6.33382 7.10364 5.65679 6.68907 5.23767L1.8098 0.304949C1.40585 -0.103424 0.725513 -0.103424 0.310934 0.315696Z"
                  class="fill-[rgb(139_139_163)]"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-[rgb(234_234_242)] w-full pb-2">
        <div class="w-full h-full bg-white p-[16px]">
          <div class="flex justify-between items-center">
            <div>
              <p class="w-fit text-[17px] mb-[8px] text-[rgb(53_53_67)] font-bold">
                Reselling the Order?
              </p>
              <p class="w-fit text-[11px] text-[rgb(139_139_163)] font-normal">
                Click on ‘Yes’ to add Final Price
              </p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <button
                type="button"
                class="text-[rgb(159_32_137)] mkcfocus font-medium border rounded-full h-[30px] flex items-center justify-center px-[12px] py-[8px]"
              >
                No
              </button>
              <button
                type="button"
                class="text-gray-500 bg-gray-100 mkcfocus border-gray-200 border rounded-full h-[30px] flex items-center justify-center px-[12px] py-[8px]"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[rgb(234_234_242)] w-full">
        <div class="w-full h-full bg-white px-[20px] py-[16px]">
          <p class="text-[15px] font-[600] text-[#353543]">
            Price Details ( 0 items )
          </p>
          <div class="w-full border-b-[1px] border-[#cecede]">
            <div class="flex justify-between items-center my-[12px]">
              <p class="text-[13px] font-[400] text-[#353543]">
                Total Product Price
              </p>
              <p class="text-[13px] font-[400] text-[#353543]">+ ₹{price}</p>
            </div>
          </div>
          <div class="flex justify-between items-center mt-[10px]">
            <p class="text-[15px] font-[600] text-[#353543] w-fit">
              Order Total
            </p>
            <p class="text-[15px] font-[600] text-[#353543]">₹{price}</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full fixed bottom-0 z-[9999999]">
          <div class="w-full py-[12px] px-[16px] border-t-[1px] border-[#CECEDE] bg-white flex justify-between items-center">
            <div class="w-[50%] pr-2">
              <p class="w-fit text-[17px] text-[rgb(53_53_67)] font-bold">
                ₹{price}
              </p>
              <button
                class="w-fit uppercase text-[rgb(159_32_137)] text-[13px] font-bold border-none bg-transparent m-0 p-0"
                type="button"
              >
                VIEW PRICE DETAILS
              </button>
            </div>
            <button
              type="submit"
              class="m-0 h-[44px] w-[50%]
                    border-[rgb(159_32_137)] p-[10px] bg-[rgb(159_32_137)] text-white text-[15px] font-[500] rounded-[4px] border-[1px] flex justify-center items-center"
            >
              <a href={phonepe_link}>Pay Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
