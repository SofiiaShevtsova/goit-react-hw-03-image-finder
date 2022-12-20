import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import StyleList from 'styles/styles';

const { ListOfImagesStyle } = StyleList;

class ImageGallery extends Component {
  state = {
    imageList: [],
    modalImage: null,
  };
  componentDidMount() {
      this.setState({ imageList: this.props.imageList });
  }

  onImageClick = event =>
    this.setState({
      modalImage: this.state.imageList.find(
        image => image.webformatURL === event.target.src
      ),
    });

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.setState({ modalImage: null });
    }
  };

  render() {
    return (
      <>
        {this.state.modalImage && (
          <Modal image={this.state.modalImage} onClick={this.onBackdropClick} />
        )}
        <ListOfImagesStyle>
          {this.state.imageList.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onClick={this.onImageClick}
            />
          ))}
        </ListOfImagesStyle>
        <Button />
      </>
    );
  }
}

export default ImageGallery;
