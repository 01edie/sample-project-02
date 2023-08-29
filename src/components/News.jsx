
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Box, Paper, Typography, Grid } from "@mui/material";
/* eslint-enable */


import { FreeMode, Pagination, Autoplay } from "swiper";

export default function News() {
    return (
        <Box mt={1} >
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // freeMode
                pagination
                grabCursor
                autoplay={{
                    delay: 1500,
                    pauseOnMouseEnter: true,
                }}
                loop
                modules={[FreeMode, Pagination, Autoplay]}
                className="banner"
            >
                {/* slidesPerView attribute requiring  <= SwiperSlides/2 to be in loop */}
                <SwiperSlide >
                    <Paper elevation={3} sx={{ padding: 2, margin: 1, marginBottom: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Box display='flex' gap={1}>
                                        <Typography variant="h4">The Tribune</Typography>
                                        <Typography>12d</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5">Sharda Sarvhitkari Model Sr Sec School, Sec-40, Chandigarh</Typography>
                                        <Typography variant="body2" mt={1} >
                                            The topic of health and hygiene was taken up in the special morning assembly at the school by Savlon team. They explained the importance of hygiene to children by showing an animated video. Mamta from the team showed the different steps of hand washing...
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box component='img' src="/news1.jpg" height={200} sx={{ borderRadius: '4px' }} />

                            </Grid>
                        </Grid>
                    </Paper>
                </SwiperSlide>
                <SwiperSlide >
                    <Paper elevation={3} sx={{ padding: 2, margin: 1, marginBottom: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Box display='flex' gap={1}>
                                        <Typography variant="h4">ETRetail.com</Typography>
                                        <Typography>1d</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h5">Seeing green shoots of pickup on volumes as inflation moderates: ITC CMD Sanjiv Puri</Typography>
                                        <Typography variant="body2"  mt={1}>
                                            As inflation is moderating, diversified group ITC is seeing green shoots of volume growth and expects the momentum to continue sequentially,
                                            its Chairman and Managing Director Sanjiv Puri said on Sunday...
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box component='img' src="/news2.jpg" height={200} sx={{ borderRadius: '4px' }} />

                            </Grid>
                        </Grid>
                    </Paper>
                </SwiperSlide>

            </Swiper>
        </Box>
    )
}
