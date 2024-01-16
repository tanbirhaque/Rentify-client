import { useState } from "react";

const Button = ({ initialColor, title, padding, fontWeight }) => {
  const [buttonColor, setButtonColor] = useState(initialColor || "white");

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: "white",
        width: "fit-content",
        height: "auto",
        padding: padding || "10px",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: fontWeight || "500",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
