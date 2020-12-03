import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import '../assets/sass/resume.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  exportButton: { 
    background: "#495057",
    color: "#fff",
    textalign: "center",
    '&:hover': {
        background: "#bd5d38",
    },
    outline: "none",
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">filetype</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>.pdf</MenuItem>
          <MenuItem value={20}>.docx</MenuItem>
          <MenuItem value={30}>.txt</MenuItem>
        </Select>
        <Box mt="2rem">
        <Button className={classes.exportButton}>
            Export
        </Button>
      </Box>
      </FormControl>
    </div>
  );
}