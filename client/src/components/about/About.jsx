
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Code for Interview</Typography>
                <Text variant="h5">I'm a Software Engineer based in Kashmir, India. 
                    I've built websites, desktop applications and corporate software.<br />
                    I'm passionate about coding, learning and sharing knowledge with others.<br/>
                    Dont hesitate to visit my place 😇
                    {/* If you are interested, you can view some of my favorite projects here */}
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Mubashir24241" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                Feel free to  reach out to me on social media
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/i_m_meer_mubashir/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:mbshrmr@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;