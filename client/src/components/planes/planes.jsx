import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import useSortPlanes from "../../hooks/useSortPlanes";
import {getPlanes} from "../../store/planes/planesSlice";
import Spinner from "../spinner/spinner";
import ContentWrapper from "../content-wrapper/content-wrapper";
import PlaneItem from "../plane-item/plane-item";
import {paths} from "../../paths";
import Button from "../button/button";
import styles from './styles.module.css';

const Planes = () => {
  const dispatch = useDispatch();
  const {planes, isLoading} = useSelector((state) => state.planes);
  const {isDescSort, setIsDescSort, sortedPlanes} = useSortPlanes(planes || []);

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className={styles.sortBlock}>
      <div className={styles.sort}>
        <ContentWrapper className={styles.planesHeader}>
          <Button
            onClick={() => setIsDescSort(!isDescSort)}
          >
            Сортировать по цене{`${isDescSort ? " +" : " -"}`}
          </Button>
          <Link to={paths.createPlane}
                className={styles.createPlaneBtn}>Добавить самолет
          </Link>
        </ContentWrapper>
      </div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes && sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </div>
  )
};

export default Planes;