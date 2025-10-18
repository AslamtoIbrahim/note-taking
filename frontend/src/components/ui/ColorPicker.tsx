import { useState } from "react";
import { RgbaColorPicker, type RgbaColor } from "react-colorful";
type ColorBarProp = {
  isPopupOn: boolean;
  onChangeColor: (color: RgbaColor) => void;
  onCloseColorPicker?: () => void;
};

const ColorPicker = ({
  isPopupOn,
  onChangeColor,
  onCloseColorPicker,
}: ColorBarProp) => {
  const [color, setColor] = useState<RgbaColor>({ r: 0, g: 0, b: 0, a: 1 });
  const onSelectColor = (newColor: RgbaColor) => {
    setColor(newColor);
  };

  const onclick = () => {
    onChangeColor(color);
  };

  const onClickHandler = () => {
    onCloseColorPicker?.();
  };

  return (
    <div>
      {isPopupOn && <div className="bc-dg z-10" onClick={onClickHandler} />}
      <div
        onClick={onclick}
        className={`absolute top-6 right-0 z-20 flex flex-col items-end transition-all duration-300 ease-in-out ${isPopupOn ? "visible scale-100 opacity-100" : "invisible scale-50 opacity-0"} `}
      >
        <RgbaColorPicker color={color} onChange={onSelectColor} />
      </div>
    </div>
  );
};

export default ColorPicker;
