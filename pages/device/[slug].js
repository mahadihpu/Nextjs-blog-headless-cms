
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Typography } from "@mui/material";
import { createClient } from "contentful";
import Image from 'next/image';
const client = createClient({
  space: 'ghk38u0gomdq',
  accessToken: 'QfLtjEKQUj-oIj1L5NttZpMTJhZa7Nq4VVZKkg-bAYw',
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({content_type:'specifications'});

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return{
    paths : paths,
    fallback: false
  }
}
export async function getStaticProps({params}){

  const {items} = await client.getEntries({content_type:'specifications','fields.slug':params.slug});

  return {
    props: {
      devices: items[0],
      revalidate: 1
    }
  }
}
export default function DeviceDetails(devices) {
  const {title,price,specifications,featuredImage} = devices.devices.fields;
  const width = featuredImage.fields.file.details.image.width;
  const height = featuredImage.fields.file.details.image.height;
  return (
    <div>
      <Typography align="center" variant="h2">Device Details</Typography>
      <br />
      <Image src={'https:'+ featuredImage.fields.file.url} width={width} height={height}/>
      <br /><br />
      <Typography variant="h4">Device Name: {title}</Typography>
      <Typography variant="h6">Price: {price}</Typography>

      {
        
        documentToReactComponents(specifications)
      }
      {
        console.log(devices.devices)
      }
    </div>
  )
}