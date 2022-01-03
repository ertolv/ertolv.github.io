import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import JObject from '../JObject';

interface MainProps {
  posts: any;
  title: string;
}

export default function Post(props: MainProps) {
  const { posts, title } = props;
  return (
    <Grid
      item
      xs={12}
      md={8}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.default.posts.map((post: any) => (
        // change classname
        <JObject className="markdown" key={post.id} >
          {post}
        </JObject>
      ))}
    </Grid>
  );
}