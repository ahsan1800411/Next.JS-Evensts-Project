import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "./../../components/events/event-search";

export default function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList events={events} />
    </div>
  );
}
