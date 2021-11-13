import { createClient } from "contentful";
import DeviceCard from "../components/DeviceCard";

export async function getStaticProps(){

  const client = createClient({
    space: 'ghk38u0gomdq',
    accessToken: 'QfLtjEKQUj-oIj1L5NttZpMTJhZa7Nq4VVZKkg-bAYw',
  });
  const res = await client.getEntries({content_type:'specifications'});

  return {
    props: {
      devices: res.items,
      revalidate: 1
    }
  }
}
export default function Recipes({devices}) {
  return (
    <div className="device-list">
      {
        devices.map(device => <DeviceCard  key={device.sys.id} data={device.fields} />)
      }
      <style jsx>{`
      .device-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px 60px;
      }
      `}</style>
    </div>
  )
}