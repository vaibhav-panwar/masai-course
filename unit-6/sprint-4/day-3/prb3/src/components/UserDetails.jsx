// import module.css here;
const UserDetails = (props) => {
  const {user} = props
  return (
    <>
      <div data-testid="user-container">
        {/* user image */}
        <img src={user.avatar} alt="jmd" />
        <div>
          <div>
            <h3 data-testid="user-fname">{user.first_name}</h3>
            <h3 data-testid="user-lname">{user.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{user.address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{user.karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{user.followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{user.posts}</h3>
        </div>
        <button data-testid="follow-btn">{user.is_following?"Unfollow":"Follow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
