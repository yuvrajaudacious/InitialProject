import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal, Input, Card } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { userdata } from "../../Dummy";
import Header from "../Header/Header";

function User() {
  const [show, setShow] = useState(false);
  console.log(userdata);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState();
  const [user, setUser] = useState();

  const deleted = (e) => {
    e.preventDefault()
    console.log("Deleted", user);
    setUser.filter(i => i.user !== user)
      // user.filter((e) => {
      //   return e !== user;
      // })
    
  };
  return (
    <>
      <Header />
      <div className="container">
        
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded bg-dark">

          <div className="row ">
            
            <div className=" col-sm-3 mt-5 mb-4" style={{ color: "Dark" }}>
              
              <h2>
                <b>USER</b>
              </h2>
            </div>
            <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred
            ">
              <div className="search">
                <form className="form-inline">
                  <input
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    className="form-control mr-sm-2"
                    style={{ marginLeft: "204px"}}
                    type="text"
                    placeholder="Search User"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
            <div className="col-sm-3 offset-sm-1  mt-5 mb-4 ">
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginLeft: "104px", backgroundColor: "dark" }}
              >
                <Link
                  to="/add"
                  style={{ textcolor:"light", color: "light", textDecoration: "light" }}
                >
                  <BsFillPersonPlusFill /> Add New User
                </Link>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive ">
              <table className="table  table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name </th>
                    <th>Email</th>
                    <th>Phone Number </th>
                    <th>City</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {search
                    ? userdata
                        .filter((item) =>
                          item.name.toLowerCase().includes(search)
                        )
                        .map((user) => (
                          <tr>
                            <td>{user.id}</td>

                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>

                            <Link
                              to="view"
                              className="view"
                              title="View"
                              data-toggle="tooltip"
                              style={{ color: "#10ab80" }}
                            >
                              <i className="material-icons">&#xE417;</i>
                            </Link>
                            <Link
                              to="edit"
                              className="edit"
                              title="Edit"
                              data-toggle="tooltip"
                            >
                              <i className="material-icons">&#xE254;</i>
                            </Link>
                            <Link
                              to=""
                              className="delete"
                              title="Delete"
                              data-toggle="tooltip"
                              style={{ color: "red" }}
                            >
                              <i className="material-icons">&#xE872;</i>
                            </Link>
                          </tr>
                        ))
                    : userdata.map((user) => (
                      <tr>
                        <td>{user.id}</td>

                        <td>{user.name}</td>
                        <td>{user.email}</td>

                        <td>{user.phone}</td>
                        <td>{user.address.city}</td>
<div  className=" my-1  "
>
                        <Link
                          to="view"
                          className="view"
                          title="View"
                          data-toggle="tooltip"
                          style={{ color: "#10ab80" }}
                        >
                          <i className="material-icons">&#xE417;</i>
                        </Link>
                        <Link
                          to="edit"
                          className="edit mx-1"
                          title="Edit"
                          data-toggle="tooltip"
                        >
                          <i className="material-icons">&#xE254;</i>
                        </Link>
                        <Link
                          to=""
                          className="delete mx-1"
                          title="Delete"
                          data-toggle="tooltip"
                          style={{ color: "red" }}
                          onClick={deleted}
                        >
                          <i className="material-icons">&#xE872;</i>
                        </Link>
                        </div>
                      </tr>
                    ))}
                </tbody>

              </table>

            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default User;
