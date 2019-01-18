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
                    background='white'
                >
                    <Box
                        height='8rem'
                        round={{ "size": "xsmall", "corner": "top" }}
                        background='linear-gradient(180deg, #E8EAEC 30% , #fff, #fff)'
                        overflow='hidden'
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
                                level='3'
                                margin='medium'
                            >
                                {props.list.fields.fullName}
                            </Heading>
                        </Box>
                    </Box>
                    <Box
                    
                    overflow='hidden'
                    background='white'
                    height='medium'
                    >
                        <Paragraph  margin='medium'>{props.list.fields.description}</Paragraph>
                    </Box>
                </Box>
            ) : null}
        </div>
    )

}



export default MentorItem