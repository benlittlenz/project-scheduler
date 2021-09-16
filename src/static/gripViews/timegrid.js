const timegrid = {
  type: "timeGrid",
  titleFormat: {
    year: "numeric",
    month: "long",
  },
  dayHeaderFormat: {
    weekday: "long",
    day: "numeric",
  },
  displayEventTime: false,
  slotEventOverlap: false,
  duration: { days: 7 },
  weekends: false,
  buttonText: "Week View",
  dateAlignment: "week",
  allDayContent: () => "Notes",
};

export default timegrid;
