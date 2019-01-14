import { Box, Heading } from 'grommet';
import React from 'react';
import { createClient } from 'contentful';
import ScheduleItem from './components/SchedulteItem'


const SPACE_ID = process.env.REACT_APP_SPACE_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})



class Mentors extends React.Component {
    state = { data: [] };

    componentDidMount() {
        client.getEntries({
            content_type: 'schedule'
        })
            .then((response) => {
                this.setState({ data: response.items })
            })
            .catch(console.error)

    }

    render() {
        return (
            <Box
            direction="row-responsive">
                {this.state.data.map(eventItem => (
                    <Box
                        key={eventItem.sys.id}
                        width='large'
                    >
                        {eventItem &&
                           <Box
                           round='small'
                           margin='small'
                           justify='between'
                           align='start'
                           pad='medium'
                           elevation='medium'
                       >
                            <Box direction='column'>
                                <Heading
                                    color='sbksorange'
                                    level='4'
                                    margin='medium'
                                >
                                    {eventItem.fields.header}
                                </Heading>
                            </Box>
                                {eventItem.fields.events.map(sceventItem => (
                                    <ScheduleItem key={sceventItem.sys.id} list={sceventItem} />
                                ))
                                }
                            </Box>
                        }
                    </Box>
                ))}
            </Box>
        );
    }
}


export default Mentors;