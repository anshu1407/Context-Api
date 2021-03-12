import { Avatar, Card, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import HeaderOptions from './HeaderOptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';
const useStyles= makeStyles((theme)=>({
  container:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center"
  },
  cardStyle:{
    borderRadius: 10,
    marginBottom:10,
},
}))


const postOptions=[
  {
    icon: <ThumbUpIcon />,
    title: "Like"
  },
  {
    icon: <CommentIcon />,
    title: "Comment"
  },
  {
    icon: <ShareIcon />,
    title: "Share"
  },
  {
    icon: <SendIcon />,
    title: "Send"
  },
]

const PostList = ({postsData}) => {
  const {container, cardStyle}= useStyles();
  return (
    <>
    {postsData.map((post)=>(
      <Card className={cardStyle}>
      <List key={post.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={post.data.name} secondary={moment(post.data.date).format('MMMM D YYYY, h:mm:ss a')} />
        </ListItem>
        <ListItem>
        <Typography>{post.data.message}</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
          <Grid item xs>
          <HeaderOptions
          options={postOptions}
          flexStyle={container}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} />
          </Grid>
        </ListItem>
      </List>
    </Card>
    ))}
    </>
  )
}

export default PostList

