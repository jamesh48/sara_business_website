import { Box, Button } from '@mui/material';
import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import SingleImage from './SingleImage';

const IGPhotoFeed = () => {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState('neutral');
  const [imageIdsCaptions, setImageIdsCaptions] = useState([]);

  const changeImage = (event: React.MouseEvent<HTMLElement>) => {
    const nextResult = /next-button/g.test(event.currentTarget.id);
    nextResult ? setDirection('forward') : setDirection('backward');
  };

  useEffect(() => {
    const fetchImageIdsCaptions = async () => {
      const response = await axios({ url: '/api/media' });
      setImageIdsCaptions(response.data);
    };

    fetchImageIdsCaptions();
  }, []);

  useEffect(() => {
    if (direction !== 'neutral') {
      let counter = Number(position);
      const wholeNumber = setInterval(() => {
        setPosition(
          direction === 'forward'
            ? Number((counter += 0.1).toFixed(1))
            : Number((counter -= 0.1).toFixed(1))
        );
        if (Number(counter.toFixed(1)) % 1 === 0) {
          clearInterval(wholeNumber);
          setDirection('neutral');
        }
      }, 35);
      return () => {
        clearInterval(wholeNumber);
      };
    }
  }, [direction]);

  return (
    <Box
      id="portfolio-slider"
      sx={{ height: '90vh', border: '1px solid black' }}
    >
      <Box
        id="outer-slider"
        sx={{ overflow: 'hidden', position: 'relative', height: '100%' }}
      >
        <Box
          id="inner-slider"
          sx={{
            display: 'flex',
            transform: `translateX(${position * -100}%)`,
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
        >
          {imageIdsCaptions.map(
            (singleImage: { caption: string; id: string }) => {
              return (
                <SingleImage
                  key={singleImage.id}
                  id={singleImage.id}
                  caption={singleImage.caption}
                />
              );
            }
          )}
        </Box>
        <Button
          id="prev-button"
          onClick={changeImage}
          disabled={Number(position) - 1 < 0 ? true : false}
          sx={{
            position: 'absolute',
            left: '0%',
            border: 'none',
            width: '5rem',
            height: '5rem',
            background: 'transparent',
            transform: 'translateY(-50%) rotate(180deg)',
            top: '50%',
            borderRadius: '50%',
            '&:disabled': {
              display: 'none',
            },
          }}
        >
          <svg
            className="arrow-button-icon"
            viewBox="0 0 100 100"
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              left: '20%',
              top: '20%',
              height: '60%',
              width: '60%',
            }}
          >
            <path
              className="arrow"
              style={{ fill: 'lightgray', pointerEvents: 'none', opacity: 0.8 }}
              d="M33.8352105,100 C31.4906934,99.997936 29.2429547,99.0649124 27.5861629,97.4060557 C24.1379457,93.9535448 24.1379457,88.3604714 27.5861629,84.9079605 L62.6044109,49.8897124 L27.5861629,14.8714644 C24.3395013,11.3872106 24.4353002,5.95761395 27.8028539,2.59006023 C31.1704076,-0.777493487 36.6000043,-0.873292384 40.0842581,2.37336919 L87.6006014,49.8897124 L40.0842581,97.4060557 C38.4274663,99.0649124 36.1797276,99.997936 33.8352105,100 L33.8352105,100 Z"
            ></path>
          </svg>
        </Button>
        <Button
          sx={{
            right: '0%',
            position: 'absolute',
            border: 'none',
            width: '5rem',
            height: '5rem',
            background: 'transparent',
            transform: 'translateY(-50%) rotate(180deg)',
            top: '50%',
            borderRadius: '50%',
            '&:disabled': {
              display: 'none',
            },
          }}
          id="next-button"
          disabled={
            Number(position) + 1 > imageIdsCaptions.length - 1 ? true : false
          }
          onClick={changeImage}
        >
          <svg
            className="arrow-button-icon"
            viewBox="0 0 100 100"
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              left: '20%',
              top: '20%',
              height: '60%',
              width: '60%',
            }}
          >
            <path
              className="arrow"
              style={{ fill: 'lightgray', pointerEvents: 'none', opacity: 0.8 }}
              d="M33.8352105,100 C31.4906934,99.997936 29.2429547,99.0649124 27.5861629,97.4060557 C24.1379457,93.9535448 24.1379457,88.3604714 27.5861629,84.9079605 L62.6044109,49.8897124 L27.5861629,14.8714644 C24.3395013,11.3872106 24.4353002,5.95761395 27.8028539,2.59006023 C31.1704076,-0.777493487 36.6000043,-0.873292384 40.0842581,2.37336919 L87.6006014,49.8897124 L40.0842581,97.4060557 C38.4274663,99.0649124 36.1797276,99.997936 33.8352105,100 L33.8352105,100 Z"
              transform="translate(100, 100) rotate(180)"
            ></path>
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

export default IGPhotoFeed;
