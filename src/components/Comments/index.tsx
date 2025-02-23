import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Giscus
        id="comments"
        repo="HarryLee02/HarryLee-Tech-Doc"
        repoId="R_kgDONbqOlA"
        category="General"
        categoryId="DIC_kwDONbqOlM4Cm0eM"
        mapping="pathname"
        strict="0"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}