import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Form, Link, useLoaderData } from "react-router-dom"

const POSTS = [
  { name: 'Title', key: 'title' },
  { name: 'Text post', key: 'body' },
]

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Post Details
      </Typography>
      {post && (
        <Card>
          <CardContent>
            <List>
              {POSTS.map((text) => (
                <ListItem key={text.key}>
                  <ListItemText primary={text.name} secondary={post[text.key]}></ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box mt={2} display="flex" flexDirection="row">
        <Box mr={2}>
          <Button component={Link} variant="contained" color="primary" to="edit">
            Edit User
          </Button>
        </Box>
        <Form
          method="delete"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm('Delete this post?')) {
              event.preventDefault()
            }
          }}
        >
          <Button variant="contained" color="error" type="submit">
            Delete Post
          </Button>
        </Form>
      </Box>
    </>
  )
}

export { PostDetails }
