import React, { useState } from 'react'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Blog, STATUS } from '../Redux/Allslice';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Looder from '../Looder/Looder';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));





const Blogpage = () => {
    const dispatchblog = useDispatch()
    const [load, Setload] = useState(2)
    const { blogitem, status } = useSelector((state) => state.blogstore)
    console.log("blog", blogitem);

   

    useEffect(() => {
        dispatchblog(Blog())
    }, [])
    const loadmore = () => {
        Setload(load + 2)
    }
    const slice = blogitem.slice(0, load)
    if (status === STATUS.LOADING) {
        return (
            <>
                <div style={{ height: '800px', backgroundColor: "black" }}><h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Looder /></h1></div>

            </>
        )
    }

    return (
        <>
            <div className="d-flex flex-column text-center mt-5">
                <h4 className="text-primary font-weight-bold mt-3">Our Blog</h4>
                <h4 className="display-4 font-weight-bold">Your Ultimate Fitness Guide Book</h4>
            </div>
            <Grid container>
                {
                    slice?.map((b, i) => {
                        return (
                            <>
                                <Grid item md={6}>
                                    <Card sx={{ maxWidth: 445, maxHeight: 650, marginTop: "70px",  mx:"auto" ,border: "3px solid orange" }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    B
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={b.subtitle}
                                            subheader="May 22, 2024"
                                        />
                                        <CardMedia
                                            component="img"
                                            height="280"
                                            image={`https://corefitserver.onrender.com/${b?.image}`}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {b?.content.slice(0, 100)}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            {/* <IconButton aria-label="add to favorites" >
                        <FavoriteIcon />
                    </IconButton> */}
                                            {/* <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton> */}
                                            <Link class="btn btn-outline-warning mt-2 px-3" to={`/blogdetails/${b?._id}`}>Read More <i class="fa fa-angle-right"></i></Link>
                                        </CardActions>

                                    </Card>
                                   

                                </Grid>
                               

                            </>
                        )
                    })
                }

            </Grid>
            {load<blogitem.length?(<>
                <button className='btn btn-secondary d-block w-100 mt-5' onClick={loadmore}>
               See more
            </button>
                </>):null}
          
            {/* <Button variant="contained" disableElevation>
                                       Next Page
                                    </Button> */}
        </>


    )
}

export default Blogpage;
