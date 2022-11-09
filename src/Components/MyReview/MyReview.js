import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import "./MyReview.css";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setmyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsemail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmyReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure to delete this review");
    if (sure) {
      fetch(`http://localhost:5000/reviewsemail/${id}`, {
        method: "DELETE",
      })
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

  return (
    <div>
      <h1>You have {myReviews.length} reviews</h1>
      <div className="myReview-G">
        {myReviews.map((myReview) => {
          return (
            <div>
              <Container>
                <Card style={{ width: "18rem" }}>
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
                    <Button className="btn btn-dark">Edit Review</Button>
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
