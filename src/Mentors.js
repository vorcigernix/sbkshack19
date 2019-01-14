import { Box } from 'grommet';
import React from 'react';
import { createClient } from 'contentful';
import MentorItem from './components/MentorItem';
import { Helmet } from "react-helmet";



const SPACE_ID = process.env.REACT_APP_SPACE_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})



class Mentors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        client.getEntries({
            content_type: 'mentors'
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
                margin='small'
                gap='medium'>
                <Helmet>
                    <meta name="Title" content="Hackathon-Mentors" />
                    <meta name="Keywords" content="Prague Hackathon Networking Events Developers Dev Managers Mentors" />
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
                    <title>Hackathon – Mentors</title>
                </Helmet>
                {this.state.data.map(pplItem => (
                    <Box
                        key={pplItem.sys.id}
                        direction="row-responsive"
                    >
                        <MentorItem list={pplItem} />
                    </Box>
                ))}
            </Box>
        );
    }
}


export default Mentors;