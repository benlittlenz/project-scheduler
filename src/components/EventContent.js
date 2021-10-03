import React from "react";

import { Container } from "./styledComponents";

const EventView = ({ event }) => {
  const color = {
    "Booked In": "#005cbe",
    "In Progress": "#2ab27b",
    "Awaiting Info": "#ff0000",
    Completed: "#2ab27b",
    "In QA": "#631dff",
    "Signed Off": "#2ab27b",
    "TE Sign Off": "#2ab27b",
  };
  const eventProp = event.extendedProps;
  // console.log("eventProp", eventProp);
  const styles = () => {
    return {
      color: "white",
      backgroundColor: color[eventProp.status],
    };
  };
  console.log("eventProp", eventProp);
  return (
    <Container
      padding={"0.5px"}
      fontSize={"0.8rem"}
      color={styles().color}
      backgroundColor={styles().backgroundColor}
    >
      {eventProp.company} - {event.title}
      <div>{eventProp.status}</div>
    </Container>
  );
};

export default EventView;
