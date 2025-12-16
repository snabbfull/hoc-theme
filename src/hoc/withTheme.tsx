import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import type { CSSProperties } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  onClick: () => void;
  style: React.CSSProperties;
}

export function WithTheme<P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P & ThemeProps>
): ComponentType<P> {
  return function WithThemeComponent(props: P) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    
    const componentStyle: CSSProperties = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      border: "1px solid gray",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "10px",
      fontFamily: "Helvetica",
    };
    
    useEffect(() => {
      if (theme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }

      return () => {
        document.body.classList.remove("dark-theme", "light-theme");
      };
    }, [theme]);

    const onChangeTheme = () => {
      setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
      <WrappedComponent
        {...props}
        theme={theme}
        onClick={onChangeTheme}
        style={componentStyle}
      />
    );
  };
}