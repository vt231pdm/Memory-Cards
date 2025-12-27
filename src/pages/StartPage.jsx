import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    cardCount: yup.number().required(),
  })
  .required();

export const StartPage = ({ onStart }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cardCount: Number(localStorage.getItem("gamePairs")) || 8,
    },
  });

  const onSubmit = (data) => {
    localStorage.setItem("gamePairs", data.cardCount);
    onStart();
  };

  return (
    <div className="content">
      <div className="start-card">
        <h1>Memory Game</h1>
        <p>Знайди всі пари однакових карток!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="start-form">
          <div className="form-group">
            <label>Оберіть складність:</label>
            <select {...register("cardCount")}>
              <option value="4">4 пари (Легко)</option>
              <option value="8">8 пар (Середньо)</option>
              <option value="12">12 пар (Складно)</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Почати гру
          </button>
        </form>
      </div>
    </div>
  );
};
