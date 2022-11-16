import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import {Paper} from '@mui/material';

export default function App() {
  return (
    <>
    <div>
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea style={{justifyContent:'center'}}>
        <CardContent style={{justifyContent: 'center', alignItems:'center'}}>
        <TextField
          id="filled-multiline-static"
          label="Input"
          multiline
          rows={4}
          variant="filled"
          style={{width:'100%'}}
        />
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button size="small" color="success" >
          Submit
        </Button>
      </CardActions>
    </Card>
    <br />
    <Paper elevation={3} style={{width:'21.6rem', textAlign:'center'}} >Output
    </Paper>
    </div>
    </>
  );
}