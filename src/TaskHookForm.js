import { nanoid } from "nanoid";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export default function TaskHookForm({ kisiler, submitFn }) {
  const { register, handleSubmit } = useForm({
    defaultValues: { title: "", description: "", people: [] },
  });
  const notify = () => toast("Tebrikler!");

  const onFormSubmit = (formData) => {
    submitFn({
      ...formData,
      id: nanoid(5),
      status: "yapılacak",
    });
  };
  return (
    <form className="taskForm" onSubmit={handleSubmit(onFormSubmit)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          {...register("title")}
        />
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          {...register("description")}
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
        ></textarea>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input type="checkbox" name="people" {...register("people")} />
              {p}
            </label>
          ))}
        </div>
      </div>

      <div className="form-line">
        <button onClick={notify} className="submit-button" type="submit">
          Kaydet
        </button>
      </div>
    </form>
  );
}
