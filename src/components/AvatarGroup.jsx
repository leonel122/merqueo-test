import React from "react";

function AvatarGroup({ post, setShowReactions }) {
  return (
    <div className="contentAvatarGroup">
      {post.likess?.map((it, key) => (
        <>
          {key <= 2 && (
            <div className="avatarGroup">
              <img src={it.avatar} alt="logo" />
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default AvatarGroup;
