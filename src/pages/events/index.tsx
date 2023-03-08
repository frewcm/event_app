import Image from "next/image";

// interface Props {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
// }

type City = {
  id: string;
  title: string;
  description: string;
  image: string;
};
function EventsPage({
  data,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}[]) {
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl">Events page</h1>
      {data.map((city: City) => {
        return (
          <a key={city.id} href={`/events/${city.id}`}>
            <Image width={100} height={100} src={city.image} alt={city.title} />
            <h2 className="text-2xl">Events in {city.id}</h2>
          </a>
        );
      })}
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
