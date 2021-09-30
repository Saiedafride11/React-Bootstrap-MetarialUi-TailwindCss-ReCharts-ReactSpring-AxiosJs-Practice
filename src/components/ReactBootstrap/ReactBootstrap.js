import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';

const ReactBootstrap = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
      fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=17d034bd30d54ec29c25c65e5983a01c')
      .then(res => res.json())
      .then(data => setNews(data.articles))
    }, [])
    return (
        <div>
            <h1>React Bootstrap Practice</h1>
            <br />
            { news?.length === 0 ?
                <Spinner animation="border" />
                :
                <Row xs={1} md={3} className="g-4">
                    {
                    news?.map(nw => <News new={nw}></News>)
                    }
                </Row>
            }
        </div>
    );
};

export default ReactBootstrap;