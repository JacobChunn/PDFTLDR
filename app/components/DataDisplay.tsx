import React from "react";

//@ts-ignore
const DataDisplay = ({ translatedDocument, summaryType }) => {
  if (summaryType === "Bullet Points") {
    return (
      <>
        <ul>
          {translatedDocument.split("-").map((line: any, index: any) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </>
    );
  } else {
    return <p>{translatedDocument}</p>;
  }
};

export default DataDisplay;
