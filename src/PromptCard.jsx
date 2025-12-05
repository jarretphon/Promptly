import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function PromptCard() {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card>
            <CardHeader 
                title="Prompt Title" 
                subheader="Brief description of the prompt"
                slotProps={{
                    title: {variant: 'body1'},
                    subheader: {variant: 'body2'}
                }}
                action={
                    <CardActions disableSpacing>
                        <IconButton size='small'>
                            <MoreVertIcon fontSize='small'/>
                        </IconButton>
                    </CardActions>
                }
                sx={{pb: 0.5}}
            />
            <CardContent sx={{p: 1, pt: 1.5, pb: 1.5, m: 2, mt: 0, borderRadius: 2, backgroundColor: '#f3f3f3'}}>
                <Typography variant="body2" color="textSecondary">
                    Template of prompt goes here. 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    This is where the main content of the prompt card will be displayed.
                    There will be many lines here
                    many lines
                    many lines
                    many lines
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PromptCard
