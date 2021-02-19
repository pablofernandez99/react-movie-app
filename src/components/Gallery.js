import React from 'react'
import Image from './Image'
import NoImages from './NoImages'


const Gallery = props => {

    const result = props.data


    let images
    let noImages

    if (result.length > 0) {
        images = result.map(image => {
            let id = image.id
            let title = image.original_title
            let url = image.poster_path

            return <Image url={url} key={id} title={title} />
        })
    } else {
        noImages = <NoImages />
    }


    return (

        <div className="gallery-img">
            <ul>
                {images}
            </ul>
            {noImages}
        </div>
    )
}

export default Gallery