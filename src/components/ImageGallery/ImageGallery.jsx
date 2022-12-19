import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = props => {
    const {imageList} = props
    return (
        <ul>
            {imageList.map(image => (<ImageGalleryItem image={ image} />))}
        </ul>
        
    )
}

export default ImageGallery