import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import "./MyReview.css";

const MyReview = () => {
  useTitle("myReview");
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setmyReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        ` https://cloud-kitchen-server-seven.vercel.app/reviewsemail?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("cloud-token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setmyReviews(data))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);
  // dlt hndle
  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure to delete this review");
    if (sure) {
      fetch(
        ` https://cloud-kitchen-server-seven.vercel.app/reviewsemail/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = myReviews.filter(
              (myReview) => myReview._id !== id
            );
            setmyReviews(remaining);
          }
        });
    }
  };

  // handle edit
  const handleEdit = (id) => {};

  return (
    <div>
      <h1>You have {myReviews.length} reviews</h1>
      <div className="myReview-G">
        {myReviews?.map((myReview) => {
          return (
            <div>
              <Container>
                <Card style={{ width: "24rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Image
                      style={{ height: "50px" }}
                      src={myReview?.image}
                      alt=""
                    ></Image>
                    <Card.Title>{myReview?.name}</Card.Title>
                    <Card.Text>{myReview?.messege}</Card.Text>
                    <Card.Text>{myReview?.rating}</Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-evenly">
                    <Button
                      onClick={() => handleDelete(myReview._id)}
                      className="btn btn-dark"
                    >
                      Delete
                    </Button>
                    <ToastContainer />
                    <Link to={`/update/${myReview._id}`}>
                      <Button
                        onClick={() => handleEdit(myReview._id)}
                        className="btn btn-dark"
                      >
                        Edit Review
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Container>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReview;
