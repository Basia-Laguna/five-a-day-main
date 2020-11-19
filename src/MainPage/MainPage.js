import React, { useState } from "react";
import apple from "./MainPageImages/fruit-apple.png";
import berryBowl from "./MainPageImages/fruit-berry-bowl.png";
import bowl from "./MainPageImages/fruit-bowl.png";
import coctail from "./MainPageImages/fruit-coctail.png";
import driedFruit from "./MainPageImages/fruit-dried.png";
import strawberries from "./MainPageImages/fruit-strawberries.png";
import juice from "./MainPageImages/veg-juice.png";
import salad from "./MainPageImages/veg-salad.png";
import soup from "./MainPageImages/veg-soup-bowl.png";
import tomatoes from "./MainPageImages/veg-tomatoes.png";
import plate from "./MainPageImages/counter-plate.png";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styles from "./mainpage.scss";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const loadPortionCounter = () => {
    if (localStorage.getItem("statistics") === null) {
      return 0;
    } else {
      const data = JSON.parse(localStorage.getItem("statistics"));
      const foundIndex = data.findIndex((item) => {
        return item.day === moment().format("DD/MM").toString();
      });

      if (foundIndex === -1) {
        return 0;
      }
      return data[foundIndex].portion;
    }
  };
  // initial state rowna sie 0:
  const [portionCounter, setPortionCounter] = useState(loadPortionCounter());
  const [dispalyImage, setDisplayImage] = useState(false);
  const [dispalyImageSrc, setDisplayImageSrc] = useState("");
  const displayImageTimeout = () => {
    setTimeout(() => setDisplayImage(false), 1500);
  };
  const tileData = [
    {
      img: apple,
      title: "apple",
      cols: 1,
    },
    {
      img: salad,
      title: "salad",
      cols: 1,
    },
    {
      img: bowl,
      title: "bowl",
      cols: 1,
    },
    {
      img: coctail,
      title: "coctail",
      cols: 1.5,
    },
    {
      img: soup,
      title: "soup",
      cols: 1.5,
    },
    {
      img: berryBowl,
      title: "berry-bowl",
      cols: 1.8,
    },
    {
      img: driedFruit,
      title: "dried-fruit",
      cols: 1.2,
    },
    {
      img: tomatoes,
      title: "tomatoes",
      cols: 1,
    },
    {
      img: strawberries,
      title: "berry-bowl",
      cols: 1,
    },
    {
      img: juice,
      title: "juice",
      cols: 1,
    },
  ];

  const setPortionCounterInLocalStorage = (value) => {
    if (localStorage.getItem("statistics") === null) {
      // czy dane są ju zapisane w statystykach?
      // pamiętaj to tablica z obiektami
      const stats = [
        {
          day: moment().format("DD/MM").toString(),
          portion: value,
        },
      ];
      localStorage.setItem("statistics", JSON.stringify(stats));
    }
    // jeśli nie to szukamy indeksu ostaniego dnia
    else {
      const data = JSON.parse(localStorage.getItem("statistics"));
      const foundIndex = data.findIndex((item) => {
        return item.day === moment().format("DD/MM").toString();
      });
      console.log(foundIndex);
      if (foundIndex === -1) {
        data.push({ day: moment().format("DD/MM").toString(), portion: value });
      } else {
        data[foundIndex].portion = value;
      }

      localStorage.setItem("statistics", JSON.stringify(data));
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#004aad",
        }}
      >
        <div className={classes.root}>
          {/* wysokość kolumn, liczba cols  */}
          <GridList
            cellHeight="10px"
            className={classes.gridList}
            cols={3}
            style={{
              backgroundColor: "#004aad",
            }}
          >
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  onClick={() => {
                    console.log(tile.title);
                    setDisplayImage(true);
                    setDisplayImageSrc(tile.img);
                    const portionPlusOne = portionCounter + 1;
                    setPortionCounter(portionPlusOne);
                    setPortionCounterInLocalStorage(portionPlusOne);
                    displayImageTimeout();
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
          {/* <img src={plate} title="plate"> </img> */}
        </div>
        <div
          className="plate"
          style={{
            backgroundImage: `url(${plate})`,
            backgroundSize: `180%`,
            backgroundPosition: "center",
            fontFamily: "Bangers",
            fontSize: "700%",
            color: "#dff1c8",
            textShadow: "0 0 30px #80cd3b",
            width: "100vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {dispalyImage ? (
            <img className="portion" src={dispalyImageSrc}></img>
          ) : (
            portionCounter
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
