import React, { useState } from "react";
import "./Lang.css";
import { IoSearch } from "react-icons/io5";
import { data2 } from "../../data/day2";
import { data1 } from "../../data/day1";
import { data3 } from "../../data/day3";
import { data4 } from "../../data/day4";
import { data5 } from "../../data/day5";
import { data6 } from "../../data/day6";

const allData = {
  day1: data1,
  day2: data2,
  day3: data3,
  day4: data4,
  day5: data5,
};

function Lang() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("day2");
  const [flipped, setFlipped] = useState(
    Array(allData[activeTab].length).fill(false)
  );

  const handleFlip = (index) => {
    setFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFlipped(Array(allData[tab].length).fill(false));
  };

  const data = data6;

  const filteredData = data.filter(
    (el) =>
      el.word.toLowerCase().includes(value.toLowerCase()) ||
      el.translate.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="lang">
      <div className="search">
        <IoSearch size={30} className="icon" />
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {/* <div className="wrapper">
        <div
          className={`tab ${activeTab === "day1" ? "active" : ""}`}
          onClick={() => handleTabChange("day1")}
        >
          День 1
        </div>
        <div
          className={`tab ${activeTab === "day2" ? "active" : ""}`}
          onClick={() => handleTabChange("day2")}
        >
          День 2
        </div>
        <div
          className={`tab ${activeTab === "day3" ? "active" : ""}`}
          onClick={() => handleTabChange("day3")}
        >
          День 3
        </div>
        <div
          className={`tab ${activeTab === "day4" ? "active" : ""}`}
          onClick={() => handleTabChange("day4")}
        >
          День 4
        </div>
        <div
          className={`tab ${activeTab === "day5" ? "active" : ""}`}
          onClick={() => handleTabChange("day5")}
        >
          День 5
        </div>
      </div> */}
      <div className="content">
        {filteredData.map((el, index) => (
          <div
            key={index}
            className={`box ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="inner-box">
              <div className="front">
                <div className="block">{el.word}</div>
                <div className="image_block">
                  <img className="image" src={el.image} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="block">{el.translate}</div>
                <div className="image_block">
                  <img className="image" src={el.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lang;
