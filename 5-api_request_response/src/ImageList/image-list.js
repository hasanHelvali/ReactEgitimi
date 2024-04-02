import ImageItem from "../ImageItem/image-item";




function ImageList({imagesData}) {

    return(
       <div className="imageList">
        {imagesData.map((_image,index)=>{
           return <ImageItem key={index} _image={_image}/>
        })}
       </div>
    )
}

export default ImageList;