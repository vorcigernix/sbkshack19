import React from 'react'
import { Box, Heading, Image, Paragraph } from 'grommet';

const MentorItem = (props) => {
    return (
        <div>
            {props.list.fields ? (
                <Box
                    elevation='small'
                    round='xsmall'
                    overflow='hidden'
                    margin='small'
                    background='almostwhite'
                >
                    <Box
                        height='small'
                        round={{ "size": "xsmall", "corner": "top" }}
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
                                level='1'
                                margin='medium'
                            >
                                {props.list.fields.fullName}
                            </Heading>
                        </Box>
                    </Box>
                    <Box height='small'>
                        <Paragraph size='small' margin='medium'>{props.list.fields.description}</Paragraph>
                    </Box>
                </Box>
            ) : null}
        </div>
    )

}



export default MentorItem