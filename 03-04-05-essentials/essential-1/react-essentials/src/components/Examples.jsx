import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedValue, setSelectedValue] = useState("");

  function selectHandler(selectedButton) {
    setSelectedValue(selectedButton);
  }

  let tabContent = <p>Please pick a topic, first!</p>;

  if (selectedValue) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedValue].title}</h3>
        <p>{EXAMPLES[selectedValue].description}</p>
        <pre>
          <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedValue === "components"}
              onClick={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedValue === "jsx"}
              onClick={() => selectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedValue === "props"}
              onClick={() => selectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedValue === "state"}
              onClick={() => selectHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
