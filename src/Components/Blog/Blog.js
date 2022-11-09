import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="w-75 mx-auto mt-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
          <Accordion.Body>
            1.SQL databases are primarily called as Relational Databases
            (RDBMS); whereas NoSQL database are primarily called as
            non-relational or distributed database.
            <br />
            2.In almost all situations SQL databases are vertically scalable.
            This means that you can increase the load on a single server by
            increasing things like RAM, CPU or SSD. But on the other hand NoSQL
            databases are horizontally scalable. This means that you handle more
            traffic by sharding, or adding more servers in your NoSQL database.
            It is similar to adding more floors to the same building versus
            adding more buildings to the neighborhood. Thus NoSQL can ultimately
            become larger and more powerful, making these databases the
            preferred choice for large or ever-changing data sets.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT, and how does it work?
          </Accordion.Header>
          <Accordion.Body>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the difference between javascript and NodeJS?
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
