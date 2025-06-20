import { isTMA } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

function getIsTma() {
  if (isTMA()) {
    return isTMA("complete");
  }

  return false;
}

export function App() {
  const [isTmaResult, setIsTmaResult] = useState<boolean | null>(null);

  useEffect(() => {
    async function init() {
      const isTma = await getIsTma();
      setIsTmaResult(isTma);
    }

    init();
  }, []);

  if (isTmaResult === null) {
    return <div>Loading...</div>;
  }

  return <div>isTma = {isTmaResult ? "true" : "false"}</div>;
}
