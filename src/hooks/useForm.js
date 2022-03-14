import { useState } from "react";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return [form, onChange];
};

export default useForm;
