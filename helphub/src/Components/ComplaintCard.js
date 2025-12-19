import { useNavigate } from "react-router-dom";
import "./../Styles/home.css";
const ComplaintCard = ({ item }) => {
  const navigate = useNavigate();
  const categoryImages = {
    Hostel:
      "https://sece.ac.in/wp-content/uploads/2024/07/boyshostelfacilities_Open-to-Sky-seating.jpg",
    Academics:
      "https://sece.ac.in/wp-content/uploads/2024/07/worldclassfacilities_interactiveclassroom-1-768x373.jpg",
    Transport:
      "https://sece.ac.in/wp-content/uploads/2024/06/transport-banner-1.jpg",
    Network:
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-74788,resizemode-75,msid-123929818/industry/telecom/telecom-news/wait-for-wifi-6-gets-longer-over-spectrum-licensing-issues/wifi.jpg",
    Campus:
        "https://sece.ac.in/wp-content/uploads/2024/06/research-institute-intro-banner-1.jpg",
    Amenity:
        "https://sece.ac.in/wp-content/uploads/2024/06/worldclass-facilties_amenitycentre.jpg",
    Laboratory:
        "https://sece.ac.in/wp-content/uploads/2024/07/IT-WEB-Banner-1-768x280.jpg",
    Infrastructure:
        "https://sece.ac.in/wp-content/uploads/2024/06/worldclass-facilties_IT-centre-768x373.jpg",
  };
  const imageUrl =
    categoryImages[item.category] ||
    "https://sece.ac.in/wp-content/uploads/2024/06/research-institute-intro-banner-1.jpg";
  return (
    <div
      className="complaintCard"
      onClick={() => navigate(`/complaintDetails/${item.id}`)}>
      <img src={imageUrl} alt={item.category} />
      <h1>{item.category}</h1>
    </div>
  );
};
export default ComplaintCard;