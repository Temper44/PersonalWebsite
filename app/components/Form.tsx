import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import Toast from "./Toast";
import Button from "./Button";

const Form = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ email: "", message: "" });
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_jptvn35",
        "template_fxo1wfr",
        {
          to_name: "Mathias",
          from_email: form.email,
          to_email: "mathiasebner2000@gmail.com",
          message: form.message,
        },
        "cafKPja6wt7dQYxYV",
      );

      setToast({ message: "Your message has been sent!", type: "success" });

      setForm({ email: "", message: "" });
    } catch {
      setToast({
        message: "An error occurred, please try again.",
        type: "error",
      });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex w-full flex-col space-y-6 py-2 sm:py-4"
      >
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="field-input"
          placeholder="Your email"
          maxLength={100}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="field-input"
          placeholder="Your message"
          maxLength={1000}
        />
        <Button type="submit" text="Submit" icon={<FaPaperPlane />} />
      </form>
    </>
  );
};

export default Form;
