import { useEffect, useState } from "react";

export function useEfp() {
  const [efpData, setEfpData] = useState<any>();

  useEffect(() => {
    async function get() {
      const result = await fetch("https://api.ethfollow.xyz/api/v1/users/jacobhomanics.eth/stats");
      const data = await result.json();
      console.log(data);

      setEfpData(data);
    }
    get();
  }, []);

  return efpData;
}
