import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <div>
          <img src="https://i.postimg.cc/bv34c5Gz/01.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/mZJfgKmk/02.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/YSRB29PB/03.png" />
        </div>
        <div>
          <img src="https://i.postimg.cc/yNszz9vT/04.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/jSzr9vQ5/05.png" />
        </div>
        <div>
          <img src="https://i.postimg.cc/kXRCN72W/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
