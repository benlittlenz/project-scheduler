import React, { useState, useEffect } from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../styles/bootstrap.min.css";
import EventView from "../components/EventContent";
import { DesktopStyles } from "../styles/Scheduler";
import { gridViews } from "../static";

// Main Component
const Scheduler = ({ data }) => {
  const [deliverables, setDeliverables] = useState(data);

  useEffect(() => {
    const result = formatData(data);
    setDeliverables(result);
    console.log("result", result);
  }, [data]);

  function formatData(payload) {
    return payload?.map((item) => ({
      company: Array.isArray(item.field_28_raw)
        ? item?.field_28_raw?.identifier
        : "",
      title: item.field_18,
      start: moment(item?.field_62_raw?.date_formatted, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      ),
      end: moment(item?.field_62_raw?.to?.date_formatted, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      ),
      status: item.field_22,
    }));
  }
  const eventContent = (view) => {
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
        events={deliverables}
      />
    </DesktopStyles>
  );
};

export default Scheduler;
