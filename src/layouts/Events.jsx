import React, { useEffect, useState } from "react";
//import moment from "moment";
import moment from 'moment'
import axios from "axios";
import { AuthContex } from "./context/AuthContexProvider.jsx";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

const Events = () => {
  const { isAuth } = React.useContext(AuthContex);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await axios.get("http://localhost:3000/events", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tk")}`,
          },
        });
        if (events.data.length === 0) {
          swal({
            title: "Error",
            text: "There are no events",
            icon: "error",
            button: false,
          });
          setTimeout(() => {
            swal.close();
          }, 2000);
        }
        setEvents(events.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  if (!isAuth) {
    swal({
      title: "Error",
      text: "You are not logged in",
      icon: "error",
      button: false,
    });
    setTimeout(() => {
      swal.close();
    }, 2000);

    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      {events.map((event) => (
        <div
          className="flex items-center justify-center gap-1 my-3 input-group"
          key={event.id}
        >
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{event.titulo}</h2>
              <p>{event.descripcion}</p>
              <p>
                fecha: {moment(event.fecha).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
              <p>lugar: {event.lugar}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Asistir</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Events;
