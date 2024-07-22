import "./News.module.css";
// eslint-disable-next-line
const News = ({ image, title, Tag1, Tag2 }) => {
  return (
    <>
      <div className="w-[15%]">
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="text-Soft-red font-bold Font-Inter text-2xl mb-2">
          {title}
        </h2>
        <h2 className="text-Very-dark-blue font-Inter text-sm font-bold mb-2 hover:text-Soft-red">
          {Tag1}
        </h2>
        <p className=" w-[60%} text-Dark-grayish-blue font-Inter text-xs mb-6">
          {Tag2}
        </p>
      </div>
    </>
  );
};

export default News;
