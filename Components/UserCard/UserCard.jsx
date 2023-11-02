export default function UserCard({ fullName, userName, avatar }) {
  return (
    <div className="user-card">
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>
        <h5> Name: {fullName}</h5>

        <p> Username: {userName}</p>
      </div>
    </div>
  );
}
