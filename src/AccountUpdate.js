import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AccUpdate = () => {
  const { accid } = useParams();
  // const [accdata, accdatachange] = useState();

  // const [accdata, , accdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3004/account/" + accid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        addresschange(resp.address);
        // console.log(accdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [address, addresschange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const accdata = { id, name, email, address };

    fetch("http://localhost:3004/account/" + accid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(accdata),
    })
      .then((res) => {
        alert("UPDATED successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Update account</h2>
              </div>
              <div className="card-body"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Id</label>
                    <input
                      value={id}
                      disabled="disabled"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      required
                      value={name}
                      onMouseDown={(e) => valchange(true)}
                      onChange={(e) => namechange(e.target.value)}
                      className="form-control"
                      placeholder="John Wick"
                    ></input>
                    {name.length == 0 && validation && (
                      <span className="text-danger">Enter the name</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => emailchange(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      required
                      value={address}
                      onChange={(e) => addresschange(e.target.value)}
                      className="form-control"
                      placeholder="St,City,Country"
                    ></input>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">
                      SAVE
                    </button>
                    <Link to="/" className="btn btn-danger">
                      BACK{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccUpdate;
