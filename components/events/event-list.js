import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props) {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          date={event.date}
          image={event.image}
          location={event.location}
          title={event.title}
        />
      ))}
    </ul>
  );
}
