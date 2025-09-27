import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CgCloseO } from "react-icons/cg";
type ColorBarProp = {
  isPopupOn: boolean;
  onChangeColor: (color: string) => void;
};

const ColorBar = ({ isPopupOn, onChangeColor }: ColorBarProp) => {
  const [color, setColor] = useState("#000000");
  const onSelectColor = (newColor: string) => {
    setColor(newColor);
  };

  const onclick = () => {
     onChangeColor(color)
  };

  return (
    <div
      onClick={onclick}
      className={`absolute top-6 right-0 z-100 flex flex-col items-end transition-all duration-300 ease-in-out ${isPopupOn ? "visible scale-100 opacity-100" : "invisible scale-50 opacity-0"} `}
    >
      <CgCloseO className="m-1 cursor-pointer" onClick={onclick} />
      <HexColorPicker className={``} color={color} onChange={onSelectColor} />
    </div>
  );
};

export default ColorBar;
