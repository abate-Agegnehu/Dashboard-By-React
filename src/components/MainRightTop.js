import React from "react";

function MainRightTop() {
  return (
    <div className='topCard'>
      <div className='topCard_name'>
        <h2>Statistics</h2>
        <a href='#'>View More</a>
      </div>
      <div className='earning'>
        <p>
          Artwork Sold<span>500</span>
        </p>
        <p>
          Artwork Canceled<span>50</span>
        </p>
        <p>
          Artwork Pending<span>40</span>
        </p>
        <p>
          Artwork Delivered<span>100</span>
        </p>
        <p>
          Total Earnings<span>690 ETH</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTop;
