import { useEffect, useRef, useState } from "react";
import ComplaintCard from "./../Components/ComplaintCard";
import "./../Styles/home.css";
const Home = () => {
  const [data, setData] = useState([]);
  const complaintRef = useRef(null);
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await fetch("https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints");
        const result = await res.json();

        if (res.ok) {
          setData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchComplaints();
  }, []);
  const categoryCounts = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <div className="heroContent">
          <h1>Welcome to HelpHub</h1>
          <p>
            A smart campus complaint & feedback system to raise, track, and
            resolve issues efficiently.
          </p>
          <button
            className="heroBtn"
            onClick={() =>
              complaintRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Complaints
          </button>
        </div>
      </div>
      <div className="aboutSection">
        <h2>About HelpHub</h2>
        <p>
          HelpHub is a centralized platform designed for students to easily
          submit complaints related to hostel, academics, transport, network,
          and campus facilities.
        </p>
      </div>
      <div className="categorySection">
        <h2>Complaint Categories</h2>

        <div className="categoryGrid">
          <div className="categoryCard">
            Hostel  
            <span className="categoryBadge">
              {categoryCounts["Hostel"] || 0}
            </span>
          </div>

          <div className="categoryCard">
            Academics
            <span className="categoryBadge">
              {categoryCounts["Academics"] || 0}
            </span>
          </div>

          <div className="categoryCard">
            Transport
            <span className="categoryBadge">
              {categoryCounts["Transport"] || 0}
            </span>
          </div>

          <div className="categoryCard">
            Network
            <span className="categoryBadge">
              {categoryCounts["Network"] || 0}
            </span>
          </div>
          <div className="categoryCard">
            Campus Facilities
            <span className="categoryBadge">
              {categoryCounts["Campus"] || 0}
            </span>
          </div>
        </div>
      </div>
      <h2 ref={complaintRef} className="sectionTitle">
        Recent Complaints
      </h2>
      <div className="cardContainer">
        {data.map((item) => (
          <ComplaintCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default Home;