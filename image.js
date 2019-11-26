import React, { Component } from 'react';
import React from 'react';



function Image(props) {
    // eslint-disable-next-line
    const imageList = props.imageList
    let ImageHtML = []
    for (let i = 0; i < imageList; i++) {
        let image=imageList[i]
        ImageHtML.push(
            <div className="image" key={i}>
                <a href={image.link}>
                    <figure className="photos">
                        <img src={image.photo} />
                            <figcaption>
                                <span> {image.title}</span>
                                <button class="btnSee">{image.bouton}</button>
                            </figcaption>
                    </figure>
                    </a>
                    </div>
                    
                )
                return ImageHtML;
            }
        
          
              
}  
export default Image;