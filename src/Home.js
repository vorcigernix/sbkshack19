import { Box } from 'grommet';
import React from 'react';
import { createClient } from 'contentful';
import NewsItem from './components/NewsItem';


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
                justify='start'
                wrap
            >
                        {this.state.data.map(newsItem => (
                            <Box
                                basis='1/4'
                                key={newsItem.sys.id ? newsItem.sys.id : (Math.floor(Math.random()*1000000)) }
                            >
                                <NewsItem news={newsItem} />
                            </Box>
                        ))}
            </Box>
                    );
                }
            }
            
            
export default Home;