const ImageGalleryItem = props => {
    const {image, onClick} = props
    return (<li onClick={onClick}>
  <img src={image.webformatURL} alt={image.tags} width="300px"/>
    </li>)
}

export default ImageGalleryItem
