import React from "react";

const Checkout = () => {
  // Extract the products from localStorage
  const products = JSON.parse(localStorage.getItem("products"));
  const price = products[0].price;
  const img = products[0].img;
  const name = products[0].name;
  console.log(products);

  return (
    <>
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
          REVIEW
        </p>
      </div>
      <div class="w-full min-w-[300px] h-full bg-white p-[8px] flex justify-center items-center border-b-[1px] border-[#cecede]">
        <ul class="w-full flex items-center justify-center p-0 m-0 list-none">
          <div class="flex flex-col items-center w-1/2 gap-[6px] max-w-200">
            <div class="w-full flex items-center justify-center p-0 m-0">
              <div class="flex-grow h-[2px] bg-blue-500 invisible"></div>
              <div class="flex justify-center items-center w-[20px] h-[20px] rounded-full border-2 border-blue-500 text-blue-500 text-sm">
                1
              </div>
              <div class="flex-grow h-[2px] bg-gray-300"></div>
            </div>
            <div class="text-[11px] font-normal text-[#353543]">Review</div>
          </div>
          <div class="flex flex-col items-center w-1/2 gap-[6px] max-w-200">
            <div class="w-full flex items-center justify-center p-0 m-0">
              <div class="flex-grow h-[2px] bg-gray-300 visible"></div>
              <div class="flex justify-center items-center w-[20px] h-[20px] rounded-full border-2 border-gray-300 text-gray-300 text-xs">
                2
              </div>
              <div class="flex-grow h-[2px] bg-gray-300 invisible"></div>
            </div>
            <div class="text-[11px] font-normal text-gray-300">Payment</div>
          </div>
        </ul>
      </div>
      <div class="w-full h-full bg-white py-[12px] gap-2 px-[16px] flex justify-start items-center border-b-[1px] border-[#cecede]">
        <svg
          width="16"
          class="w-[20px] h-[20px]"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" fill="white"></rect>
          <g clip-path="url(#clip0_849_44222)">
            <path
              d="M16 8.85828V11.0437C16 11.6301 15.5203 12.1098 14.9339 12.1098H14.4187C14.2143 12.9005 13.4947 13.4868 12.6507 13.4868C11.8068 13.4868 11.0872 12.9005 10.8828 12.1098H5.10827C4.90394 12.9005 4.20211 13.4868 3.34037 13.4868C2.47862 13.4868 1.77679 12.9005 1.56358 12.1098H1.15491C0.524153 12.1098 0 11.5324 0 10.8216V9.15145H10.9361V5.0293H12.6507C13.0239 5.0293 13.3792 5.20698 13.6191 5.49126L15.6979 8.03207C15.8934 8.25417 15.9822 8.55623 15.9822 8.8494H15.9911L16 8.85828Z"
              fill="#3A66CF"
            ></path>
            <path
              d="M12.0022 3.11049V9.47141H0V3.11049C0 2.50639 0.470849 2 1.03942 2H10.9628C11.5403 2 12.0022 2.48862 12.0022 3.11049Z"
              fill="#90B1FB"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_849_44222">
              <rect
                width="16"
                height="11.4781"
                fill="white"
                transform="translate(0 2)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <p class="text-[13px] font-[600] text-[#353543]">
          Estimated Delivery by Monday, 31th Mar
        </p>
      </div>
      <div class="w-full h-full bg-white py-[18px] gap-3 px-[16px] flex justify-start items-start border-b-[1px] border-[#cecede]">
        <div class="w-[60px] h-[60px]">
          <img
            class="aspect-square w-full h-full object-cover"
            src="https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/1.jpg"
            alt="img"
            title="img"
          />
        </div>
        <div class="w-[calc(100%_-_84px)]">
          <p class="text-[13px]  font-[600] text-[#353543] mb-[8px]">{name}</p>
          <div class="flex justify-start items-center gap-1 mb-[8px]">
            <p class="text-[13px] font-[500] text-[#353543]">₹{price}</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex justify-start items-center gap-2">
              <span class="w-[4px] h-[4px] bg-[rgb(206_206_222)] rounded-full"></span>
              <div class="flex justify-start items-center gap-1"></div>
            </div>
            <button
              type="button"
              class="bg-transparent m-0 p-0 border-none text-gray-600 font-bold"
            ></button>
          </div>
        </div>
      </div>
      <div class="w-full h-full bg-white px-[20px] py-[16px]">
        <p class="text-[15px] font-[600] text-[#353543]">
          Price Details ( 1 item )
        </p>
        <div class="w-full border-b-[1px] border-[#cecede]">
          <div class="flex justify-between items-center my-[12px]">
            <p class="text-[13px] font-[400] text-[#353543]">
              Total Product Price
            </p>
            <p class="text-[13px] font-[400] text-[#353543]">₹ {price}</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-[10px]">
          <p class="text-[15px] font-[600] text-[#353543] w-fit">Order Total</p>
          <p class="text-[15px] font-[600] text-[#353543]">₹{price}</p>
        </div>
      </div>
      <div class="w-full fixed bottom-0 z-[9999999]">
        <div class="w-full items-center justify-center flex bg-[rgb(248_248_255)]">
          <p class="w-full text-center text-[11px] px-[16px] py-[10px] text-[rgb(53_53_67)] font-normal">
            Clicking on ‘Continue’ will not deduct any money
          </p>
        </div>
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
            onClick={() => {
              localtion.href = "/payment";
            }}
            type="button"
            class="m-0 h-[44px] w-[50%]
                    border-[rgb(159_32_137)] p-[10px] bg-[rgb(159_32_137)] text-white text-[15px] font-[500] rounded-[4px] border-[1px] flex justify-center items-center"
          >
            <a href="/payment">Continue</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
