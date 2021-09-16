import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../styles/bootstrap.min.css";
import { gridViews } from "../static";

// Main Component
const Scheduler = () => {

    return (
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
            },
            timeGridWeek: {
              ...gridViews.timegrid,
            },
          }}
          plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
          height="auto"
          themeSystem="bootstrap"
          selectable={true}
          editable={true}
          slotMinTime="08:00"
          slotMaxTime="17:00"
          eventOrder="order" //TODO update to latest version. Current version 5.8.0, some events are overlapping with each other in Month View
          eventDurationEditable={true}
          eventStartEditable={true}
        />
    );
};

export default Scheduler;
