import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./home.css";
import { Grid } from '@mui/material';
import img1 from '../images/4540.png';
import img2 from '../images/img2.png';
import img3 from '../images/pngegg.png';
import img4 from '../images/img4.jpg'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='container '>
            <div>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid item xs={6}
                    display='flex'
                        alignItems="center"
                        justifyContent="center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={img1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hospital
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                To know about the timings and other details of doctors available at a hospital click on Details. Incase you want to raise a complaint click on complain option
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate('/doctors')}>Details</Button>
                                <Button size="small" onClick={()=>navigate('/complaint')}>Complain</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={6}                    display='flex'
                        alignItems="center"
                        justifyContent="center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={img2}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Schools
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                To know about teachers and the subjects they teach click on Details. Incase you want to register a complaint click on Complain
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate('/teachers')}>Details</Button>
                                <Button size="small" onClick={()=>navigate('/complaint')}>Complain</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}                    display='flex'
                        alignItems="center"
                        justifyContent="center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={img3}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Ration Shop
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                To know about the timings of ration shop, click on Details. Incase you want to raise a complaint, click on Complain
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={()=>navigate('/rationshops')}>Details</Button>
                                <Button size="small"  onClick={()=>navigate('/complaint')}>Complain</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6}                    display='flex'
                        alignItems="center"
                        justifyContent="center">
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 250 }}
                                image={img4}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Municipality
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                                <Button size="small" onClick={()=>navigate('/complaint')}>Complain</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}