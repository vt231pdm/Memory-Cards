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
