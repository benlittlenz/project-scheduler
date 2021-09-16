import styled from "styled-components";

const color = {
  headerRow: "#f1f1f1",
  today: "#fafafa",
  borderHighlight: "#999999",
  backgroundHighlight: "#ebebeb",
};

export const DesktopStyles = styled.div`
  margin-top: 2.5rem;

  .btn {
    min-width: 95px;
    line-height: 0.8rem;
  }

  .table-bordered th,
  .table-bordered td {
    border: 1px solid rgba(0, 0, 0, 0.07);
  }

  .fc-toolbar-title {
    font-weight: 600;
  }

  .fc-button {
    min-width: 100px;
    border-radius: 0;
  }

  .fc-axis {
    display: none !important;
  }

  .fc-timegrid-col.fc-day-today {
    background-color: ${color.today};
  }

  .fc-timeline-header-row {
    background-color: ${color.headerRow};
  }

  tbody > .fc-timeline-header-row:nth-child(1) th {
    border-bottom: none;
  }

  tbody > .fc-timeline-header-row:nth-child(2) th {
    font-size: 1.5rem;
  }

  .fc-timeline-slot-label {
    border-top: none;
  }

  .fc-timeline-slot-cushion.fc-scrollgrid-sync-inner.fc-sticky {
    text-transform: uppercase;
  }

  .fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame {
    justify-content: center;
  }

  a.fc-timeline-slot-cushion {
    text-decoration: none;
  }

  .fc-highlight {
    border: 2px solid ${color.borderHighlight};
    background: ${color.backgroundHighlight};
  }

  .fc-h-event,
  .fc-v-event {
    border: white;
    background-color: unset !important;
  }

  .fc-event-time,
  .fc-event-title {
    padding: 5px 10px;
    white-space: normal;
    overflow-wrap: break-word;
    font-size: 0.8rem;
  }

  .fc-daygrid-day.fc-day-today {
    background-color: ${color.today};
  }

  /* Month View */
  .fc-col-header-cell {
    background-color: ${color.headerRow};
    font-size: 1rem;
  }
`;
