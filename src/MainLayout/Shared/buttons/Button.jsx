import { useState } from "react";

const Button = ({ initialColor, title, width, height, padding }) => {
  const [buttonColor, setButtonColor] = useState(initialColor || "red");

  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: "white",
        width: width || "100px",
        height: height || "40px",
        padding: padding || "10",
        cursor: "pointer",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "500",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
