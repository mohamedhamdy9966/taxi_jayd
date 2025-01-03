import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container max-w-7xl py-12 px-4">
      <Slider {...settings}>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/Ellipse 11.png" className="rounded-full w-12 h-12" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-md font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Recruito has transformed our hiring process! We save countless hours
            each week. The quality of candidates has significantly improved since
            we started using Recruito.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/Ellipse 12.png" className="rounded-full w-12 h-12" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-md font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Recruito has transformed our hiring process! We save countless hours
            each week. The quality of candidates has significantly improved since
            we started using Recruito.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex items-center space-x-4">
            <div>
              <img src="/Ellipse 13.png" className="rounded-full w-12 h-12" />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-md font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Recruito has transformed our hiring process! We save countless hours
            each week. The quality of candidates has significantly improved since
            we started using Recruito.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
