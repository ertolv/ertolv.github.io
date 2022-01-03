
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function JObject(props: any) {
  let { author, description, title, date } = props.children;
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 2 }}>
      <Typography gutterBottom variant="h4" component="h1">
        {title}
      </Typography>
      <Typography gutterBottom variant="caption">
        {date} by {author}
      </Typography>
      <Typography gutterBottom variant="h6">
        {description}
      </Typography>
    </Box>
  );
}