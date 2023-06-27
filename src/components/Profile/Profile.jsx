import "./profile.styles.css";

export const Profile = () => (
  <div className="profile">
    <div className="profile_top">
      <img src="http://placehold.it/180x250" alt="#" />
      <ul>
        <li>
          <p>User name</p>
          <input type="checkbox" />
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nobis!
    </p>
  </div>
);
