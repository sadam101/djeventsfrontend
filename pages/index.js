import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Next.JS Mastering Dev to Development Course</h1>
      <p>Traversy Media</p>
      {events.map((evt) => (
        <h1 key={evt.slug}>{evt.name}</h1>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
    },
    revalidate: 1,
  };
}
