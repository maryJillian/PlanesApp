import {useState, useMemo} from "react";

const useSortPlanes = (planes = []) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedPlanes = useMemo(() => {
    const sortablePlanes = [...planes];
    sortablePlanes.sort((planeOne, planeTwo) => {
      if (+planeOne.price < +planeTwo.price) return isDescSort ? 1 : -1;
      if (+planeOne.price > +planeTwo.price) return isDescSort ? -1 : 1;
      return 0;
    });
    return sortablePlanes;
  }, [isDescSort, planes]);
  return {
    isDescSort,
    setIsDescSort,
    sortedPlanes
  };
};

export default useSortPlanes;