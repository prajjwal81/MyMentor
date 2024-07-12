const StatsSection = () => {
  return (
    <div className="bg-[#181c53] text-white p-8">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-40 sm-gap-4 text-center mx-auto">
        <div className="flex items-center flex-col">
          <p className="text-xl font-bold text-center whitespace-nowrap">
            200+
          </p>
          <p className="text-xs whitespace-nowrap ">
            Offers in IVY League Schools
          </p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-xl font-bold text-center whitespace-nowrap">50+</p>
          <p className="text-xs whitespace-nowrap">
            Offers to Oxford or Cambridge
          </p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-xl font-bold text-center whitespace-nowrap">
            500+
          </p>
          <p className="text-xs whitespace-nowrap ">
            Offers To The US Top 50 Universities
          </p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-xl font-bold text-center whitespace-nowrap">
            1000+
          </p>
          <p className="text-xs whitespace-nowrap ">
            Offers To The UK Top 10 Universities
          </p>
        </div>
        <div className="flex items-center flex-col">
          <p className="text-xl font-bold whitespace-nowrap">4000+</p>
          <p className="text-xs whitespace-nowrap">
            Total Offers For Undergrad Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
