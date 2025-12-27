import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../styles/App.module.css";

const schema = yup
  .object({
    username: yup.string().min(2, "Мінімум 2 символи").required("Введіть ім'я"),
    cardCount: yup.number().required(),
  })
  .required();

export const StartPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      cardCount: 8,
    },
  });

  const onSubmit = (data) => {
    localStorage.setItem("gamePairs", data.cardCount);
    navigate(`/game/${data.username}`);
  };

  return (
    <div className={styles.content}>
      <div className={styles.startCard}>
        <h1>Memory Game</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.startForm}>
          <div className={styles.formGroup}>
            <label>Ваше ім'я (ID):</label>
            <input
              {...register("username")}
              className={styles.selectInput}
              placeholder="Наприклад: Player1"
            />
            {errors.username && (
              <span style={{ color: "red" }}>{errors.username.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label>Складність:</label>
            <select {...register("cardCount")} className={styles.selectInput}>
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
