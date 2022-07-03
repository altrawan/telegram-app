import React from 'react';
import ContentLoader from 'react-content-loader';
import { AvatarDefault } from '../../../assets/images';
import './index.scss';

const index = ({ detailReceiver }) => {
  return (
    <div className="style__contact">
      {detailReceiver.isLoading ? (
        <ContentLoader />
      ) : (
        <>
          <div className="style__contact--header">
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.20711 9.3271L9.22925 3.30496C9.24226 3.29283 9.2551 3.28044 9.26777 3.26777L9.97487 2.56066C10.5607 1.97487 10.5607 1.02513 9.97487 0.43934C9.38909 -0.146447 8.43934 -0.146447 7.85355 0.43934L7.52579 0.767105L7.52513 0.766442L0.732233 7.55933C-0.244077 8.53564 -0.244079 10.1186 0.732233 11.0949L7.14646 17.5091L7.52513 17.8878L7.85357 18.2162C8.43936 18.802 9.3891 18.802 9.97489 18.2162C10.5607 17.6304 10.5607 16.6807 9.97489 16.0949L9.64645 15.7664L9.26778 15.3878C9.26635 15.3863 9.2649 15.3849 9.26346 15.3835L3.20711 9.3271Z"
                fill="#7E98DF"
              />
            </svg>
            <h3 className="style__contact--title">
              {detailReceiver.data.username ? detailReceiver.data.username : 'No Username'}
            </h3>
          </div>
          <div className="style__contact--avatar">
            <img
              src={`https://drive.google.com/uc?export=view&id=${detailReceiver.data.avatar}`}
              alt={detailReceiver.data.name}
              onError={(e) => {
                e.target.src = AvatarDefault;
              }}
            />
          </div>
          <div className="style__contact--profile">
            <div className="desc">
              <h4 className="style__contact--title">
                {detailReceiver.data.username ? detailReceiver.data.username : 'No Username'}
              </h4>
              <p>Online</p>
            </div>
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1" fill="white">
                <path d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V16C22 18.2091 20.2091 20 18 20H1C0.447716 20 0 19.5523 0 19V4Z" />
              </mask>
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V16C22 18.2091 20.2091 20 18 20H1C0.447716 20 0 19.5523 0 19V4Z"
                stroke="#7E98DF"
                strokeWidth="4"
                mask="url(#path-1-inside-1)"
              />
              <rect x="5" y="9" width="12" height="2" rx="1" fill="#7E98DF" />
              <rect x="5" y="5" width="12" height="2" rx="1" fill="#7E98DF" />
              <rect x="5" y="13" width="12" height="2" rx="1" fill="#7E98DF" />
            </svg>
          </div>
          <div className="style__contact--profile">
            <div className="desc">
              <h5>Phone number</h5>
              <p>
                {detailReceiver.data.phone_number
                  ? detailReceiver.data.phone_number
                  : 'No Phone Number'}
              </p>
            </div>
          </div>
          <div className="style__contact--divider" />
        </>
      )}
    </div>
  );
};

export default index;
