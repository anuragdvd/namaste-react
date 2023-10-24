import { useState, useEffect } from "react";
import { menuApi } from "../Utils/constants";

const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    const data = await fetch(menuApi + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestroMenu;
