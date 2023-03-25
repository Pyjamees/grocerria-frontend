import react, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

function SearchRangeSlider(prop) {
  const [carbohydrateMinimum, setCarbohydrateMinimum] = useState(0);
  const [carbohydrateMaximum, setCarbohydrateMaximum] = useState(100);
  const [proteinMinimum, setProteinMinimum] = useState(0);
  const [proteinMaximum, setProteinMaximum] = useState(100);
  const [totalFatMinimum, setTotalFatMinimum] = useState(0);
  const [totalFatMaximum, setTotalFatMaximum] = useState(100);

  //   useEffect(() => {
  //     prop.updateMacroRange([
  //       carbohydrateMinimum,
  //       carbohydrateMaximum,
  //       proteinMinimum,
  //       proteinMaximum,
  //       totalFatMinimum,
  //       totalFatMaximum,
  //     ]);
  //   }, [
  //     carbohydrateMinimum,
  //     carbohydrateMaximum,
  //     proteinMinimum,
  //     proteinMaximum,
  //     totalFatMinimum,
  //     totalFatMaximum,
  //   ]);

  function updateMacroRange() {
    prop.updateMacroRange([
      carbohydrateMinimum,
      carbohydrateMaximum,
      proteinMinimum,
      proteinMaximum,
      totalFatMinimum,
      totalFatMaximum,
    ]);
  }

  function updateSliderInput(event) {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const minMaxGap = 10;
    if (inputName === "carbohydrateMinimum") {
      if (inputValue < carbohydrateMaximum - minMaxGap) {
        setCarbohydrateMinimum(inputValue);
      } else {
        setCarbohydrateMinimum(carbohydrateMaximum - minMaxGap);
      }
    } else if (inputName === "carbohydrateMaximum") {
      if (inputValue > carbohydrateMinimum + minMaxGap) {
        setCarbohydrateMaximum(inputValue);
      } else {
        setCarbohydrateMaximum(carbohydrateMinimum + minMaxGap);
      }
    } else if (inputName === "proteinMinimum") {
      if (inputValue < proteinMaximum - minMaxGap) {
        setProteinMinimum(inputValue);
      } else {
        setProteinMinimum(proteinMaximum - minMaxGap);
      }
    } else if (inputName === "proteinMaximum") {
      if (inputValue > proteinMinimum + minMaxGap) {
        setProteinMaximum(inputValue);
      } else {
        setProteinMaximum(proteinMinimum + minMaxGap);
      }
    } else if (inputName === "totalFatMinimum") {
      if (inputValue < totalFatMaximum - minMaxGap) {
        setTotalFatMinimum(inputValue);
      } else {
        setTotalFatMinimum(totalFatMaximum - minMaxGap);
      }
    } else if (inputName === "totalFatMaximum") {
      if (inputValue > totalFatMinimum + minMaxGap) {
        setTotalFatMaximum(inputValue);
      } else {
        setTotalFatMaximum(totalFatMinimum + minMaxGap);
      }
    }
  }

  return (
    <Container className="rangeSliderSection">
      <Container
        className="rangeSliderHeadings"
        style={{ width: "50%", padding: "0" }}
      >
        <div className="rangeSliderBox">
          <span>Carbohydrate</span>
        </div>
        <div className="rangeSliderBox">
          <span>Protein</span>
        </div>
        <div className="rangeSliderBox">
          <span>Total Fat</span>
        </div>
      </Container>
      <Container
        className="rangeSliderContainer"
        style={{ width: "50%", padding: "0" }}
      >
        <div className="rangeSliderBox">
          <span className="fullRange"></span>
          <span
            className="includeRangeCarbohydrate"
            style={{
              width: `calc((100% * ${
                (carbohydrateMaximum - carbohydrateMinimum) / 100
              } - 20px * ${
                (carbohydrateMaximum - carbohydrateMinimum) / 100
              }))`,
              left: `calc(100% * ${carbohydrateMinimum / 100} - 20px * ${
                carbohydrateMinimum / 100
              } + 10px)`,
            }}
          ></span>
          <input
            className="rangeSliderInput rangeSliderInputCarbohydrate"
            name="carbohydrateMinimum"
            value={carbohydrateMinimum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>
          <input
            className="rangeSliderInput rangeSliderInputCarbohydrate"
            name="carbohydrateMaximum"
            value={carbohydrateMaximum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>
          <Container style={{ padding: "0", width: "calc(100% - 20px)" }}>
            <div className="markerContainer">
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
            </div>
          </Container>
          <Container style={{ padding: "0", width: "100%" }}>
            <div className="markerNumberContainer">
              <div className="markerNumber">0%</div>
              <div className="markerNumber">50%</div>
              <div className="markerNumber">100%</div>
            </div>
          </Container>
        </div>

        <div className="rangeSliderBox">
          <span className="fullRange"></span>
          <span
            className="includeRangeProtein"
            style={{
              width: `calc((100% * ${
                (proteinMaximum - proteinMinimum) / 100
              } - 20px * ${(proteinMaximum - proteinMinimum) / 100}))`,
              left: `calc(100% * ${proteinMinimum / 100} - 20px * ${
                proteinMinimum / 100
              } + 10px)`,
            }}
          ></span>
          <input
            className="rangeSliderInput rangeSliderInputProtein"
            name="proteinMinimum"
            value={proteinMinimum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>
          <input
            className="rangeSliderInput rangeSliderInputProtein"
            name="proteinMaximum"
            value={proteinMaximum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>
          <Container style={{ padding: "0", width: "calc(100% - 20px)" }}>
            <div className="markerContainer">
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
            </div>
          </Container>
          <Container style={{ padding: "0", width: "100%" }}>
            <div className="markerNumberContainer">
              <div className="markerNumber">0%</div>
              <div className="markerNumber">50%</div>
              <div className="markerNumber">100%</div>
            </div>
          </Container>
        </div>

        <div className="rangeSliderBox">
          <span className="fullRange"></span>
          <span
            className="includeRangeTotalFat"
            style={{
              width: `calc((100% * ${
                (totalFatMaximum - totalFatMinimum) / 100
              } - 20px * ${(totalFatMaximum - totalFatMinimum) / 100}))`,
              left: `calc(100% * ${totalFatMinimum / 100} - 20px * ${
                totalFatMinimum / 100
              } + 10px)`,
            }}
          ></span>
          <input
            className="rangeSliderInput rangeSliderInputTotalFat"
            name="totalFatMinimum"
            value={totalFatMinimum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>
          <input
            className="rangeSliderInput rangeSliderInputTotalFat"
            name="totalFatMaximum"
            value={totalFatMaximum}
            min="0"
            max="100"
            step="10"
            type="range"
            onChange={updateSliderInput}
            onMouseUp={updateMacroRange}
          ></input>

          <Container style={{ padding: "0", width: "calc(100% - 20px)" }}>
            <div className="markerContainer">
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerShort"></div>
              <div className="markerLong"></div>
            </div>
          </Container>
          <Container style={{ padding: "0", width: "100%" }}>
            <div className="markerNumberContainer">
              <div className="markerNumber">0%</div>
              <div className="markerNumber">50%</div>
              <div className="markerNumber">100%</div>
            </div>
          </Container>
        </div>
      </Container>
    </Container>
  );
}

export default SearchRangeSlider;
