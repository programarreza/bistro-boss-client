import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center max-w-[350px] mx-auto my-12">
      <p className="text-[#D99904] text-xl mb-2">---{subHeading}---</p>
      <h3 className="text-[#151515] text-4xl border-y-2 py-4 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
SectionTitle.propTypes = {
  heading: PropTypes.object,
  subHeading: PropTypes.object,
};
