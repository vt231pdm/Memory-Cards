/** @module Components */
/**
 * Кнопка з підтримкою варіантів стилю.
 *
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {React.ReactNode} props.children - Вміст кнопки (текст або елементи).
 * @param {function} props.onClick - Обробник події натискання.
 * @param {"primary" | "secondary" | "danger"} [props.variant="primary"] - Варіант стилю кнопки.
 *
 * @returns {JSX.Element} Кнопка з відповідними класами стилізації.
 */
export const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
