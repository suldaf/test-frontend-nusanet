import React, { useState } from "react";
import multiply from "./assets/multiply-icon.png";
import divide from "./assets/divide-icon.png";
import plus from "./assets/plus-icon.png";
import minus from "./assets/minus-icon.png";
import Swal from "sweetalert2";

function App() {
  const [box1, setBox1] = useState({
    value: 0,
    checked: false,
  });
  const [box2, setBox2] = useState({
    value: 0,
    checked: false,
  });
  const [box3, setBox3] = useState({
    value: 0,
    checked: false,
  });
  const [result, setresult] = useState(0);

  function counting(symbol) {
    switch (symbol) {
      case "plus":
        if (box1.checked && box2.checked && box3.checked) {
          setresult(+box1.value + +box2.value + +box3.value);
        } else if (box1.checked && box2.checked && !box3.checked) {
          setresult(+box1.value + +box2.value);
        } else if (box1.checked && !box2.checked && box3.checked) {
          setresult(+box1.value + +box3.value);
        } else if (!box1.checked && box2.checked && box3.checked) {
          setresult(+box2.value + +box3.value);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Cannot counting before more than or equals 2 tick here",
            showConfirmButton: false,
            timer: 2750,
            timerProgressBar: true,
          });
        }
        break;
      case "minus":
        if (box1.checked && box2.checked && box3.checked) {
          setresult(+box1.value - +box2.value - +box3.value);
        } else if (box1.checked && box2.checked && !box3.checked) {
          setresult(+box1.value - +box2.value);
        } else if (box1.checked && !box2.checked && box3.checked) {
          setresult(+box1.value - +box3.value);
        } else if (!box1.checked && box2.checked && box3.checked) {
          setresult(+box2.value - +box3.value);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Cannot counting before more than or equals 2 tick here",
            showConfirmButton: false,
            timer: 2750,
            timerProgressBar: true,
          });
        }
        break;
      case "divide":
        if (box1.checked && box2.checked && box3.checked) {
          setresult(+box1.value / +box2.value / +box3.value);
        } else if (box1.checked && box2.checked && !box3.checked) {
          setresult(+box1.value / +box2.value);
        } else if (box1.checked && !box2.checked && box3.checked) {
          setresult(+box1.value / +box3.value);
        } else if (!box1.checked && box2.checked && box3.checked) {
          setresult(+box2.value / +box3.value);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Cannot counting before more than or equals 2 tick here",
            showConfirmButton: false,
            timer: 2750,
            timerProgressBar: true,
          });
        }
        break;
      case "multiply":
        if (box1.checked && box2.checked && box3.checked) {
          setresult(+box1.value * +box2.value * +box3.value);
        } else if (box1.checked && box2.checked && !box3.checked) {
          setresult(+box1.value * +box2.value);
        } else if (box1.checked && !box2.checked && box3.checked) {
          setresult(+box1.value * +box3.value);
        } else if (!box1.checked && box2.checked && box3.checked) {
          setresult(+box2.value * +box3.value);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Cannot counting before more than or equals 2 tick here",
            showConfirmButton: false,
            timer: 2750,
            timerProgressBar: true,
          });
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row">
            <p className="text-center">Calculator</p>
            <div className="row justify-content-center align-items-center mb-2">
              <input
                type="number"
                className="col-10"
                onChange={(e) => setBox1({ ...box1, value: e.target.value })}
              />
              <input
                type="checkbox"
                className="col-2"
                onClick={(e) => setBox1({ ...box1, checked: e.target.checked })}
              />
            </div>
            <div className="row justify-content-center align-items-center mb-2">
              <input
                type="number"
                className="col-10"
                onChange={(e) => setBox2({ ...box2, value: e.target.value })}
              />
              <input
                type="checkbox"
                className="col-2"
                onClick={(e) => setBox2({ ...box2, checked: e.target.checked })}
              />
            </div>
            <div className="row justify-content-center align-items-center mb-2">
              <input
                type="number"
                className="col-10"
                onChange={(e) => setBox3({ ...box3, value: e.target.value })}
              />
              <input
                type="checkbox"
                className="col-2"
                onClick={(e) => setBox3({ ...box3, checked: e.target.checked })}
              />
            </div>
            <div className="row justity-center align-items-center mb-2">
              <button
                onClick={() => counting("multiply")}
                type="button"
                className="col-1 btn btn-outline-secondary d-flex border border-1 justify-content-center align-items-center m-2 p-2"
              >
                <img
                  src={multiply}
                  style={{ width: 20, height: 20 }}
                  alt="icon multiply"
                />
              </button>
              <button
                onClick={() => counting("divide")}
                type="button"
                className="col-1 btn btn-outline-secondary d-flex border border-1 justify-content-center align-items-center m-2 p-2"
              >
                <img
                  src={divide}
                  style={{ width: 20, height: 20 }}
                  alt="icon divide"
                />
              </button>
              <button
                onClick={() => counting("plus")}
                type="button"
                className="col-1 btn btn-outline-secondary d-flex border border-1 justify-content-center align-items-center m-2 p-2"
              >
                <img
                  src={plus}
                  style={{ width: 20, height: 20 }}
                  alt="icon plus"
                />
              </button>
              <button
                onClick={() => counting("minus")}
                type="button"
                className="col-1 btn btn-outline-secondary d-flex border border-1 justify-content-center align-items-center m-2 p-2"
              >
                <img
                  src={minus}
                  style={{ width: 20, height: 20 }}
                  alt="icon minus"
                />
              </button>
            </div>
          </div>
          <div className="d-flex flex-row">
            <p>Hasil: </p>
            <p className="ms-2">{result}</p>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
