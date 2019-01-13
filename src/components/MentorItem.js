import React from 'react'
import { Box, Heading, Image, Paragraph } from 'grommet';

const MentorItem = (props) => {
    return (
        <div>
            {props.list.fields ? (
                <Box
                    elevation='small'
                    round='small'
                    basis='1/4'
                    height='medium'
                    overflow='hidden'
                >
                    <Box
                        height='small'
                        round={{ "size": "small", "corner": "top" }}
                        direction='row'

                    >
                        {props.list.fields.profilePicture &&
                            <Box height="120px" width="120px" pad='small'>
                                <Image src={props.list.fields.profilePicture.fields.file.url} fit="cover" />
                            </Box>
                        }
                        <Box>
                            <Heading
                                color='sbksorange'
                                level='4'
                                margin='medium'
                            >
                                {props.list.fields.fullName}
                            </Heading>
                        </Box>
                    </Box>
                    <Box pad='xsmall' background='white'></Box>
                    <Box fill>
                        <Paragraph size='small' margin='medium'>{props.list.fields.description}</Paragraph>
                    </Box>
                </Box>
            ) : null}
        </div>
    )

}



export default MentorItem