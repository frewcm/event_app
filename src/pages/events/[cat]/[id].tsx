import { useRouter } from "next/router";

function EventsSinglePage() {
  const router = useRouter();
  const id = router.query.id;
  return <div>dynamic {id}</div>;
}

export default EventsSinglePage;
