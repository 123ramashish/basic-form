import formImage from "./assets/formImage.png";
import useValidation from "./Custom_Hooks/useValidation";
import React from "react";

export default function App() {
  const { errors, setErrors, formData, setFormData, validateForm } =
    useValidation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
      alert("Form submitted successfully! Check the console for the data.");
    }
  };

  return (
    <div className="p-8 flex  justify-center  mt-8 m-auto bg-gradient-to-r from-stone-300 to-stone-500 rounded-md shadow-md h-auto w-1/2">
      <div className="">
        <img src={formImage} alt="" className="w-auto h-full " />
      </div>
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold text-center pb-4">
          Basic Dynamic Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap gap-8 mt-4"
        >
          <div>
            <label
              htmlFor="name"
              className="font-medium text-xl mr-2 font-sans"
            >
              Name:
            </label>
            <input
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <br />
            {errors.name && (
              <span className="error md:ml-16">{errors.name}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-medium text-xl mr-3 font-sans"
            >
              Email:
            </label>
            <input
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            {errors.email && (
              <span className="error md:ml-16">{errors.email}</span>
            )}
          </div>

          <div>
            <label htmlFor="age" className="font-medium text-xl mr-6 font-sans">
              Age:
            </label>
            <input
              className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <br />
            {errors.age && <span className="error md:ml-16">{errors.age}</span>}
          </div>

          <div>
            <label className="font-medium text-xl mr-2 font-sans flex items-center gap-4">
              Are you attending with a guest?
              <input
                className=" h-8 w-8 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 "
                type="checkbox"
                name="attendingWithGuest"
                checked={formData.attendingWithGuest}
                onChange={handleChange}
              />
            </label>
          </div>

          {formData.attendingWithGuest && (
            <div>
              <label
                htmlFor="guestName"
                className="font-medium text-xl mr-6 font-sans"
              >
                Guest Name:
              </label>
              <input
                className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                type="text"
                id="guestName"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                required
              />
              {errors.guestName && (
                <span className="error md:ml-36">{errors.guestName}</span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="hover:bg-emerald-400 bg-green-400 text-white text-xl p-2 rounded-md border-none shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
