'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function ErrorPage({ error, reset }) {
    return (
        <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main' }} />
            </Box>

            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Something went wrong!
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
                {error.message || 'An unexpected error occurred'}
            </Typography>

            {error.digest && (
                <Typography variant="caption" color="text.disabled" paragraph>
                    Error ID: {error.digest}
                </Typography>
            )}

            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    startIcon={<HomeIcon />}
                    href="/"
                    sx={{ px: 4 }}
                >
                    Go Home
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<RefreshIcon />}
                    onClick={() => reset()}
                    sx={{ px: 4 }}
                >
                    Try Again
                </Button>
            </Box>
        </Container>
    );
