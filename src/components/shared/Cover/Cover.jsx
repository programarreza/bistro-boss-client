import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="px-12">
      <div  className="w-full  min-h-[80vh] bg-cover bg-center ">
        <div
          className=" m-24 mt-0 flex justify-center text-center items-center     
             "
        >
          <div className="mt-32 bg-white p-16 w-full">
            <h2 className="uppercase text-4xl mb-5 ">{title}</h2>
            <p >{description}</p>
          </div>
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Cover;
