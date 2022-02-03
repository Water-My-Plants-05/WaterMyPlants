import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import PlantItem from "./PlantItem";
import "../index.css";

const Plants = () => {
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/plants/${id}`)
      .then((res) => {
        const deletedPlant = plantList.filter((plant) => plant.plant_id !== id);
        setPlantList(deletedPlant);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const handleUpdatePlant = (newPlant) => {
    console.log(newPlant);
    axiosWithAuth()
      .put(`/plants/${newPlant.plant_id}`, newPlant)
      .then((res) => {
        setPlantList(
          plantList
            .filter((plant) => plant.plant_id !== newPlant.plant_id)
            .concat([res.data])
        );
        console.log(plantList);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div className='plantlist-container'>
      <h1 id='my-plants'>My Plants</h1>
      <div className='list-container'>
        {plantList.map((plant, i) => {
          return (
            <PlantItem
              plant={plant}
              key={i}
              handleDelete={handleDelete}
              handleUpdatePlant={handleUpdatePlant}
            />
          );
        })}
        <div id='add-plant-item'>
          <a href='/add-plant'>
            <h2>+</h2>
            <p>Add Plant</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plants;
