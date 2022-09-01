import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TUser } from "../redux/slices/types";
import { fetchAllAction, updateUserAction } from "../redux/slices/user.slice";

const Edit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<TUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const user = data.users?.find((user) => user.id === Number(id));
    if (!user) dispatch(fetchAllAction());
    if (user !== undefined) setInput(user);
  }, [data, dispatch, id]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserAction(input));
    navigate("/");
  };

  return (
    <>
      <div>
        Editing {input?.firstName} {input?.lastName}
      </div>

      <form>
        <input
          type="text"
          name="firstName"
          value={input?.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={input?.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={input?.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          value={input?.phone}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Save</button>
      </form>

      <Link to="/">Back to main</Link>
    </>
  );
};

export default Edit;
