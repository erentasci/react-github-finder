import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;

  return (
    <div className="card shadow-md compact side bg-gray-700">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <a
            className="text-base-content text-opacity-40"
            to={`/users/${login}`}
          >
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
