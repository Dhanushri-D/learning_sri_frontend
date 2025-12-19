import { useForm } from "react-hook-form";
import "./../Styles/form.css";
const ComplaintForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "Sneha R",
      department: "CSE",
      year: "1st Year",
      id: "C001",
      title: "Water leakage in hostel bathroom",
      category: "Hostel",
      priority: "High",
      status: "In Progress",
      description:
        "There is continuous leakage from the shower pipe causing the bathroom to flood.",
    },
  });
  const onSubmithandler = async (fdata) => {
    try {
      const response = await fetch(
        "https://learning-sri-backend-fq8o.onrender.com/api/v1/complaints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert("Complaint submitted successfully");
        reset();
        console.log("Saved:", result);
      } else {
        alert(result.message || "Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };
  return (
    <div className="forms">
      <h2>Complaint Form</h2>
      <form onSubmit={handleSubmit(onSubmithandler)}>
        <label>Name:</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>Department:</label>
        <select {...register("department", { required: true })}>
          <option value="">Select</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
          <option value="MECH">MECH</option>
        </select>
        <label>Year:</label>
        <select {...register("year", { required: true })}>
          <option value="">Select</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
        <label>ID:</label>
        <input
          type="text"
          {...register("id", {
            required: "Id is required please enter",
          })}
        />
        {errors.id && <p>{errors.id.message}</p>}
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: true })}
        />
        <label>Category:</label>
        <input
          type="text"
          {...register("category", { required: true })}
        />
        <label>Priority:</label>
        <select {...register("priority", { required: true })}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label>Description:</label>
        <textarea
          {...register("description", { required: true })}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplaintForm;