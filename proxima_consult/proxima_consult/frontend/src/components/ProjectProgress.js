import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const ProjectProgress = ({ match }) => {
  const [progress, setProgress] = useState([]);
  const [formData, setFormData] = useState({
    status: '',
    description: '',
  });

  const { status, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getProgress = async () => {
    const res = await axios.get(`/api/projects/${match.params.id}/progress/`);
    setProgress(res.data);
  };

  useEffect(() => {
    getProgress();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newProgress = {
      status,
      description,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const body = JSON.stringify(newProgress);
      await axios.post(
        `/api/projects/${match.params.id}/progress/`,
        body,
        config
      );
      getProgress();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Project Progress
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="status"
            label="Status"
            name="status"
            autoFocus
            value={status}
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            multiline
            rows={4}
            value={description}
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Progress
          </Button>
        </Box>
        <List>
          {progress.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText primary={item.status} secondary={item.description} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ProjectProgress;
