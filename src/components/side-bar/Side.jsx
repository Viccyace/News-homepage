// eslint-disable-next-line
const Side = ({ Title, Description }) => {
  return (
    <div>
      <h3 className="text-Off-white font-bold Font-Inter text-semi-bold mt-6 mb-2 hover:text-Soft-orange">
        {Title}
      </h3>
      <p className="text-Dark-grayish-blue font-Inter text-xs mb-6">
        {Description}
      </p>
    </div>
  );
};

export default Side;
