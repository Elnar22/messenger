import { useDispatch, useSelector } from "react-redux";
import "./profile.styles.css";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const handleSubmit = (text) => {
    dispatch(setName(text));
  };

  return (
    <div className="profile">
      <div className="profile_top">
        <img src="http://placehold.it/180x250" alt="#" />
        <ul>
          <li>
            <p>User name</p>
            <input onChange={handleClick} type="checkbox" />
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
          </li>
          <li>
            <p>Full age</p>
            <input type="checkbox" />
          </li>
          <li>
            <p>e-mail</p>
            <input type="checkbox" />
          </li>
        </ul>
      </div>
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        nobis!
      </p>
    </div>
  );
};
