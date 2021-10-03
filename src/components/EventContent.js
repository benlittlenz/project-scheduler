import React from "react";

import { Container } from "./styledComponents";

const EventView = ({ event }) => {
  const color = {
    "Booked In": "#9CA3AF",
    "In Progress": "#2563EB",
  };
  const eventProp = event.extendedProps;
  // console.log("eventProp", eventProp);
  const styles = () => {
    return {
      color: "white",
      backgroundColor: color[eventProp.status],
    };
  };

  return (
    <Container
      padding={"0.5px"}
      fontSize={"0.8rem"}
      color={styles().color}
      backgroundColor={styles().backgroundColor}
    >
      {event.company} - {event.title}
      <div>
        {eventProp.status}
      </div>
    </Container>
  );
};

export default EventView;
