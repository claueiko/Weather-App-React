import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container main">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
              />{" "}
              <div className="row d-flex justify-content-center">
                <div className="col text-center">
                  <button type="submit " className="btn btn-primary m-2 ">
                    Search
                  </button>
                  <button type="submit" className="btn btn-warning m-2">
                    Current
                  </button>
                </div>
              </div>
            </form>

            <h1>London</h1>
            <p className="current-date text-center">Wednesday 14:20</p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-3">
          <div className="col text-center">
            <h2>19°C</h2>
            <p className="units"> °C | °F</p>
          </div>
          <div className="col ">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="orange"
              size={71}
              animate={true}
            />
          </div>
        </div>
        <div classname="container details">
          <div className="row">
            <div className="col text-center">
              <p>Sunny</p>
            </div>
            <div className="col text-center">
              <p>Precipitation: 3% </p>
            </div>
            <div className="col text-center">
              <p>Wind: 3km/h </p>
            </div>
          </div>
        </div>
        <div classname="container">
          <div className="row forecast">
            <div className="col text-center">
              <p>Thu</p>
              <ReactAnimatedWeather
                icon="RAIN"
                color="blue"
                size={51}
                animate={true}
              />
              <p>11°C</p>
            </div>
            <div className="col text-center">
              <p>Fri</p>
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="gray"
                size={51}
                animate={true}
              />
              <p>14°C</p>
            </div>
            <div className="col text-center">
              <p>Sat</p>
              <ReactAnimatedWeather
                icon="WIND"
                color="gray"
                size={51}
                animate={true}
              />
              <p>17C°</p>
            </div>
            <div className="col text-center">
              <p>Sun</p>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="orange"
                size={51}
                animate={true}
              />
              <p>19°C</p>
            </div>
            <div className="col text-center">
              <p>Mon</p>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="orange"
                size={51}
                animate={true}
              />
              <p>21°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
