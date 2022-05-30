import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import ToolBar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

export function GeoNav() {
    return (
        <>
            <AppBar position="fixed">
                <ToolBar sx={{mt: "10px", mb: "10px"}}>
                    <Box sx={{mr: "20px"}}>
                        <a href="https://www.geoguessr.com/">
                            <img src="/geoguessr_logo.svg" alt="geoguessr" height="50px"></img>
                        </a>
                    </Box>
                    <Box sx={{ml: "30px"}}></Box>
                    <Typography variant="h5" sx={{mt: "-5px"}}>
                        <Link href="/" color="inherit" underline="none">Geoguessr Database</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h7" sx={{mt: "-5px", ml: "20px"}}>
                        <Link href="/" color="inherit" underline="none">Submit</Link>
                    </Typography>
                    <Typography variant="h7" sx={{mt: "-5px", ml: "20px"}}>
                        <Link href="/search" color="inherit" underline="none">Search</Link>
                    </Typography>
                </ToolBar>
            </AppBar>
            <Box sx={{mt: "130px"}}></Box>
        </>
    )
}