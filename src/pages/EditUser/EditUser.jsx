import { Box, Button, Card, CardContent, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Form, useLoaderData } from "react-router-dom"

const EditUser = () => {
  const user = useLoaderData();

  //console.log('user', user)
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Edit Post
      </Typography>
      <Card>
        <CardContent>
          <Form method="patch">
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="name" name="name" label="Name" fullWidth defaultValue={user.name} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput id="username" name="username" label="username" fullWidth defaultValue={user.username} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <OutlinedInput id="email" name="email" label="E-mail" fullWidth defaultValue={user.email} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <OutlinedInput id="phone" name="phone" label="Phone" fullWidth defaultValue={user.phone} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="website">Website</InputLabel>
                <OutlinedInput id="website" name="website" label="website" fullWidth defaultValue={user.website} />
              </FormControl>
            </Box>
            <Button variant={'contained'} type="submit" color={'primary'}>
              Save
            </Button>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}

export { EditUser }
