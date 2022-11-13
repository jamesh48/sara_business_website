import { Box, Typography, useMediaQuery } from '@mui/material';

const MarqueeContainer = () => {
  const bigSmile = useMediaQuery('(min-width:1600px) and (max-width: 1750px)');
  const mediumSmile = useMediaQuery(
    '(min-width:1300px) and (max-width: 1500px)'
  );
  const smallSmile = useMediaQuery(
    '(min-width:1150px) and (max-width: 1300px)'
  );

  const smileFlex = (() => {
    if (bigSmile) {
      return 0.4;
    }
    if (mediumSmile) {
      return 0.5;
    }

    if (smallSmile) {
      return 0.6;
    }
    return 0.5;
  })();

  return (
    <Box sx={{ display: 'flex', height: '95vh', alignItems: 'center' }}>
      <Box sx={{ height: '100%' }}>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '3rem',
            height: '25%',
            alignItems: 'center',
          }}
        >
          Julian &quot;Boomer&quot; Hrivnak
        </Typography>
        <Box id="marquee-contents" sx={{ display: 'flex' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}
            id="marquee-paragraphs"
          >
            <Typography
              id="about-me-marquee-description-1"
              sx={{
                width: '97.5%',
                lineHeight: 1.95,
                fontSize: '1.5rem',
                fontWeight: 200,
                letterSpacing: '.25px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              placerat mollis orci. Donec quis lobortis mi. Nulla eu nulla
              convallis, vestibulum neque eu, aliquam augue.
            </Typography>
            <Typography
              id="about-me-marquee-description-2"
              sx={{
                width: '97.5%',
                lineHeight: 1.95,
                fontSize: '1.5rem',
                fontWeight: 200,
                letterSpacing: '.25px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              iaculis urna nec lacus efficitur pulvinar. Suspendisse dictum leo
              justo, sed mollis odio lobortis in. Sed a ultrices mi. Integer sed
              fermentum lorem, id accumsan quam. In feugiat, libero eget tempus
              bibendum, ex magna placerat orci, in molestie turpis lectus eget
              tortor.
            </Typography>
          </Box>
          <Box
            id="smile-container"
            sx={{
              minHeight: '40rem',
              backgroundImage: `url(https://scontent.cdninstagram.com/v/t51.29350-15/308242002_793358368644807_4086270314555495329_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Z7oY9UdofOcAX-WRtQj&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfB39qEZhNNUJ_RII0s0WqFPKn6liDJJiKAfyqi5ZwDhwA&oe=63767309)`,
              maxWidth: '50%',
              minWidth: '27.5%',
              backgroundSize: 'cover',
              border: '1px solid ivory',
              backgroundPositionY: '25%',
              backgroundPositionX: '75%',
              backgroundRepeat: 'no-repeat',
              // borderRadius: '50%',
              flex: smileFlex,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MarqueeContainer;
