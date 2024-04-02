function ImageItem({_image}) {
    console.log(_image);
    return <div>
        <img className="_image" src={_image.urls.small} alt={_image.alt_description} />
    </div> 
}

export default ImageItem;