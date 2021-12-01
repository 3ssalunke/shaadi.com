import { useCallback, useRef, useState } from "react";
import useUserData from "../helpers/useUserData";
import UserComponent from "./UserComponent";

const ScrollComponent = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, error, users, hashMore } = useUserData(pageNumber);

  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hashMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hashMore]
  );

  return (
    <div className="scroll-wrapper">
      {users.length > 0 &&
        users.map((user, i) => {
          if (users.length === i + 1) {
            return (
              <UserComponent
                ref={lastBookElementRef}
                user={user}
                key={user.id}
              />
            );
          }
          return <UserComponent user={user} key={user.id} />;
        })}
      <div className="loader">{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </div>
  );
};

export default ScrollComponent;
