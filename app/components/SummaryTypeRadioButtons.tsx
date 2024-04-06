import React from "react";
import { useState } from "react";

//@ts-ignore
function SummaryTypeRadioButtons({ summaryType }) {
  const [checkedVal, setCheckedVal] = useState("Paragraph");

  return (
    <>
      <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
        <input
          type="radio"
          id="paragraph"
          name="summaryType"
          value="Paragraph"
          checked={checkedVal === "Paragraph"}
          onChange={() => {
            summaryType.current = "Paragraph";
            setCheckedVal("Paragraph");
          }}
          className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
        />
        <label htmlFor="paragraph" className="p-1">
          Paragraph
        </label>
      </div>
      <div className="flex items-center border-r-2 [border-color:var(--color-dark-grey)] p-1 px-5">
        <input
          type="radio"
          id="bulletPoints"
          name="summaryType"
          value="Bullet Points"
          className="w-6 h-6 border-2 [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
          checked={checkedVal === "Bullet Points"}
          onChange={() => {
            summaryType.current = "Bullet Points";
            setCheckedVal("Bullet Points");
          }}
        />
        <label htmlFor="bulletPoints" className="p-1">
          Bullet Points
        </label>
      </div>
      <div className="flex items-center [border-color:var(--color-dark-grey)] p-1 px-5">
        <input
          type="radio"
          id="sentence"
          name="summaryType"
          value="Sentence"
          checked={checkedVal === "Sentence"}
          onChange={() => {
            summaryType.current = "Sentence";
            setCheckedVal("Sentence");
          }}
          className="w-6 h-6 border-2  [border-color:var(--color-dark-grey)] rounded-full p-1 mr-4 hover:cursor-pointer"
        />
        <label htmlFor="sentence" className="p-1">
          Sentence
        </label>
      </div>
    </>
  );
}

export default SummaryTypeRadioButtons;
