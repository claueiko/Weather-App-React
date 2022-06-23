import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
              />{" "}
              <span className="row justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary m-2">
                  Search
                </button>
                <button type="submit" className="btn btn-warning m-2">
                  Current
                </button>
              </span>
            </form>

            <h1>London</h1>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col6">
            <h2>19C</h2>
          </div>
          <div className="col6">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="orange"
              size={51}
              animate={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Wednesday 14:20</p>
          </div>
          <div className="col">
            <p>Clouds </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Humidity: 9%</p>
          </div>
          <div className="col">
            <p>Wind: 4km/h </p>
          </div>
        </div>
      </div>
    </div>
  );
}
