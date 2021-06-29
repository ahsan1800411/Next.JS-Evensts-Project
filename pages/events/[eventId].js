import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "./../../components/event-detail/event-summary";
import EventContent from "./../../components/event-detail/event-content";
import EventLogistics from "./../../components/event-detail/event-logistics";

export default function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        image={event.image}
        date={event.date}
        address={event.location}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
