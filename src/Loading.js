import { Box } from 'grommet';
import React from 'react';
import { Article as ArticleIcon } from 'grommet-icons';

const Loading = () => (
    <Box animation='fadeIn' fill align="center"  color='dark'>
        <ArticleIcon size='xlarge'/>
    </Box>
    )

export default Loading;