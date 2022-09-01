import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchAllAction, deleteUserAction, sort } from "./redux/slices/user.slice";

const App: React.FC = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllAction());
  }, [dispatch]);

  function handleSort(sortBy: string) {
    dispatch(sort(sortBy));
  }

  return (
    <>
      {data.users && (
        <>
          <div>Fetched data</div>

          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("firstName")}>First Name</th>
                <th onClick={() => handleSort("lastName")}>Last Name</th>
                <th onClick={() => handleSort("email")}>Email Name</th>
                <th onClick={() => handleSort("phone")}>Phone</th>
              </tr>
            </thead>

            <tbody>
              {data.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><button onClick={() => dispatch(deleteUserAction(user.id))}>Delete</button></td>
                    <td><button>Update</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default App;
