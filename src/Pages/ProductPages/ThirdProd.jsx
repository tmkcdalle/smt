import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FirstProd = () => {
  const price = 185;

  const HandlePurchase = () => {
    // set price and product name to localstorage
    const products = [];
    products.push({
      price,
      name: "Sky Blue flowers Slim Fit Suit Set",
      img: "https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg",
    });
    localStorage.setItem("products", JSON.stringify(products));
    console.log("Product Purchased", products);
    location.href = "/address";
  };
  const HandleCart = () => {
    // Make a functional cart system and set products to localstorage
  };

  const [timeLeft, setTimeLeft] = React.useState(25 * 60); // 25 minutes in seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31e.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31d.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31c.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31b.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full">
            <img
              className="w-auto max-h-[320px] h-full object-cover"
              src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/31a.jpg"
              alt="img"
              title="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="w-full pt-[8px] px-[16px] bg-white pb-[18px]">
        <div class="grid grid-cols-auto overflow-hidden w-full">
          <span class="text-[rgb(139_139_163)] truncate text-[15px] mt-20px font-bold">
            Sky Blue flowers Slim Fit Suit Set
          </span>
          {/* <div class="flex justify-start items-center gap-1">
            <svg
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="17"
              class="mb-[6px]"
            >
              <g clip-path="url(#wishlist-product_svg__a)">
                <path
                  d="M4.616 2.048c.856 0 1.672.384 2.416 1.144a1.35 1.35 0 0 0 1.936 0c.744-.76 1.56-1.136 2.416-1.136 1.28 0 2.52.888 3.08 2.2.584 1.376.264 2.856-.888 4.056L8.336 13.8a.478.478 0 0 1-.336.152.447.447 0 0 1-.336-.152l-5.24-5.488C1.272 7.104.952 5.624 1.536 4.248c.56-1.312 1.8-2.2 3.08-2.2Zm0-1.248c-3.584 0-6.52 4.784-3.088 8.376l5.24 5.488c.336.36.784.536 1.232.536.448 0 .896-.176 1.232-.536l5.24-5.488C17.896 5.592 14.96.8 11.376.8c-1.096 0-2.248.448-3.296 1.512a.103.103 0 0 1-.08.032.103.103 0 0 1-.08-.032C6.872 1.248 5.712.8 4.616.8Z"
                  fill="#333"
                ></path>
              </g>
              <defs>
                <clipPath id="wishlist-product_svg__a">
                  <path
                    fill="#fff"
                    transform="translate(0 .8)"
                    d="M0 0h16v14.4H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <span class="text-[rgb(53_53_67)] text-[13px]">Wishlist</span>
          </div>

          <div class="flex justify-center items-center flex-col">
            <svg
              width="17"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="17"
              class="mb-[6px]"
            >
              <path fill="#fff" d="M.947.979h16v16h-16z"></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.489 3.912c0-1.62 1.266-2.933 2.829-2.933 1.562 0 2.828 1.313 2.828 2.933 0 1.62-1.266 2.933-2.828 2.933a2.784 2.784 0 0 1-2.175-1.057L7.071 8.303a3.007 3.007 0 0 1 .295 1.866l3.643 2.18a2.797 2.797 0 0 1 2.309-1.238c1.562 0 2.828 1.314 2.828 2.934s-1.266 2.933-2.828 2.933c-1.563 0-2.829-1.313-2.829-2.933 0-.172.014-.34.042-.504l-3.636-2.176a2.798 2.798 0 0 1-2.32 1.254c-1.562 0-2.828-1.314-2.828-2.934s1.266-2.933 2.828-2.933a2.75 2.75 0 0 1 1.674.568l4.33-2.673a3.042 3.042 0 0 1-.09-.735Zm4.423 0c0-.914-.714-1.654-1.594-1.654-.88 0-1.595.74-1.595 1.653s.714 1.654 1.595 1.654c.88 0 1.594-.74 1.594-1.654ZM6.17 9.684c0-.913-.714-1.653-1.595-1.653-.88 0-1.594.74-1.594 1.653s.714 1.653 1.594 1.653c.88 0 1.595-.74 1.595-1.653Zm7.148 2.706c.88 0 1.594.74 1.594 1.653s-.714 1.654-1.594 1.654c-.88 0-1.595-.74-1.595-1.654 0-.913.714-1.653 1.595-1.653Z"
                fill="#353543"
              ></path>
              <mask
                id="share_svg__a"
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="16"
                height="17"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.318.979c-1.563 0-2.829 1.313-2.829 2.933 0 .254.031.5.09.735L6.249 7.32a2.75 2.75 0 0 0-1.674-.568c-1.562 0-2.828 1.313-2.828 2.933 0 1.62 1.266 2.934 2.828 2.934.96 0 1.808-.496 2.32-1.254l3.636 2.176a3.064 3.064 0 0 0-.042.504c0 1.62 1.266 2.933 2.829 2.933 1.562 0 2.828-1.313 2.828-2.933 0-1.62-1.266-2.934-2.828-2.934-.953 0-1.796.49-2.309 1.238l-3.643-2.18a3.06 3.06 0 0 0-.295-1.866l4.072-2.515a2.784 2.784 0 0 0 2.175 1.057c1.562 0 2.828-1.313 2.828-2.933 0-1.62-1.266-2.933-2.828-2.933Z"
                  fill="#fff"
                ></path>
              </mask>
            </svg>
            <span class="text-[rgb(53_53_67)] text-[13px]">Share</span>
          </div> */}
        </div>
        <div class="w-full pt-1 flex gap-1 items-center">
          <span class="text-[25px] font-[700] text-[rgb(53_53_67)] price-prod">
            ₹185
          </span>
          <span class="text-[15px] font-[500] line-through text-[rgb(139_139_163)]">
            ₹899
          </span>
          <span class="text-[15px] font-[500] text-[rgb(53_53_67)]">
            79% Off
          </span>
        </div>
        <div class="w-full mt-[10px]">
          <div class="flex items-center bg-green-100 text-green-600 rounded-full text-[15px] font-[500] w-fit px-2 py-[2px]">
            ₹260 with 1 Special Offer
            <svg
              width="16"
              height="16"
              class="sc-gswNZR EaPUQ"
              fill="#91E5BD"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
            >
              <rect width="16" height="16" rx="8"></rect>
              <path
                d="M6.387 4.59a.647.647 0 0 0 0 .908L8.86 8l-2.474 2.502a.647.647 0 0 0 0 .91.63.63 0 0 0 .899 0l2.927-2.96a.647.647 0 0 0 0-.91l-2.927-2.96a.636.636 0 0 0-.9.007Z"
                fill="#038D63"
              ></path>
            </svg>
          </div>
        </div>
        <div class="w-full mt-[10px] flex gap-1 items-center justify-start">
          <p class="text-[13px] text-black">Daily Deals</p>
          <div class="inline-flex items-center whitespace-nowrap font-nums bg-orange-200 rounded-md h-[20px] px-[8px] border border-orange-500">
            <img
              class="w-[16px] h-[16px] object-contain"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOVSURBVHgB7VdLTxRBEK7qYWFZE7NeCCQeBuKdV3jcmPXgVTgrAfwDgMZ43OHgfTHxKhDDzRD4BQ4XHgFhOHqR8URAhVVhIeB0Wz3sDLPD7LLADh7kSyb9qOrpr6uqu6sBbnGL/wAIN4DNCTUZr1Z6gQtVthUGe/Yxn2sYsiz4F6S2p5vSwGFEICTPCVHMimMxGiQXGSlpndoYfqQpWkrpEYEsIk/VPbFMX1950DQtmcvlNCGEs2JEzFLdWllZ8X7W0dHRwhgblPW3/bs995O2j5AwuMANSYKBaBaIvX5i/IS3uhbDMogME4FBaqphOkSMVoqzVM5Rc4LqDum6uza87stSyUkHxhr6v+j+cVsTqopVZElE1SVd/3QzVZJUZ2dnmooRd5KrQBJ78eh3Rnv5eTRMvjOttnDB1sFbIE819FsGCyp2d3erXV1d60RGvw4hZ9JfCrz6kCwaU04cCTHrthGZo8uChMgNFJxQMjgvCbWkFHHerXJxquuRkvGTJ1T6J5eHUUpI8eZ5QwZ8AanDw8N0BISAcz5eSo60E906Q9z0SEm3UTECEQB9Wz+cFGpnuvaGR4pWo0NEIFLDMjTCZFvvH2jeSS/Acg9Q132PITok9/f3wzeOsAfdKgeYc+uMXKddd+tfBEVRzrlQXkPIcMBtVzE+6dYZ7bhKbv9Q0Bw9wb64Av5rxvTffcy9y6JEmCeQKQO+VsYvkzGlwg1Duo7sp7ltfmLPQ4CUBTeMhKJoZy1hBPMp6T4Looflb3A8i2OZzgSVWSwWMyF6FE4sTtNiCRRobqfbC8RsYWHBlDkRRAjbtmeLyZQftQO0/fp29A7Y1E8N6ByelC2OQ3SwVldXDX8H5qpN/J4A+cHPGo2OhHfU3UrlPUnMIXV0dJSJyloyLwv2sa07WczWgPzyoN3I1xKg7Mq6Q8o0zSydumNQeUwuLS1N+Tu2yBI2sq9F9I1G3cx6qcvi4qI8wCrpRousFLZQtQrETPgQkdxJtxVmnsvLyyPkximoDKEUWckKChQRS9JTYi98GDZT0A+GPhzoktaJXBquBoMIDYUR8mNHb1v3vwkFCLmQzIGwp4q+ZvL5+gRVNSgD+afWGFk7U47+N719RjhXDcpzUiPrvanX15xEkxUbJFdKE6SkG6RL6Qs7ZC36JknWl0gkGsslJPEH7OcHwJvq9E8PaUXPBHBv7KWf7fnUGeLxeNYwjEgP3VtchL/KNndDp3dgXgAAAABJRU5ErkJggg=="
              alt="img"
              title="img"
              width="16"
              height="16"
            />
            <span class="text-[#9F2089] font-semibold text-[13px] leading-[16px] ml-[5px] p-0">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <div class="w-full mt-[12px] flex justify-start items-center gap-1">
          <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
            <p class="text-white text-[13px] font-[500] text-center">4.7</p>
            <svg
              width="8"
              height="8"
              viewBox="0 0 20 20"
              fill="#ffffff"
              class="sc-gswNZR eMqtuK"
              xmlns="http://www.w3.org/2000/svg"
              ml="4"
              iconsize="10"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                  fill="#ffffff"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="19.08" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
            54,900Ratings, 1076 Reviews
          </p>
          <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
          <img
            class="w-auto h-[20px] ml-2 object-contain"
            src="data:image/png;base64,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"
            alt="img"
            title="img"
          />
        </div>
        <div class="w-full pt-[8px]" />
        <div class="bg-[rgb(248_248_255)] text-[rgb(97_97_115)] py-1 w-fit text-[10px] font-[600] rounded-full px-2">
          Free Delivery
        </div>
      </div>
      <div class=" w-full py-[20px] px-[16px] bg-white">
        <h5 class="text-[17px] text-[rgb(53_53_67)] font-[700] mb-[16px]">
          Select Size
        </h5>
        <div class="flex select-size justify-start items-center gap-2 w-full flex-wrap">
          <button
            type="button"
            class="m-0 mkcfocus px-[16px] py-[6px] w-fit  border-[rgb(0_0_0)]  text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            XS
          </button>
          <button
            type="button"
            class="m-0  mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            S
          </button>
          <button
            type="button"
            class="m-0 mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            M
          </button>
          <button
            type="button"
            class="m-0 mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            L
          </button>
          <button
            type="button"
            class="m-0  mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            XL
          </button>
          <button
            type="button"
            class="m-0  mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            2XL
          </button>
          <button
            type="button"
            class="m-0  mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            3XL
          </button>
          <button
            type="button"
            class="m-0 mkcfocus px-[16px] py-[6px] w-fit bg-[rgb(255_255_251)] border-[rgb(0_0_0)] text-[rgb(0_0_0)] text-[15px] font-[500] rounded-full border-[1px] flex justify-center items-center capitalize"
          >
            4XL
          </button>
        </div>
      </div>
      <div class=" add-to-cart w-full py-[12px] px-[16px] border-t-[1px] border-[#CECEDE] bg-white flex justify-between items-center fixed bottom-0 z-[9999999]">
        <button
          onClick={HandleCart}
          type="button"
          class="mr-[12px] ml-0 mx-0 h-[46px] w-[50%]
                    border-[rgb(159_32_137)] p-[10px] text-[rgb(159_32_137)] bg-transparent text-[15px] font-[500] rounded-[4px] border-[1px] flex justify-center gap-1 items-center"
        >
          <svg
            width="21"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ml="4"
            mr="4"
            iconsize="20"
            class="w-[20px] h-[20px]"
          >
            <g clip-path="url(#cart_svg__a)">
              <path fill="#fff" d="M.394.479h20v20h-20z"></path>
              <g clip-path="url(#cart_svg__b)">
                <g clip-path="url(#cart_svg__c)">
                  <path
                    d="M4.396 4.293h15.139c.507 0 .907.491.849 1.046l-.762 7.335c-.068.619-.536 1.1-1.102 1.12l-12.075.492-2.05-9.993Z"
                    fill="#C53EAD"
                  ></path>
                  <path
                    d="M10.193 20.478c.674 0 1.22-.598 1.22-1.335s-.546-1.334-1.22-1.334c-.674 0-1.22.597-1.22 1.334 0 .737.546 1.335 1.22 1.335ZM15.181 20.478c.674 0 1.22-.598 1.22-1.335s-.546-1.334-1.22-1.334c-.674 0-1.22.597-1.22 1.334 0 .737.546 1.335 1.22 1.335Z"
                    fill="#9F2089"
                  ></path>
                  <path
                    d="M1.126 3.28 4.152 4.7 6.68 16.784c.127.608.615 1.035 1.18 1.035h9.615"
                    stroke="#9F2089"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="cart_svg__a">
                <path
                  fill="#fff"
                  transform="translate(.394 .479)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
              <clipPath id="cart_svg__b">
                <path
                  fill="#fff"
                  transform="translate(.394 .479)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
              <clipPath id="cart_svg__c">
                <path
                  fill="#fff"
                  transform="translate(.394 2.479)"
                  d="M0 0h20v18H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
          Add to Cart
        </button>
        <button
          onClick={HandlePurchase}
          type="button"
          class="m-0 h-[46px] w-[50%]
                    border-[rgb(159_32_137)] p-[10px] bg-[rgb(159_32_137)] text-white text-[15px] font-[500] rounded-[4px] border-[1px] flex justify-center gap-1 items-center"
        >
          <svg
            width="21"
            height="21"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            ml="4"
            mr="4"
            stroke="transparent"
            btntype="solid"
            class="w-[20px] h-[20px]"
            iconsize="20"
          >
            <path
              d="M1.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384ZM11.894 4.546v11.796a.5.5 0 0 0 .837.369l6.74-6.18a.5.5 0 0 0-.017-.752l-6.74-5.617a.5.5 0 0 0-.82.384Z"
              fill="#fff"
            ></path>
          </svg>
          Buy Now
        </button>
      </div>
      <div class="w-full py-[20px] px-[16px] bg-white">
        <p class="text-[17px] text-[rgb(53_53_67)] font-[700]">
          Product Details
        </p>
        <div class="mt-4 mb-0 text-[13px] text-[rgb(97_97_115)] font-[500]">
          <b>
            Summer&nbsp;ocassions or regular days deserves elegant ensembles
            such as our&nbsp;Relaxing cotton Suit Set.
          </b>
        </div>
        <button
          type="button"
          class="m-0 p-0 w-fit uppercase text-[rgb(159_32_137)] text-[13px] font-[500]"
        >
          read more
        </button>
      </div>

      <div class="bg-[rgb(234_234_242)] pb-2 w-full">
        <div class="w-full py-[20px] px-[16px] bg-white">
          <p class="text-[17px] text-[rgb(53_53_67)] font-[700]">Sold By</p>
          <div class="w-full pt-[12px] flex justify-start items-center">
            <div class="w-[48px] h-[48px]">
              <div class="w-full h-full">
                <img
                  class="object-cover rounded-full"
                  src="../../public/3.webp"
                  alt="img"
                  title="img"
                />
              </div>
            </div>
            <div class="w-[calc(100%_-_48px)]">
              <div class="flex justify-between items-center">
                <span class="text-[15px] text-[#353543] uppercase font-[500] pl-2 pr-4"></span>
                <button
                  type="button"
                  class="m-0 px-[8px] py-[6px] w-fit
                    border-[rgb(159_32_137)] text-[rgb(159_32_137)] bg-transparent text-[13px] font-[500] rounded-[4px] border-[1px] flex justify-center items-center"
                >
                  View Shop
                </button>
              </div>
            </div>
          </div>
          <div class="w-full pl-[56px] pt-4 pb-0 pr-0">
            <div class="w-fit flex gap-6 justify-between items-center">
              <div>
                <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-transparent border-[1px] border-[rgb(231_238_255)] rounded-full">
                  <p class="text-[#5585F8] text-[13px] font-[500] text-center">
                    4.6
                  </p>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 20 20"
                    fill="#5585F8"
                    class="sc-gswNZR eMqtuK"
                    xmlns="http://www.w3.org/2000/svg"
                    ml="4"
                    iconsize="10"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                        fill="#5585F8"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="19.08" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p class="text-[rgb(139_139_163)] pt-1 font-[500] text-[13px]">
                  12,712Ratings
                </p>
              </div>
              <div>
                <p class="text-[#353543] font-[500] text-[15px]">154</p>
                <p class="text-[rgb(139_139_163)] pt-1 font-[500] text-[13px]">
                  Followers
                </p>
              </div>
              <div>
                <p class="text-[#353543] font-[500] text-[15px]">6</p>
                <p class="text-[rgb(139_139_163)] pt-1 font-[500] text-[13px]">
                  Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full py-[20px] px-[16px] bg-white">
        <p class="text-[17px] text-[rgb(53_53_67)] font-[700]">
          Product Ratings &amp; Reviews
        </p>
        <div class="w-full pt-[16px] pb-[20px] flex justify-start items-start border-b-[1px] border-[#CECEDE]">
          <div class="w-[110px]">
            <div class="w-full">
              <div class="w-[70px]">
                <div class="flex justify-center items-center gap-1 w-fit m-0 p-0 bg-transparent border-none">
                  <p class="text-[#038d63] text-[35px] font-[500] text-center">
                    4.6
                  </p>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 20 20"
                    fill="#038d63"
                    class="sc-gswNZR eMqtuK"
                    xmlns="http://www.w3.org/2000/svg"
                    ml="4"
                    iconsize="10"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                        fill="#038d63"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="19.08" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
                  12,712Ratings,
                </p>
                <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
                  1076 Reviews
                </p>
              </div>
            </div>
          </div>
          <div class="w-[calc(100%_-_110px)]">
            <div class="flex flex-col w-full">
              <div class="flex-1 flex items-center gap-3 mb-1">
                <div class="w-[61px] text-right">
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px]">
                    Excellent
                  </p>
                </div>
                <div class="flex-1">
                  <div class="w-full h-1 rounded-full bg-[rgb(234_234_242)] relative">
                    <span class="h-full absolute top-0 left-0 rounded-full"></span>
                  </div>
                </div>
                <div>
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px] text-right">
                    2717
                  </p>
                </div>
              </div>
              <div class="flex-1 flex items-center gap-3 mb-1">
                <div class="w-[61px] text-right">
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px]">
                    Very Good
                  </p>
                </div>
                <div class="flex-1">
                  <div class="w-full h-1 rounded-full bg-[rgb(234_234_242)] relative">
                    <span class="h-full absolute top-0 left-0 rounded-full"></span>
                  </div>
                </div>
                <div>
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px] text-right">
                    1342
                  </p>
                </div>
              </div>
              <div class="flex-1 flex items-center gap-3 mb-1">
                <div class="w-[61px] text-right">
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px]">
                    Good
                  </p>
                </div>
                <div class="flex-1">
                  <div class="w-full h-1 rounded-full bg-[rgb(234_234_242)] relative">
                    <span class="h-full absolute top-0 left-0 rounded-full"></span>
                  </div>
                </div>
                <div>
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px] text-right">
                    953
                  </p>
                </div>
              </div>
              <div class="flex-1 flex items-center gap-3 mb-1">
                <div class="w-[61px] text-right">
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px]">
                    Average
                  </p>
                </div>
                <div class="flex-1">
                  <div class="w-full h-1 rounded-full bg-[rgb(234_234_242)] relative">
                    <span class="h-full absolute top-0 left-0 rounded-full"></span>
                  </div>
                </div>
                <div>
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px] text-right">
                    1342
                  </p>
                </div>
              </div>
              <div class="flex-1 flex items-center gap-3 mb-1">
                <div class="w-[61px] text-right">
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px]">
                    Poor
                  </p>
                </div>
                <div class="flex-1">
                  <div class="w-full h-1 rounded-full bg-[rgb(234_234_242)] relative">
                    <span class="h-full absolute top-0 left-0 rounded-full"></span>
                  </div>
                </div>
                <div>
                  <p class="text-[rgb(53_53_67)] font-[400] text-[11px] text-right">
                    1342
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <p class="text-[#353543] font-[500] text-[13px]">
            Real Images and videos from customers
          </p>
          <div class="mt-[12px] mb-[16px] flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Kavita Ghosh</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.9</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 10 Apr 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              5/5 ratings best products
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (56)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Ravina Bhale</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">3.5</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 10 Apr 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              😍😍wow amazing products and price
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (34)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Kautliya Suman</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.3</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 1 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              💥💥Thank you meesho best experiance
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (80)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Val Pockey</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">5.0</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 25 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              😙quality is good😙😙
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (76)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Mina Sharma</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.9</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 10 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              😘😘😘😘best products &amp; price
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (83)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Shreya Bairagya</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">3.9</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 1 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              🔥🔥🔥🔥 products is good 🔥🔥🔥
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (84)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">
              Lakshmi Mhutumale
            </p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.1</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 11 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              ❤️❤️❤️loved products &amp; size aewsome
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (94)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Rina Pande</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">5.0</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 6 Apr 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              😎lokking awesome and price reasonable
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (72)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Asha Aggarwal</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.8</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 4 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              🥰🥰best from other 🥰🥰
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="data:image/png;base64,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"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="data:image/png;base64,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"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (21)</p>
          </div>
        </div>
        <div class="w-full pt-[16px] border-b-[1px] border-[#CECEDE]">
          <div class="w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="16"
              class="w-[16px] h-[16px]"
            >
              <path
                d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                fill="#F7F9FF"
              ></path>
              <mask
                id="user_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="40"
                height="40"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                  fill="#F7F9FF"
                ></path>
              </mask>
              <g mask="url(#user_svg__a)">
                <path
                  d="M27.222 15.222C27.222 11.24 23.982 8 20 8s-7.222 3.24-7.222 7.222c0 3.983 3.24 7.222 7.222 7.222s7.222-3.24 7.222-7.222ZM20 22.444c-7.168 0-13 5.832-13 13v1.354c0 .41.175.802.48 1.076C11 41.027 15.446 42.763 20 42.763s9.001-1.736 12.52-4.89c.305-.273.48-.664.48-1.075v-1.354c0-7.168-5.832-13-13-13Z"
                  fill="#D6E2FF"
                ></path>
              </g>
            </svg>
            <p class="text-[#353543] font-[500] text-[13px]">Katuri Vadhale</p>
          </div>
          <div class="w-full mt-[12px] flex justify-start items-center gap-1">
            <div class="flex justify-center items-center gap-1 w-fit m-0 px-[6px] py-[2px] bg-[rgb(35_187_117)] rounded-full">
              <p class="text-white text-[13px] font-[500] text-center">4.9</p>
              <svg
                width="8"
                height="8"
                viewBox="0 0 20 20"
                fill="#ffffff"
                class="sc-gswNZR eMqtuK"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                iconsize="10"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                    fill="#ffffff"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="19.08" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span class="bg-[rgb(206_206_222)] w-[4px] h-[4px] rounded-full mx-[8px] inline-block"></span>
            <p class="text-[rgb(139_139_163)] font-[500] text-[11px]">
              Posted on 19 Mar 2024
            </p>
          </div>
          <div class="w-full mt-2">
            <p class="text-[#353543] font-[500] text-[13px]">
              killer products,best quality
            </p>
          </div>
          <div class="mt-[12px] w-full flex justify-start flex-wrap items-center gap-2">
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="data:image/png;base64,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"
                alt="img"
                title="img"
              />
            </div>
            <div class="w-[48px] h-[48px] overflow-hidden rounded">
              <img
                class="w-full h-full object-cover aspect-square"
                src="data:image/png;base64,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"
                alt="img"
                title="img"
              />
            </div>
          </div>
          <div class="mt-2 mb-4 w-full flex gap-2 justify-start items-center">
            <svg
              viewBox="0 0 16 16"
              fill="greyT1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[20px]"
              size="16"
              iconsize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.712 5.245 8.68 1.13a1.039 1.039 0 0 1 1.51-.008c.258.268.366.647.294 1.018l-.68 3.402h4.046c1.54 0 2.578 1.635 1.977 3.106L13.492 14.3c-.229.542-.745.899-1.318.899H5.73c-.788 0-1.432-.669-1.432-1.486V6.293c0-.394.15-.773.415-1.048Zm-1.847 8.471c0 .818-.645 1.486-1.433 1.486-.787 0-1.432-.668-1.432-1.486V7.773c0-.817.645-1.486 1.432-1.486.788 0 1.433.67 1.433 1.486v5.943Z"
                fill="#666"
              ></path>
            </svg>
            <p class="text-[#616173] font-[500] text-[13px]">Helpful (69)</p>
          </div>
        </div>
        <button
          type="button"
          class="mt-[16px] mx-0 mb-0 w-fit text-[rgb(159_32_137)] uppercase bg-transparent text-[13px] font-bold flex justify-center items-center"
        >
          View all reviews
          <svg
            width="20"
            height="20"
            fill="#9F2089"
            xmlns="http://www.w3.org/2000/svg"
            iconsize="20"
            class="w-[20px] h-[20px]"
          >
            <path
              d="M7.31 4.316a1.079 1.079 0 0 0 0 1.515l4.125 4.17-4.124 4.17a1.079 1.079 0 0 0 0 1.515 1.05 1.05 0 0 0 1.499 0l4.88-4.933a1.079 1.079 0 0 0 0-1.515L8.81 4.305a1.06 1.06 0 0 0-1.5.01Z"
              fill="#9F2089"
            ></path>
          </svg>
        </button>
      </div>
      <img src="../../public/skem2.png" alt="" />
    </>
  );
};

export default FirstProd;
