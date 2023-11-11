
const SectionTitle = ({heading, subHeading}) => {
	return (
		<div className="text-center max-w-xs mx-auto my-12">
			<p className="text-[#D99904] text-xl mb-2">---{subHeading}---</p>
			<h3 className="text-[#151515] text-4xl border-y-2 py-2 uppercase">{heading}</h3>
		</div>
	);
};

export default SectionTitle;