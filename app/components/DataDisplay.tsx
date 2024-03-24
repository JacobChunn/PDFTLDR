"use client";
import React from "react";

//@ts-ignore
const DataDisplay = ({ translatedDocument, summaryType }) => {
  if (summaryType === "Bullet Points") {
    console.log(translatedDocument);
    console.log(translatedDocument.split("- "));
    return (
      <div>
        <ul className="list-disc list-inside">
          {translatedDocument
            .split("- ")
            .filter((line: string) => line)
            .map((line: string, index: any) => (
              <li key={index}>{line}</li>
            ))}
        </ul>
      </div>
    );
  } else {
    return <p>{translatedDocument}</p>;
  }
};

export default DataDisplay;
