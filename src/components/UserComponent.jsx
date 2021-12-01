import { forwardRef } from "react";

const UserComponent = (props, ref) => {
  const { user } = props;
  return (
    <div ref={ref} className="scroll-container">
      <div className="scroll-container-left">
        <img src={user.picture} alt={user.firstName} />
      </div>
      <div className="scroll-container-right">
        <div>
          Name:{" "}
          <span>
            {user.title.toUpperCase() +
              ". " +
              user.firstName +
              " " +
              user.lastName}
          </span>
        </div>
        <div>
          Mobile: <span>123456789</span>
        </div>
        <div>
          Email: <span>fake@fake.com</span>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(UserComponent);
