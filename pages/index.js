import Link from "next/link";
import { getFeaturedEvents } from "./../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>This is The All Events Page</h1>
    </div>
  );
}
