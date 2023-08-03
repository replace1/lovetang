import React, { useEffect } from 'react';
import './Details.less';
import { Swiper, Toast } from 'antd-mobile';
import { Image } from 'antd';
import { connect } from 'dva';

export default connect((state) => {
  return {
    detail: state.list.detail,
  };
})(Details);

function Details(props) {
  const { id, dispatch, detail } = props;

  useEffect(() => {
    dispatch({ type: 'list/Details', payload: id });
  }, [id]);

  const items = detail?.slider_image.map((value, index) => (
    <Swiper.Item key={index}>
      <div>
        <Image src={value} />
      </div>
    </Swiper.Item>
  ));

  return (
    <div
      styleName="detailsBox"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div styleName="title-box">商品详情</div>
      <div styleName="swiper-box">
        <Swiper loop autoplay>
          {items}
        </Swiper>
      </div>
      <div styleName="goods-info">
        <div styleName="number-wrapper">
          <div styleName="price">
            <span>¥</span>
            {detail?.price}
          </div>
          <div styleName="old-price">¥{detail?.vip_price}</div>
          <div>
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAWCAYAAACL6W/rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTEtMTBUMTU6MzI6MTkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTExLTEwVDE1OjMyOjUxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTExLTEwVDE1OjMyOjUxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYzBlOWE3LWE4YTEtNGZmNi05Nzg1LTkwMTViNmJjNzE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmZWMwZTlhNy1hOGExLTRmZjYtOTc4NS05MDE1YjZiYzcxOTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZWMwZTlhNy1hOGExLTRmZjYtOTc4NS05MDE1YjZiYzcxOTgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlYzBlOWE3LWE4YTEtNGZmNi05Nzg1LTkwMTViNmJjNzE5OCIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0xMFQxNTozMjoxOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iB4NtgAABDpJREFUWIXdln1MlVUcxz/neR7QIEYi6VSYqLTSZjgvQi4VtFSwWUSytmaa1h8tw8ra/KuXLVtb/9RmU1ZLcxMr04q8LRlxezFIq2uxgZCvpMQ7oSYvl+c55/THxa53PBCXcGx+/7l7zvmd3/l+f2/nCq016enpu4HHuYFg9P9uAk6MJZHRhgHg9/u7LcsqALrHmM+o4WrGOHbs2Ang6THkMqowrv3w+/17gA/GhsrownJZ2wRkAHOGOhgbA6vvldwxS3FLnKa906DmlMDrM7HtoM3DOZJAn8DrMwb1s3C+Yk6qYvcBiyUZivg4TUmZCcCqpZKpk3SYvSMFzW1QfdKgoUkMX5jf7+/OzMwscBynZrBDqSmKom19aC2oOWnQ3G4w/05J3nLNhjUOG7eOo/0vSJqiKci18f04nu4ed1/Pb7Rp7RC8vx+W3i2ZPi0kbPUyyW0zFKfrQ4GJjwverxR8eMjk7V1RwxMGwX7zeDyDRmPbFpva0ybPvRaFlCFXM5I1xW8FeGWzTeGrUXh9Jo/lOSxbqFyzdvtMzcxkza5PXGkAUFVr8MLr0WFrE+I1G9ZI1j7ocLza5PufBvoevEYGwU3jYdZ0TXmlcY2oIM5dEBz4yiIjTRIbA2f+ENSdFeRmO66+crMlXT3w7VEzIg6dlwTvfWwS6IP0ucrVJmJhPb3Q0i5YvkgSHT1wf2exxfoXx+H0i/b6TBbcpUhMCLcTAlYulpRXmvQGImUBV7oEFy8LYmO0637EwgDe2BnFvNmK/dsDPPmIQ2pKKGo9vVB3RhDoJ3v4OxOlYMXi8PSmz1XcmqDx+iLL1lVkpCkmJ2rOnHeXMHhxD4GKXwwKnhnHA/dJcrIUTz3qcKFJ8HWFyaelJk2toWl18bKg8rjJqmzJvpKQiNxsSWOr4Hj10LGdnAg5WaHARUdpkqdo8lZIGpoNPit1D8yIhAE0tgiKii2KiiElSZGVqbl/qcO6fIdt70RxqDx0oddn8OZWm5QkTX2DIDoali2UfOT97+tnJCkK19n/ftsONLcJDh42KS4x6el1PxexsNgYiI/TNLaEslLfYFDfAHsOmmx5wuHlzTY1pwzOng/aHPnZ5NLfNjlZkqJiiyULFDfHMKwyPPrbwKk4HETcY2mzFV+8GyB5qnvT7thrIqUIm1a2DWUVFrlZwT7LyXKoqhv6gf2/iFhYVa2BVPDQCum6P3ECWKamvTN83eszmTZZsyhdco9HjXhoDBcRl2JXN2zfY/HsBgfDCBJu7RCkTFPMm6PIXyk512Bw9Ndw4tW/C+r/FLxU6KAUlP0wooE8bIxoeOz93MKRsD4/+Ppfhe1A6RGTHXst179QX35jsmmtQ1mFyZWu61eGAEJrjRADL/F4PO5NdO1hAYkJmkkT4fKV4MPd13ddeEaMEY97AK2hrUPQ1jFadEYP17fQxxA3rLB/AInulg8syJa/AAAAAElFTkSuQmCC" />
          </div>
        </div>
        <div styleName="name">{detail?.store_name}</div>
        <div styleName="msg">
          <div styleName="item">原价:¥{detail?.cost}</div>
          <div styleName="item">销量:{detail?.browse}</div>
          <div styleName="item">库存:{detail?.ficti}</div>
        </div>
      </div>
      <div styleName="con-box">
        <div styleName="title-box">商品介绍</div>
        <div styleName="content">{detail?.store_info}</div>
      </div>
    </div>
  );
}
