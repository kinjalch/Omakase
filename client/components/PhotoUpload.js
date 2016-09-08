import React from 'react';
import { Button } from 'react-bootstrap';


class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      photoPreviewUrl: ''
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log('photo upload change: ', this.state);
    console.log("this.state after submit: ", this.state);
  }

  photoChange(e) {
    e.preventDefault();

    let photoReader = new FileReader();
    let photoFile = e.target.files[0];

    photoReader.onloadend = () => {
      this.setState({
        photo: photoFile,
        photoPreviewUrl: photoReader.result
      });
    }

    //console.log("this.state ", this.state.photoPreviewUrl);
    photoReader.readAsDataURL(photoFile);
  }

  render() {
    let {photoPreviewUrl} = this.state;
    let previewPhoto = null;

    if (photoPreviewUrl) {
      previewPhoto = (<img src={photoPreviewUrl} />);}
    // } else {
    //   $photoPreview = (<div className="previewText">Please select an Image for Preview</div>);
    // }
    return (
     <div className="photoUploader">
      <form onChange={(e) => this.handleChange(e)}>
        <input
          type='file'
          // value={this.state.photo}
          className="fileInput"
          onChange={(e) => this.photoChange(e)}
        />
        <Button type='submit' onClick={(e)=>this.handleSubmit(e)}>
          Upload photo
        </Button>
     </form>
          <div className="photo">
            {previewPhoto}
          </div>
      </div>
    );
  }
}

export default PhotoUpload;
