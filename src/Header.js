export function Header() {
  return (
    <header>
      {['Profile', 'Education', 'Skills', 'Work experiences'].map(nav => (
        <div>{nav}</div>
      ))}
    </header>
  );
}
