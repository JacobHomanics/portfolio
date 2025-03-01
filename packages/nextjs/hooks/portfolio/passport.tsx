import { useEffect, useState } from "react";

export function usePassport() {
  const [passport, setPassport] = useState<any>();

  useEffect(() => {
    async function get() {
      try {
        const response = await fetch(`/api/talent-protocol/passport/0xc689c800a7121b186208ea3b182fAb2671B337E7`);
        const data2 = await response.json();
        setPassport(data2.passport);
      } catch (err) {
        console.log(err);
      }
    }
    get();
  }, []);

  return passport;
}
