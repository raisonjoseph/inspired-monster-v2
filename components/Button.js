export default function FirstPost({ title, icon, onClick }) {
  return (
    <button className="btn" onClick={onClick ? onClick : undefined}>
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}
