import React from "react";

import { Container } from "./styledComponents";

const EventView = ({ event }) => {
  const eventProp = event.extendedProps;
  console.log("eventProp", eventProp);
  const styles = () => {
    return {
      color: "black",
      backgroundColor: "lightgrey",
    };
  };

  return (
    <Container
      padding={"0.5rem"}
      fontSize={"0.8rem"}
      color={styles().color}
      backgroundColor={styles().backgroundColor}
    >
     {event.title}
    </Container>
  );
};

export default EventView;
