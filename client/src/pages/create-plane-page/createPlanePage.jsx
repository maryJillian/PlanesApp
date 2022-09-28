import React, {useCallback, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import ContentWrapper from "../../components/content-wrapper/content-wrapper";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import {createPlane} from "../../store/plane/planeSlice";
import {paths} from "../../paths";
import styles from './styles.module.css';

const CreatePlanePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {errors} = useSelector((state) => state.plane);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [planeImage, setPlaneImage] = useState(null);

  const handleCreatePlane = useCallback(() => {

    const formData = new FormData();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('capacity', capacity);
    formData.append('description', description);
    formData.append('planeImage', planeImage);

    dispatch(createPlane(formData)).then((res) => {

      if (!res.error) {
        navigate(`${paths.plane}/${res.payload._id}`, {replace: true});
      }
    });
  }, [name, price, capacity, description, planeImage, dispatch, navigate]);

  return (
    <ContentWrapper className={styles.createPlane}>
      <Button
        onClick={() => navigate(-1)}
        isBackButton={true}
        containerClassName={styles.backButtonContainer}
      >
        Назад
      </Button>
      <form className={styles.form}>
        <h1 className={styles.title}>Создать самолет</h1>
        <Input
          name='name'
          placeholder='Название самолета'
          error={errors && errors.name && errors.name.message}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          name='price'
          placeholder='Цена самолета'
          error={errors && errors.price && errors.price.message}
          onChange={(event) => setPrice(event.target.value)}
        />
        <Input
          name='description'
          placeholder='Описание'
          error={errors && errors.description && errors.description.message}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Input
          name='capacity'
          placeholder='Вместимость'
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(event) => setCapacity(event.target.value)}
        />
        <Input
          name='planeImage'
          type='file'
          placeholder='Название самолета'
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={(event) => setPlaneImage(event.target.files[0])}
        />
        <Button
          containerClassName={styles.buttonContainer}
          onClick={handleCreatePlane}
        >
          Создать
        </Button>
      </form>

    </ContentWrapper>
  )
};

export default CreatePlanePage;