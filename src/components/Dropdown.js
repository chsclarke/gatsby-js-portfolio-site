import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import '../assets/sass/resume.scss';
import config from '../../config';

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
                    <Box mt="2rem">
                        <Button 
                            style={{
                                background: "#495057",
                                color: "#fff",
                                textalign: "center",
                                hover: {
                                    color: "#fff",
                                    background: "#bd5d38",
                                }
                                  
                            }}
                            download 
                            href={config.resumeFormat + this.state.MenuVal}
                            >Export</Button>
                    </Box>
                </form>
            </div>
        );
    }
  }
  
  export default Dropdown;