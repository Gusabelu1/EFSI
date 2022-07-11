import './App.css';
import principal from './principal.jpeg';

function banner() {
  return (
    <div className="container">
    <div className="row my-4">
      <div className="col-md-12">
        <img className="img-fluid box-shadow" src={principal} alt="Campus Almagro ORT"></img>
      </div>
    </div>
    </div>
  );
}

export default banner;