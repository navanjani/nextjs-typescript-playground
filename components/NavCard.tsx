import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import Link from "next/link";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
interface ITitle{
    id: number,
    title: string,
    slug:string
}
interface INavCard {
    title:ITitle
}
 const NavCard: FC<INavCard> = ({title}:INavCard) => {
    return (
        <Link href={`/${title.slug}`}>
        <Card sx={{ minWidth: 100 }} style={{backgroundColor: "#00ecff"}}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    {title.title}
                </Typography>

            </CardContent>

        </Card>
        </Link>
    );
}
export default NavCard
