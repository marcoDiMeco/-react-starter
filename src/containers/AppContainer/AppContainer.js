import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestUsers,
} from "../../redux/users/users.actions";
import { Button } from "../../components";

const AppContainer = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(50));
  }, [dispatch]);

  console.log(users);

  return (
    <React.Fragment>
      <Button>Button</Button>
    </React.Fragment>
  );
};

export default AppContainer;
