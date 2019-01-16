import React from 'react'
import { Box, Heading, Text, Paragraph } from 'grommet';

const sbksgradient = "linear-gradient(102.77deg, #9C27B0, #666DE9)";
const NewsItem = (props) => {
    return (
        <Box 
        margin='small'
        >
            
            {props.news.fields ? (
                <Box
                    elevation='small'
                    round='xsmall'
                    background='almostwhite'
                >
                    <Box
                        height='8rem'
                        round={{ "size": "xsmall", "corner": "top" }}
                    
                        overflow='hidden'
                        

                    >
                        <Heading
                            level='1'
                            margin='medium'
                            color='sbksorange'

                        >
                            {props.news.fields.title}
                        </Heading>
                    </Box>
                    <Box height='medium'>
                        <Box fill
                            overflow='hidden'>
                            <Paragraph size='small' margin='medium'>{props.news.fields.description}</Paragraph>
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </Box>
    )

}



export default NewsItem