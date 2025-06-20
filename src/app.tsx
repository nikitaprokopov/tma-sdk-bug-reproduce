import { isTMA } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

export function App() {
  const [isTmaResult, setIsTmaResult] = useState<boolean | null>(null);

  useEffect(() => {
    async function init() {
      const isTma = await (isTMA() && isTMA("complete"));
      setIsTmaResult(isTma);
    }

    init();
  }, []);

  if (isTmaResult === null) {
    return <div>Loading...</div>;
  }

  return <div>isTma = {isTmaResult ? "true" : "false"}</div>;
}
