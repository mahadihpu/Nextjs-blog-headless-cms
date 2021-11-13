import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


const DeviceCard = (data) => {
    const {title,slug,price,specifications,thumbnail} = data.data;

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={'https:'+ thumbnail.fields.file.url}
        width={400}
        height={400}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <b>Price:</b>{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={'/device/' + slug}><Button className="more-btn" variant="contained" color="error" size="large">See more</Button></Link>
      </CardActions>
    </Card>
    </>
    );
};

export default DeviceCard;