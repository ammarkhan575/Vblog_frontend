import React from 'react'
import { Avatar, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import shareImg from '../../images/shareimage.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import imgWriter from '../../images/imgWriter.jpg';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const UserProfile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='m-auto border rounded w-[1080px]'>
            {/* About */}
            <div className='w-[80%] mx-auto mt-8 flex md:flex-col md:mx-2'>
                <div className='mb-5'>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 160, height: 160 }}
                    />
                </div>
                <div className='ml-10'>
                    <div className='flex md:block'>

                        <div className='w-[60%] md:w-full'>
                            <Typography variant='h5' sx={{ fontWeight: "bold", }}>VBlog Technology</Typography>
                            <Typography>17+ years in Development | JavaScript/React/FullStack | YouTuber | Head of Content @ShowwcaseHQ | Building ReactPlay</Typography>
                        </div>
                        <div className='flex w-[40%] items-start md:ml-4 md:flex-row md:w-auto'>
                            <Tooltip title="share profile">
                                <Link to="/#">
                                    <img src={shareImg} alt='share' style={{ width: '50px', height: '50px' }}></img>
                                </Link>
                            </Tooltip>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ height: '60px' }}
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                            <Button variant='contained' sx={{ marginTop: '15px' }}>
                                + Follow
                            </Button>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-6'>
                        <Typography variant='h6' >23.9 </Typography> <div className='flex justify-center items-center'>Followers </div>
                        <Typography variant='h6'>100 </Typography> <div className='flex justify-center items-center'>Following</div>
                    </div>
                </div>
            </div>

            {/* Profile link */}
            <div className='w-[80%] px-6 py-6 rounded border  mx-auto mt-8 flex justify-between md:mx-2 md:w-full md:flex-col'>
                <div className='md:mb-3'>
                    <PublicIcon sx={{ color: '#64748B' }} />
                    <GitHubIcon sx={{ color: '#64748B' }} />
                    <TwitterIcon sx={{ color: '#64748B' }} />
                    <YouTubeIcon sx={{ color: '#64748B' }} />
                    <LinkedInIcon sx={{ color: '#64748B' }} />
                    <FacebookIcon sx={{ color: '#64748B' }} />
                    <InstagramIcon sx={{ color: '#64748B' }} />
                </div>
                <div className='flex md:mb-3'>
                    <LocationOnOutlinedIcon sx={{ color: '#64748B' }} />
                    <p className='text-[#64748B]'>Bangalore</p>
                </div>
                <div className='flex'>
                    <CalendarMonthOutlinedIcon sx={{ color: '#64748B' }} />
                    <p className='text-[#64748B]'>Member Since Mar, 2022</p>
                </div>
            </div>

            <div className='w-[80%] px-10 py-6 rounded border mx-auto mt-8 flex flex-col gap-4 md:mx-2 md:w-screen'>
                <div className='pb-3 border-b'>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Writes at</Typography>
                </div>

                

                <div className='flex'>
                        <Avatar
                            alt="Remy Sharp"
                            src={imgWriter}
                            sx={{ width: 56, height: 56 }}
                        />
                    <div className="flex w-full justify-between md:flex-col">
                        <div className='ml-2'>
                            <div><Typography variant="h6">VBlog Technologies</Typography></div>
                            <div><p className='text-[#64748B]'>VBlog.com</p></div>
                        </div>

                        <Button variant="outlined" sx={{borderRadius:'15px', padding:'5px', height:'2rem', width:'155px'}}>
                            <NorthEastIcon />Read the Blog
                        </Button>
                    </div>
                </div>

                <div className='flex'>
                        <Avatar
                            alt="Remy Sharp"
                            src={imgWriter}
                            sx={{ width: 56, height: 56 }}
                        />
                    <div className="flex w-full justify-between md:flex-col">
                        <div className='ml-2'>
                            <div><Typography variant="h6">VBlog Technologies</Typography></div>
                            <div><p className='text-[#64748B]'>VBlog.com</p></div>
                        </div>

                        <Button variant="outlined" sx={{borderRadius:'15px', padding:'5px', height:'2rem', width:'155px'}}>
                            <NorthEastIcon />Read the Blog
                        </Button>
                    </div>
                </div>

                <div className='flex'>
                        <Avatar
                            alt="Remy Sharp"
                            src={imgWriter}
                            sx={{ width: 56, height: 56 }}
                        />
                    <div className="flex w-full justify-between md:flex-col">
                        <div className='ml-2'>
                            <div><Typography variant="h6">VBlog Technologies</Typography></div>
                            <div><p className='text-[#64748B]'>VBlog.com</p></div>
                        </div>

                        <Button variant="outlined" sx={{borderRadius:'15px', padding:'5px', height:'2rem', width:'155px'}}>
                            <NorthEastIcon />Read the Blog
                        </Button>
                    </div>
                </div>

                <div className='flex'>
                        <Avatar
                            alt="Remy Sharp"
                            src={imgWriter}
                            sx={{ width: 56, height: 56 }}
                        />
                    <div className="flex w-full justify-between md:flex-col">
                        <div className='ml-2'>
                            <div><Typography variant="h6">VBlog Technologies</Typography></div>
                            <div><p className='text-[#64748B]'>VBlog.com</p></div>
                        </div>

                        <Button variant="outlined" sx={{borderRadius:'15px', padding:'5px', height:'2rem', width:'155px'}}>
                            <NorthEastIcon />Read the Blog
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-[80%]  mx-auto mt-8 pt-4 flex justify-between md:mx-2 md:flex-col'>
                <div className='w-[30%] rounded border px-6 py-2 md:w-screen'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                        About Me
                    </Typography>
                    <div>
                        <p>
                            VBlog Technologies focus on maintaining all blogs in a single place
                            Follow on Twitter(@vblog) for daily tips and knowledge bytes on Web development and Blogging.
                        </p>
                    </div>
                </div>

                <div className='w-[30%] rounded border px-6 py-2  md:w-screen md:mt-6'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                        My Tech Stack
                    </Typography>
                    <div className='flex flex-wrap'>

                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>React</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Angular</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Javascript</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Machine Learning</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Javascript</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Software Engineering</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>unit testing</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Node.js</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Mobile apps</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Flutter</span>
                        <span className='bg-[#bcd8f3] hover:border hover:border-[#b8b5b5] rounded px-2 py-1 mx-2 my-3 hover:bg-slate'>Javascript</span>
                    </div>
                </div>

                <div className='w-[30%] rounded border px-6 py-2 md:w-screen md:mt-6'>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                        I am available
                    </Typography>
                    <div>
                        Sharing decade long experience to make it easier for you. Check out, https://Vblog.com
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserProfile