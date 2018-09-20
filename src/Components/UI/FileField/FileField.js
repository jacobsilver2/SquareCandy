import React, { Component } from 'react';
import PreviewPicture from '../PreviewPicture/previewPicture'

class FileField extends Component {
    state = { 
        picture: null,
        pictureURL: null
     }

    displayPicture = (event) => {
        let reader  = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                picture: file,
                pictureURL: reader.result
            });
            this.props.onChange(this.state.pictureURL)
        }
        reader.readAsDataURL(file);
    }

    render() {
        const { label, required } = this.props;
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">{`${label} ${required ? '*' : ''}`}</label>
                    <div className="col-sm-9">
                        <input 
                            type="file"
                            className="form-control"
                            onChange={ (event) => {this.displayPicture(event)} }
                        />
                    </div>
                </div>
                <PreviewPicture pictureUrl={this.state.pictureURL}/>
            </div>
        );
    }
}

export default FileField;