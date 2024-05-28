import { useState } from "react";
import "./Lang.css";
import { IoSearch } from "react-icons/io5";
import { data } from "../../data";

function Lang() {
  const [value, setValue] = useState("");
  const [flipped, setFlipped] = useState(Array(data.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prevFlipped) =>
      prevFlipped.map((flip, i) => (i === index ? !flip : flip))
    );
  };

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
