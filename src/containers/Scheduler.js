import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../styles/bootstrap.min.css";
import EventView from "../components/EventContent";
import { DesktopStyles } from "../styles/Scheduler";
import { gridViews } from "../static";

// Main Component
const Scheduler = () => {

    const eventContent = (view) => {
      // console.log("view", view)
        return <EventView event={view.event._def} />;
    };
    return (
      <DesktopStyles>
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            center: "dayGridMonth,timeGridWeek",
            end: "prev,today,next",
          }}
          views={{
            dayGridMonth: {
              type: "dayGridMonth",
              buttonText: "Month View",
              weekends: false,
              eventContent,
            },
            timeGridWeek: {
              ...gridViews.timegrid,
              eventContent,
            },
          }}
          plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
          height="auto"
          themeSystem="bootstrap"
          selectable={true}
          editable={true}
          eventOrder="order"
          eventDurationEditable={true}
          eventStartEditable={true}
          events={[
            {
              title: "Deliverable 1 - Jobs, Staff and Client pages",
              start: "2021-09-06",
              end: "2021-09-08",
              status: "In Progress",
              hours: "14-18",
            },
            {
              title: "Deliverable 2 - Quote process",
              start: "2021-09-09",
              end: "2021-10-04",
              status: "In Progress",
              hours: "55-69",
            },
            {
              title: "Deliverable 2 - Job process",
              start: "2021-10-06",
              end: "2021-10-08",
              status: "Booked In",
              hours: "13-16",
            },
          ]}
        />
      </DesktopStyles>
    );
};

export default Scheduler;
