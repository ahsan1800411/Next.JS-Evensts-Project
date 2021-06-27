import { useRouter } from "next/router";

export default function ClientsSpecficPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h2>This is the Specfic Client Page</h2>
    </div>
  );
}
