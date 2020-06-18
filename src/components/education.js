import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render () {
        return (
            <Grid>
                <Cell coll={4}>
                    <p style={{fontFamily:'oxygen',fontSize:'15px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell coll={8}><h4 style={{marginTop:'0px', fontFamily:'oxygen'}}>{this.props.schoolName}</h4>
                <p style={{fontFamily:'oxygen'}}>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;