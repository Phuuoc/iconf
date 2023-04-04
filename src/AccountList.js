import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountList = () => {
  const [accdata, accdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/account/update/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to DELETE?")) {
      fetch("http://localhost:3004/account/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("DELETED successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3004/account")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        accdatachange(resp);
        console.log(accdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Account List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="account/create" className="btn btn-link">
              Create new account{" "}
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-primary text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {accdata &&
                accdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        UPDATE
                      </a>

                      <a
                        onClick={() => Removefunction(item.id)}
                        className="btn btn-danger"
                      >
                        DELETE
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountList;
