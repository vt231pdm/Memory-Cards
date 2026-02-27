/** @module Components */
/**
 * Основний layout додатку.
 *
 * Відображає заголовок гри, кількість ходів (якщо передано),
 * основний контент та футер.
 *
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {React.ReactNode} props.children - Вміст сторінки, що рендериться всередині layout.
 * @param {number} [props.moves] - Кількість зроблених ходів (відображається, якщо передано).
 *
 * @returns {JSX.Element} Розмітка сторінки з хедером, контентом та футером.
 */
export const Layout = ({ children, moves }) => {
  return (
    <div className="app-layout">
      <header>
        <h1>Memory Game</h1>
        {moves !== undefined && <p>Хіди: {moves}</p>}
      </header>

      <main className="content">{children}</main>

      <footer>
        <p>© 2025 Гра "Парні картки"</p>
      </footer>
    </div>
  );
};
