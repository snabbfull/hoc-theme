import type { CSSProperties } from "react";

export function ThemeButton({
  theme,
  onClick,
  style
}: {
  theme: "light" | "dark";
  onClick: () => void;
  style: CSSProperties;
}) {
  return (
    <button className="style-btn" onClick={onClick} style={style}>
      Поменять стиль. Сейчас {theme}
    </button>
  );
}