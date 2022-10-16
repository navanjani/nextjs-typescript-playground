import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container} from "@mui/material";
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavCard from '../components/NavCard'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#00ecff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const titles = [
    {id: "1",title:"Character Count", slug:"character-count"},
    {id: "2",title:"Add Numbers", slug:"add-numbers"},
    {id: "3",title:"Photo Gallery", slug:"photo-gallery"}

]

const Home: NextPage = () => {
    return (
        <Container>
            <Grid>
                <h1>Code Feature Borad</h1>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {titles.map((title) => (
                    <Grid xs={2} sm={4} md={4} key={title.id} >
                        {/*<Item>Content</Item>*/} <NavCard title={title}/>

                    </Grid>
                ))}
            </Grid>

        </Container>
    );
}

export default Home
