import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import NewsPaper from '../NewsPaper/NewsPaper';


const MaterialUi = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
      fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=17d034bd30d54ec29c25c65e5983a01c')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <br />
            <h1>Material Ui Practice</h1>
            <br />
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        articles.map(article => <Grid item xs={2} sm={4} md={4} >
                        <NewsPaper article={article}></NewsPaper>
                    </Grid>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default MaterialUi;