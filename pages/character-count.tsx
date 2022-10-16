import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import {Container, styled} from "@mui/material";
import {NextPage} from "next";
import Grid from '@mui/material/Grid';
import {auto} from "@popperjs/core";
import {borderRadius} from "@mui/system";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Button from "@mui/material/Button";




const CharacterCount: NextPage =  () => {
    const [text, setText] = React.useState('');
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Container>
            <Grid mt={10}>
                <Typography textColor="#00008B" fontSize="2rem" fontWeight="lg" level="display1">Character Count</Typography>

            </Grid>
            <Box
                 sx={{

                     border: '1px solid #00008B',
                     borderRadius:10,
                     marginTop:10,
                     backgroundColor: '#C0C0C0',
                     '&:hover': {
                         backgroundColor: '#7FFD4',
                         opacity: [0.9, 0.8, 0.7],
                     },
                 }}>

        <Textarea
            placeholder="Type in here…"
            value={text}
            onChange={(event) => setText(event.target.value)}
            minRows={2}
            maxRows={10}


            endDecorator={
                <Typography textColor="#00008B" fontSize="1.5rem" fontWeight="lg" sx={{ ml: 'auto' }}>
                    {text.length} character(s)
                </Typography>
            }
            sx={{
                width:1150,
                height:500
            }}

        />

            </Box>

            <Box m={2} p={2}
                 sx={{
                         border: '1px solid #00008B',
                         borderRadius: 10,
                         marginTop: 10,
                         marginLeft:120
                 }}
            >
                <Grid>
               <Button> <Link href="/">Home </Link></Button>
                </Grid>
            </Box>
        </Container>

);
}
export default CharacterCount
