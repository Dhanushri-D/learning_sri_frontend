import "./../Styles/profile.css"
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const { data } = useOutletContext();
  const loggedInUserName = "Dhanu";
  const myComplaints = data.filter(function (item) {
    return item.user.name === loggedInUserName;
  });
  var department = "";
  var year = "";
  if (myComplaints.length > 0) {
    department = myComplaints[0].user.department;
    year = myComplaints[0].user.year;
  }
  var resolvedCount = 0;
  for (var i = 0; i < myComplaints.length; i++) {
    if (myComplaints[i].status === "Resolved") {
      resolvedCount++;
    }
  }
  return (
    <div className="profilePage">
      <h1>My Profile</h1>
      <div className="profileCard">
        <h2>{loggedInUserName}</h2>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Year:</strong> {year}</p>
        <button className="logoutBtn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
      <div className="statsContainer">
        <div className="statBox">
          <h3>Total Complaints</h3>
          <p>{myComplaints.length}</p>
        </div>
        <div className="statBox resolved">
          <h3>Resolved</h3>
          <p>{resolvedCount}</p>
        </div>
      </div>
      <div className="complaintList">
        <h2>My Complaints</h2>
        {myComplaints.length === 0 && (
          <p>No complaints submitted yet.</p>
        )}
        {myComplaints.length > 0 &&
          myComplaints.map(function (item) {
            return (
              <div className="complaintRow" key={item.id}>
                <div>
                  <p>{item.category}</p>
                </div>
                <span
                  className={
                    "status " + item.status.replace(" ", "")
                  }
                >
                  {item.status}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Profile;