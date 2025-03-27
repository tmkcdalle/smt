import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Home = () => {
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
  const products = [
    {
      id: 1,
      name: "Sky Blue flowers Slim Fit Suit Set",
      price: 185,
      originalPrice: 899,
      image:
        "https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/2.jpg",
      rating: 3.5,
      reviews: "32,142",
      delivery: "Free delivery",
      link: "/prod1",
    },
    {
      id: 2,
      name: "Elegant Red Dress",
      price: 299,
      originalPrice: 999,
      image:
        "https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/3.jpg",
      rating: 4.2,
      reviews: "15,432",
      delivery: "Free delivery",
      link: "/prod2",
    },
    {
      id: 3,
      name: "Elegant Red Dress",
      price: 299,
      originalPrice: 999,
      image:
        "https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/3.jpg",
      rating: 4.2,
      reviews: "15,432",
      delivery: "Free delivery",
      link: "/prod2",
    },
    {
      id: 4,
      name: "kuch bhi",
      price: 299,
      originalPrice: 999,
      image:
        "https://adminme.lifefashiondream.com/wp-content/uploads/2024/04/3.jpg",
      rating: 4.2,
      reviews: "15,432",
      delivery: "Free delivery",
      link: "/prod4",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="img">
          <img src="../../public/skem.png" alt="" />
        </div>
        <div className="bg-slate-100 py-0 w-full">
          <div className="py-0 bg-white">
            <img
              className="w-full h-full object-cover"
              src="/home-header1.jpeg"
              alt="Home Header"
              title="Home Header"
            />
          </div>
        </div>
        <div className="bg-white pt-[8px] px-[16px] pb-[8px]">
          <>
            <Swiper
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {[...Array(3)].map((_, index) => (
                <>
                  <SwiperSlide key={index}>
                    <div className="w-full">
                      <img
                        className="object-cover w-auto h-[143px]"
                        src="https://cool.offerami.in/static/media/0muga.5a23765c71bc806439e8.gif"
                        alt={`Slide ${index + 1}`}
                        title={`Slide ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={index}>
                    <div className="w-full">
                      <img
                        className="object-cover w-auto h-[143px]"
                        src="https://cool.offerami.in/static/media/rj4n7_600.8726da3ef2bdae12fe59.webp"
                        alt={`Slide ${index + 1}`}
                        title={`Slide ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={index}>
                    <div className="w-full">
                      <img
                        className="object-cover w-auto h-[143px]"
                        src="https://cool.offerami.in/static/media/1697808309043_600.d42e360ab435882d0d6a.webp"
                        alt={`Slide ${index + 1}`}
                        title={`Slide ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={index}>
                    <div className="w-full">
                      <img
                        className="object-cover w-auto h-[143px]"
                        src="https://cool.offerami.in/static/media/1714393245702_600.8e3c201784ea0376cff8.webp"
                        alt={`Slide ${index + 1}`}
                        title={`Slide ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </>
        </div>
        <marquee className="bg-[#9F2089] py-[10px] text-white text-[16px]">
          Buy 2 Get 1 Free (Add 3 item to cart)
        </marquee>
        <img
          class="w-full h-full object-cover"
          src="https://cool.offerami.in/static/media/freeshippingposter.8c0aff28d27a959880ff.webp"
          alt="img"
          title="img"
        />
        <div class="w-full flex justify-center gap-[18px] items-center pt-3 pb-1">
          <div class="flex items-center gap-[10px]">
            <p class="text-[18px] text-gray-700 font-bold font-sans">
              Meesho Daily Deals
            </p>
            <svg
              width="19"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              iconsize="20"
              class="sc-bcXHqe bMWbfM"
            >
              <mask
                id="deal_svg__a"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="17"
                height="22"
              >
                <path
                  d="M5.198.795a.73.73 0 0 0-.699.522l-2.621 8.858a1.458 1.458 0 0 0 1.568 1.862l6.018-.708L6.835 19.8a1.089 1.089 0 0 0 1.944.929l8.174-12.206c.698-1.043-.16-2.423-1.405-2.257l-5.033.671 1.724-5.183a.73.73 0 0 0-.692-.96H5.198Z"
                  fill="#fff"
                ></path>
              </mask>
              <g mask="url(#deal_svg__a)">
                <path fill="#E11900" d="M-.208.947H18.75v21.875H-.208z"></path>
              </g>
            </svg>
          </div>
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
              {/* add a working timer here and it should start a backward timer from 20 mins */}
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="bg-white mt-2 py-2 px-4 font-semibold text-black">
          Products For You
        </div>
        <div className="mx-0 grid grid-cols-2 text-sm mt-0 gap-0 bg-white">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="border border-slate-200 p-3 relative block"
            >
              <div className="absolute right-2 top-2">
                <button
                  type="button"
                  className="m-0 p-0 bg-transparent border-none"
                >
                  <img
                    src="https://cool.offerami.in/static/media/wishlist.e6b8bb0bb318dcff801d85c96978f206.svg"
                    className="w-full h-full object-cover"
                    alt="Wishlist"
                  />
                </button>
              </div>
              <div className="h-[175px] flex items-center justify-center">
                <img
                  className="max-h-[180px] mx-auto"
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                />
              </div>
              <p className="mt-2 text-[12px] font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                {product.name}
              </p>
              <p className="mt-2 flex items-center">
                <span className="text-[16px]">₹{product.price}</span>
                <span className="text-gray-400 line-through ml-2 text-[12px] mr-3">
                  ₹{product.originalPrice}
                </span>
              </p>
              <div className="flex justify-start items-center gap-[10px]">
                <div className="bg-slate-100 text-slate-600 rounded-full text-[12px] w-fit px-2 py-[1px] mt-2">
                  {product.delivery}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-[13px]">
                <div className="flex items-center">
                  <div className="bg-[#038d63] px-[5px] py-[2px] rounded-full text-white flex items-center mr-2">
                    {product.rating}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="ml-1 mt-[-2px]"
                      height="11"
                      width="11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                    </svg>
                  </div>
                  <div className="text-slate-400 text-[12px]">
                    ({product.reviews})
                  </div>
                  <img
                    src="data:image/png;base64,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"
                    class="h-[22px]"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
