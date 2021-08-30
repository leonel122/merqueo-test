import React from "react";

function Avatar({ src, alt }) {
  return (
    <div className="contentAvatar">
      <img
        className="avatar"
        src={
          src
            ? src
            : `https://watertownbaby.s3.us-east-1.amazonaws.com/user/logo/576b42a865-6c63-45f1-af81-34303b05e7fe_BaconCheeseBurger.png`
        }
        alt={alt}
      />
    </div>
  );
}

export default Avatar;
