import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchAllAction, sort, deleteUserAction } from '../redux/slices/user.slice';

const Home: React.FC = () => {
  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllAction());
  }, [dispatch]);

  function handleSort(sortBy: string) {
    dispatch(sort(sortBy));
  }

  return (
    <>
      {data.loading && <div style={{fontSize: "3em"}}>Loading...</div>}
      {data.users ? (
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
                    <td><button onClick={() => {if (user.id !== undefined) dispatch(deleteUserAction(user.id))}}>Delete</button></td>
                    <td><button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <div>{data.error}</div>
      )}
    </>
  );
}

export default Home
