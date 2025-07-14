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
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const { name, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getProjects = async () => {
    const res = await axios.get('/api/projects/');
    setProjects(res.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      name,
      description,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const body = JSON.stringify(newProject);
      await axios.post('/api/projects/', body, config);
      getProjects();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Project Name"
            name="name"
            autoFocus
            value={name}
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Project Description"
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
            Create Project
          </Button>
        </Box>
        <List>
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              <ListItem
                button
                component={Link}
                to={`/projects/${project.id}/progress`}
              >
                <ListItemText
                  primary={project.name}
                  secondary={project.description}
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

export default Projects;
