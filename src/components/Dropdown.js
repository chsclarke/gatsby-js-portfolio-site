import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import '../assets/sass/resume.scss';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { MenuVal: '.pdf' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({MenuVal: event.target.value});
        console.log(this.state.MenuVal)
    }

    handleSubmit(event) {
        alert('ChaseClarkeResume'+this.state.MenuVal);
        event.preventDefault();
        // return (<Button download href={this.state.MenuVal}/>)
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <InputLabel id="demo-simple-select-label">filetype</InputLabel>
                    <Select style={{width: "5em"}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={'.pdf'} >.pdf</MenuItem>
                        <MenuItem value={'.docx'} >.docx</MenuItem>
                        <MenuItem value={'.txt'} >.txt</MenuItem>
                    </Select>
                    <Box mt="2rem">
                        <Button 
                            style={{
                                background: "#495057",
                                color: "#fff",
                                textalign: "center",
                                'Button:hover': {
                                    color: "#fff",
                                    background: "#bd5d38",
                                }
                                  
                            }}
                            download 
                            href={'ChaseClarkeResume' + this.state.MenuVal}
                            >Export</Button>
                    </Box>
                </form>
            </div>
        );
    }
  }
  
  export default Dropdown;