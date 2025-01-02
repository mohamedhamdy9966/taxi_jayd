import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container max-w-7xl mx-auto py-12">
      <Slider {...settings}>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex flex-row">
            <div>
              <img src="/Ellipse 11.png" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-lg font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Recruito has transformed our hiring process! We save countless hours
            each week The quality of candidates has significantly improved since
            we started using Recruito
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex flex-row">
            <div>
              <img src="/Ellipse 12.png" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-lg font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Recruito has transformed our hiring process! We save countless hours
            each week The quality of candidates has significantly improved since
            we started using Recruito
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center w-full">
          <div className="flex flex-row">
            <div>
              <img src="/Ellipse 13.png" className="rounded-full" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-black">Alex Martin</h3>
              <h4 className="text-lg font-semibold text-gray-500">
                Company, HR
              </h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Recruito has transformed our hiring process! We save countless hours
            each week The quality of candidates has significantly improved since
            we started using Recruito
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
