import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export function BasicButtons() {
    return (
        <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}>
            <Button variant="outlined" color="error"  onClick={() => {
                alert('clicked');
            }}>
                Error
            </Button>
        </Stack>
    );
}
