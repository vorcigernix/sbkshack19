import { Box } from 'grommet';
import React from 'react';
import { createClient } from 'contentful';
import NewsItem from './components/NewsItem';
import { Helmet } from "react-helmet";


const SPACE_ID = process.env.REACT_APP_SPACE_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'news'
        })
            .then((response) => {
                this.setState({ data: response.items })
            })
            .catch(console.error)

    }

    render() {
        return (

            <Box
                direction="row-responsive"
                alignContent='center'
                justify='between'
                wrap
            >
                <Helmet>
                    <meta name="Title" content="Hackathon" />
                    <meta name="Keywords" content="Prague Hackathon Networking Events Developers Dev Managers" />
                    <meta name="Description" content="One of hackathons you don't want to miss in Prague." />
                    <meta property="og:title" content="Hackathon in Prague, Forum Karlin" />
                    <meta property="og:site_name" content="Hackathon in Prague, Forum Karlin" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.socialbakers.com/" />
                    <meta property="og:image" content="https://www.developerweek.com/wp-content/uploads/2018/12/box-1.png" />
                    <meta property="og:description" content="One of hackathons you don't want to miss in Prague" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@socialbakers" />
                    <meta name="twitter:title" content="Hackathon in Prague, Forum Karlin" />
                    <meta name="twitter:description" content="One of hackathons you don't want to miss in Prague." />
                    <meta name="twitter:image" content="https://www.developerweek.com/files/img-for-twitter.png" />
                    <meta name="twitter:image:alt" content="Hackathon in Prague, Forum Karlin" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
                    <title>Hackathon – Home</title>
                    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                </Helmet>
                        {this.state.data.map(newsItem => (
                            <Box
                                basis='1/3'
                                key={newsItem.sys.id}
                            >
                                <NewsItem news={newsItem} />
                            </Box>
                        ))}
            </Box>
                    );
                }
            }
            
            
export default Home;