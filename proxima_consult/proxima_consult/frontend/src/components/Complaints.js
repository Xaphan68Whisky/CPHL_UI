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

const Complaints = ({ match }) => {
  const [complaints, setComplaints] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getComplaints = async () => {
    const res = await axios.get(`/api/projects/${match.params.id}/complaints/`);
    setComplaints(res.data);
  };

  useEffect(() => {
    getComplaints();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newComplaint = {
      title,
      description,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const body = JSON.stringify(newComplaint);
      await axios.post(
        `/api/projects/${match.params.id}/complaints/`,
        body,
        config
      );
      getComplaints();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Complaints
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
            value={title}
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
            File Complaint
          </Button>
        </Box>
        <List>
          {complaints.map((complaint) => (
            <React.Fragment key={complaint.id}>
              <ListItem>
                <ListItemText
                  primary={complaint.title}
                  secondary={complaint.description}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Complaints;
