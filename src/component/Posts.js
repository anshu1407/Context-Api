import { Button, Card, Grid, InputBase, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import HeaderOptions from './HeaderOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PostList from './PostList';
import { addPost, getPosts } from '../firebase/posts';

const useStyles = makeStyles((theme) => ({
  inputField: {
    border: "1px solid grey",
    borderRadius: 20,
    // width: 800,
    padding: 5,
  },
  cardStyle: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  margin: {
    marginRight: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
}))

const postOptions = [
  {
    icon: <PhotoIcon />,
    color: "blue",
    title: "Photo"
  },
  {
    icon: <YouTubeIcon />,
    color: "orange",
    title: "Video"
  },
  {
    icon: <EventIcon />,
    color: "purple",
    title: "Event"
  },
  {
    icon: <AssignmentIcon />,
    color: "pink",
    title: "Write article"
  },
]

const Posts = () => {
  const { inputField, cardStyle, margin, container } = useStyles();
  const [input, setInput] = useState('');
  const [posts, setPosts]= useState([]);

  const getAllPosts= async()=>{
    const res= await getPosts();
    if(res?.length){
      const data= res.map((post)=>({
        id:post.id,
        data:{...post.data,
        date:post.data.date.toDate()}
      }))
      console.log(data,'------------------manipulate data');
      setPosts(data)
    }
  }

  useEffect(() => {
    getAllPosts();
  }, [])

  const handleAddPost= async()=>{
    console.log('function called............')
    const res = await addPost({
      name:"Akanksha Tejwani",
      message:input,
      photoUrl:"",
    })
    if(res){
      getAllPosts();
      setInput('')
    }
  }
  return (
    <>
      <Card className={cardStyle}>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs>
        <InputBase
          startAdornment={<CreateIcon className={margin} />}
          fullWidth
          value={input}
          onChange={e => setInput(e.target.value)}
          className={inputField}
          placeholder="Posts"
          inputProps={{ 'aria-label': 'post' }}
        />
        </Grid>
        <Grid item xs={1}>
        <Button
        variant="contained"
        color="blue"
        size="small"
        onClick={handleAddPost}>
          Post
        </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 15 }}>
          <Grid item xs={1} sm={1} md={1} lg={1} />
          <Grid item xs>
            <HeaderOptions
              options={postOptions}
              flexStyle={container} />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} />
        </Grid>
      </Card>
      <PostList postsData={posts}/>
    </>
  )
}

export default Posts
