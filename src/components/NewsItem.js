import React from 'react'
import { Box, Heading, Text, Paragraph } from 'grommet';

const NewsItem = (props) => {
    return (
        <Box
            margin='small'
            background='white'
            round='xsmall'
            elevation='small'
        >

            {props.news.fields ? (
                <Box   
                >
                    <Box
                        height='7rem'
                        round={{ "size": "xsmall", "corner": "top" }}
                        background='linear-gradient(180deg, #E8EAEC 30% , #fff, #fff)'
                        overflow='hidden'

                    >
                        <Heading
                            level='3'
                            margin='medium'
                            color='sbksorange'

                        >
                            {props.news.fields.title}
                        </Heading>
                    </Box>
                    <Box height='medium'>
                        <Box fill
                            overflow='hidden'
                            background='white'
                            round={{ "size": "xsmall", "corner": "bottom" }}
                        >
                            <Paragraph margin='medium'>{props.news.fields.description}</Paragraph>
                        </Box>
                    </Box>
                </Box>
            ) : null}
        </Box>
    )

}



export default NewsItem