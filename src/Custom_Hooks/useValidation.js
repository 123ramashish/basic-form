import { useEffect, useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: false,
    guestName: "",
  });

  const validateForm = (data) => {
    let validationErrors = {};
    if (!data.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (Number(data.age) <= 0) {
      validationErrors.age = "Age must be a number greater than 0";
    }
    if (data.attendingWithGuest && !data.guestName.trim()) {
      validationErrors.guestName = "Guest Name is required";
    }
    return validationErrors;
  };

  useEffect(() => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  }, [formData]);

  return { errors, setErrors, formData, setFormData, validateForm };
};

export default useValidation;
