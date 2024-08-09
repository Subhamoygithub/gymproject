import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { RegisterApi } from '../Api/Registerapi';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import regislogo from "../image/undraw_Join_re_w1lh.png"



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const mutation = useMutation({
        mutationFn: RegisterApi,
        onSuccess: (savedMember) => {
            console.log("kkk",savedMember.status);
            if (savedMember.status === 200) {
                toast.success(savedMember.data.message);
                navigate('/signin')
            } else
                {
                toast.error(savedMember.data.message);
            }
          
          
        }
    })
    const onSubmit = (savedMember) => {
        const formdata = new FormData();
        formdata.append('name', savedMember.name)
        formdata.append('phone', savedMember.phone)
        formdata.append('email', savedMember.email)
        formdata.append('password', savedMember.password)
        formdata.append('answer', savedMember.answer)
        formdata.append('image', document.getElementById('image').files[0])
        mutation.mutate(formdata)
    }


    return (
       <>
       <div className='d-flex align-items-center justify-content-center mt-3'>
        <div style={{padding:"20px"}}>
        <ThemeProvider theme={defaultTheme}>
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    autoFocus
                                    {...register('name', { required: true })}
                                />
                                 {errors?.name?.type === 'required' && <p style={{ color: 'red' }}>Name is Required</p>}
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    {...register('email', { required: true })}
                                />
                                 {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>Email is Required</p>}
                                 {errors?.email?.type === 'pattern' && <p style={{ color: 'red' }}>Email address must be a valid address</p>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Phone"
                                    name="phone"
                                    autoComplete="family-name"
                                    {...register('phone', { required: true })}
                                />
                                  {errors?.phone?.type === 'required' && <p style={{ color: 'red' }}>Phone number is Required</p>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register('password', { required: true })}
                                />
                                  {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>Password is Required</p>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="answer"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Answer"
                                    autoFocus
                                    {...register('answer', { required: true })}
                                />
                                  {errors?.answer?.type === 'required' && <p style={{ color: 'red' }}>Answer is Required</p>}
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                   
                                    margin='normal'
                                    type='file'
                                    required
                                    fullWidth
                                    id="image"
                                    // label="image"
                                    autoFocus
                                    {...register('image', { required: true })}
                                />
                                  {errors?.image?.type === 'required' && <p style={{ color: 'red' }}>Image is Required</p>}

                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
        </div>
        <div >
            <img src={regislogo}></img>
        </div>
       </div>
        
       </>
        
      
    );
}