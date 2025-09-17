import { useState } from "react";

type ColorBarProp = {
  inputId: string;
  isPopupOn: boolean;
  onChangeColor: (color: string) => void;
};

const ColorBar = ({inputId, isPopupOn, onChangeColor }: ColorBarProp) => {
  const [color, setColor] = useState("#000000");

  const onAddColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color = e.currentTarget.value;
    setColor(color);
    onChangeColor(color);
  };

  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.currentTarget.value;
    setColor(color);
    onChangeColor(color);
    e.target.blur()
  };

  return (
    <div
      className={`ring-secondary absolute  top-6 right-0 w-fit space-y-4 rounded bg-white p-4 shadow-lg ring-1 transition-all duration-300 ease-in-out ${isPopupOn ? "scale-100 opacity-100 visible" : "scale-50 opacity-0 hidden"}`}
    >
      <div className="flex items-center flex-wrap gap-2 w-20">
        <button
          value="transparent"
          className="size-3 rounded-full bg-transparent border"
          onClick={onAddColor}
        ></button>
        <button
          value="#000000"
          className="size-3 rounded-full bg-black"
          onClick={onAddColor}
        ></button>
        <button
          value="#fb2c36"
          className="size-3 rounded-full bg-red-500"
          onClick={onAddColor}
        ></button>
        <button
          value="#8200db"
          className="size-3 rounded-full bg-purple-700"
          onClick={onAddColor}
        ></button>
        <button
          value="#7ccf00"
          className="size-3 rounded-full bg-lime-500"
          onClick={onAddColor}
        ></button>
        <button
          value="#155dfc"
          className="size-3 rounded-full bg-blue-600"
          onClick={onAddColor}
        ></button>
      </div>
      <div className="flex items-center justify-between gap-x-2 text-xs">
        <p style={{ color: color }}>Custom</p>
        <label
          htmlFor={inputId}
          className={`block size-4 rounded-full border-1 cursor-pointer`}
          style={{ backgroundColor: color }}
        >
          <input
            value={color}
            className="size-0"
            type="color"
            name="color"
            id={inputId}
            onChange={onchangeInput}
          />
        </label>
      </div>
    </div>
  );
};

export default ColorBar;
