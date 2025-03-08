import React from 'react';
import Header from './components/Header';
import MainCard from './components/MainCard';
import { Box, Button, Card, CardMedia, Typography, IconButton } from '@mui/material';
import DriveIcon from '@mui/icons-material/DriveFolderUpload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DownloadIcon from '@mui/icons-material/Download';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f2f5', paddingBottom: '30px' }}>
      <Header />
      <MainCard />
      <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" style={{ marginTop: '30px' }}>
        {/* Select Image and Original Image Side by Side */}
        <Box display="flex" flexDirection="column" alignItems="center" margin="20px">
          <Button variant="contained" color="primary" style={{ marginBottom: '15px', fontFamily: 'Poppins, sans-serif' }}>
            Select Image
          </Button>
          <Box>
            <IconButton color="primary">
              <DriveIcon />
            </IconButton>
            <IconButton color="primary">
              <UploadFileIcon />
            </IconButton>
          </Box>
        </Box>
        <Card style={{ margin: '20px', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '12px', background: '#ffffff' }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/s-4.jpg"
            alt="Original Image"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Box textAlign="center">
            <Typography variant="body1" style={{ fontWeight: 'bold', color: '#37474f', fontFamily: 'Poppins, sans-serif' }}>Original Image</Typography>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>

      {/* Generated Images in a Row Below the Original Image */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" padding="20px">
        <Card style={{ margin: '15px', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '12px', background: '#ffffff' }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/s-2.jpg"
            alt="Colorized"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Box textAlign="center">
            <Typography variant="body1" style={{ fontWeight: 'bold', color: '#37474f', fontFamily: 'Poppins, sans-serif' }}>Colorized</Typography>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </Box>
        </Card>

        <Card style={{ margin: '15px', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '12px', background: '#ffffff' }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/s-3.jpg"
            alt="Semantic Segmented"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Box textAlign="center">
            <Typography variant="body1" style={{ fontWeight: 'bold', color: '#37474f', fontFamily: 'Poppins, sans-serif' }}>Semantic Segmented</Typography>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </Box>
        </Card>

        <Card style={{ margin: '15px', maxWidth: '300px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '12px', background: '#ffffff' }}>
          <CardMedia
            component="img"
            height="180"
            image="/images/s-1.jpg"
            alt="Road-River Extraction"
            style={{ borderRadius: '12px 12px 0 0' }}
          />
          <Box textAlign="center">
            <Typography variant="body1" style={{ fontWeight: 'bold', color: '#37474f', fontFamily: 'Poppins, sans-serif' }}>Road-River Extraction</Typography>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </div>
  );
}
export default App; 