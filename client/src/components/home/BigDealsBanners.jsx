import React from "react";

const BigDealsBanners = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="row-span-4">1</div>
          <div className="row-span-2">2</div>
          <div className="row-span-2 col-start-2 row-start-3">3</div>
        </div>
      </section>
    </>
  );
};

export default BigDealsBanners;
