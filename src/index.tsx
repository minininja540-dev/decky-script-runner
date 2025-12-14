import { definePlugin, PanelSection, PanelSectionRow } from "@decky/ui";
import { useEffect, useState } from "react";

const Content = () => {
  const [status, setStatus] = useState<string>("Loaded");

  useEffect(() => {
    // Placeholder to confirm plugin lifecycle works under Decky v3
    console.log("Decky Script Runner frontend loaded");
  }, []);

  return (
    <PanelSection title="Script Runner">
      <PanelSectionRow>
        <div>{status}</div>
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin(() => {
  return {
    title: "Script Runner",
    content: <Content />
  };
});
