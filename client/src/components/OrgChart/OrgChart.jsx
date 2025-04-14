import React from "react";

const OrgChart = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white text-[#0A0F35] font-sans">
      <h1 className="text-3xl font-semibold mb-10">Organizational Chart</h1>

      {/* CEO */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">CEO</div>
        <div className="w-1 h-6 bg-black" />

        <div className="flex gap-20 mt-2">
          {/* Left Block */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Managing Director</div>
            <div className="w-1 h-6 bg-black" />

            {/* Subordinates */}
            <div className="flex gap-8 mt-2">
              {/* Finance Director */}
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Finance Director</div>
                <div className="w-1 h-6 bg-black" />
                <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded text-sm">Purchase in charge</div>
              </div>

              {/* Project Engineer */}
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Project Engineer</div>
                <div className="w-1 h-6 bg-black" />
                <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded text-sm">Site Supervisor</div>
              </div>

              {/* Project Coordinator */}
              <div className="flex flex-col items-center">
                <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Project Coordinator</div>
              </div>
            </div>
          </div>

          {/* Middle Block - Secretary */}
          <div className="flex flex-col items-center justify-start mt-[70px]">
            <div className="w-[130px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Secretary</div>
          </div>

          {/* Right Block - Operations */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Operations Manager</div>
            <div className="w-1 h-6 bg-black" />

            {/* Subordinates */}
            <div className="flex gap-6 mt-2">
              <div className="w-[100px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded">Sales</div>
              <div className="w-1 h-10 bg-black" />
              <div className="flex flex-col">
                <div className="w-[180px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded text-sm">
                  Social Media and
                </div>
                <div className="w-[180px] h-[40px] bg-[#001F5C] text-white flex items-center justify-center rounded text-sm -mt-1">
                  Marketing Incharge
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
