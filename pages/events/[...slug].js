import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  // For the first time this will print undefined. So during that period we will give a loading animation
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const newYear = +filteredYear;
  const newMonth = +filteredMonth;

  // If user entered manually abc/cba then we get nan when converting to number
  if (
    isNaN(newMonth) ||
    isNaN(newYear) ||
    newYear > 2030 ||
    newYear < 2020 ||
    newMonth < 1 ||
    newMonth > 12
  ) {
    return <p>Invalid filter. Please adjust the values!</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: newYear,
    month: newMonth,
  });
  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventPage;
