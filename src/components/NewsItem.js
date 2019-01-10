import React from 'react'
import { Box, Heading, Text, Paragraph } from 'grommet';

const sbksgradient = "linear-gradient(102.77deg, #9C27B0, #666DE9)";
const NewsItem = (props) => {
    console.log(props.news.fields)
    return (
        <div>
            {props.news.fields ? (
                <Box
                    elevation='small'
                    round='small'
                    basis='1/4'
                    height='medium'
                    overflow='hidden'
                >
                    <Box
                        background={props.news.fields.image ? 'url(' + props.news.fields.image.fields.file.url + ')' : sbksgradient}
                        height='small'
                        round={{ "size": "small", "corner": "top" }}

                    >
                        <Heading
                            color='white'
                            level='4'
                            margin='medium'

                        >
                            {props.news.fields.title}
                        </Heading>
                    </Box>
                    <Box pad='xsmall' background='white'><Text color='dark' size='small'>{props.news.fields.tags[0]}/{props.news.fields.tags[1]}</Text> </Box>
                    <Box fill>
                        <Paragraph size='small' margin='medium'>{props.news.fields.description}</Paragraph>
                    </Box>
                </Box>
            ) : null}
        </div>
    )

}



export default NewsItem