import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';

interface SingleImageProps {
  caption: string;
  id: string;
}
const SingleImage = (props: SingleImageProps) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const fetchSingleImage = async () => {
      const response = await axios({
        url: `/api/singlemedia`,
        params: { photoId: props.id },
      });
      setImgUrl(response.data.media_url);
    };

    fetchSingleImage();
  }, [props.id]);

  return (
    <Box
      sx={{
        minWidth: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${imgUrl})`,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          flex: 0.9,
          alignItems: 'center',
          backgroundPosition: 'center',
          // backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.1,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            textRendering: 'geometricPrecision',
            textAlign: 'center',
          }}
        >
          {props.caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleImage;
