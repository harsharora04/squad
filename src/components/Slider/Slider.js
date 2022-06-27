import PropTypes from "prop-types";
import Slider from "react-slick";
import Job from "./Job";
import Announcement from "./Announcement";
import Community from "./Community";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/slider/left-arrow.png";
import RightArrow from "../../assets/images/slider/right-arrow.png";
import classNames from "classnames";
import { memo } from "react";
import Loader from "./Loader";


const SLIDER_COUNT = 4;

export const SLIDER_TYPES = {
  JOB: "job",
  COMMUNITY: "community",
  ANNOUNCEMENT: "announcement"
}

const SLIDER_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: SLIDER_COUNT,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1644,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
  ]
};

const SLIDE_COMPONENT = {
  [SLIDER_TYPES.JOB]: Job,
  [SLIDER_TYPES.ANNOUNCEMENT]: Announcement,
  [SLIDER_TYPES.COMMUNITY]: Community
}

const CustomArrow = (props) => {
  const { className, type, onClick } = props;
  const arrow = type === 'left' ? LeftArrow : RightArrow;
  const arrowClassName = classNames('w-2 h-auto absolute top-1/2',
    type === 'left' ? '-ml-4 lg:-ml-8' : 'right-0 -mr-4 lg:-mr-8',
    className.includes('slick-disabled') ? 'opacity-0' : '');
  return (
    <div className={arrowClassName} onClick={onClick}>
      <img src={arrow} alt="go left" />
    </div>
  );
}

const BoxSlider = ({ title, type, items, loading, hasEnd, onLoadMore }) => {

    const sliderItems = items.map((item, index) => {
      const Slide = SLIDE_COMPONENT[type] || null;
        return <Slide key={index} data={item} />
    });

    const sliderSettings = {
      ...SLIDER_SETTINGS,
      nextArrow: <CustomArrow type="right" />,
      prevArrow: <CustomArrow type="left" />,
      afterChange: (current) => {
        if (current === items.length - SLIDER_COUNT && !loading && !hasEnd) {
          onLoadMore();
        }
      }
    }

    
  if (loading) return <div className="mt-[50px] first:mt-0 max-w-[896px] mx-auto">
    <Loader />
  </div>
  
  return (<div className="mt-[50px] first:mt-0 max-w-[896px] mx-auto">
    <p>{title}</p>
    <Slider className="relative mt-[19px]" {...sliderSettings}>
      {sliderItems}
    </Slider>
  </div>)
}

BoxSlider.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  items: PropTypes.array,
  loading: PropTypes.bool,
  hasEnd: PropTypes.bool,
  onLoadMore: PropTypes.func,
}

BoxSlider.types = SLIDER_TYPES;

export default memo(BoxSlider);