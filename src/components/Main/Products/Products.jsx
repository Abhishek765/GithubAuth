import React from 'react'
import { ReactComponent as Product } from "../../../images/Product.svg"
import { ReactComponent as Services } from "../../../images/Services.svg"
import { ReactComponent as Technology } from "../../../images/Technology.svg"
import './Products.css'
const Products = () => {
    return (
        <>
            {/* Third Section */}
            <div className="heading_section_till">
                <h2 className="Heading_section">Products and Services</h2>
            </div>
            <div className="row third_tile">

                <div className="col-md-4 third_tile_child">
                    {/* Image */}
                    <Product className="third_img" />

                    {/* Heading  */}
                    <h2 className="third_title"><span className="third_title_span">Our Product</span> </h2>

                    {/* Desc */}
                    <p className="third_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur! Nesciunt assumenda dolore neque esse, asperiores enim! Atque, molestias at!</p>
                    {/* Button */}
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>

                </div>

                <div class="col-md-4 third_tile_child">
                    {/* Image */}
                    <Services className="third_img" />

                    {/* Heading  */}
                    <h2 className="third_title"><span className="third_title_span">Our Service</span> </h2>

                    {/* Desc */}
                    <p className="third_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur! Nesciunt assumenda dolore neque esse, asperiores enim! Atque, molestias at!</p>
                    {/* Button */}
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>

                </div>

                <div class="col-md-4 third_tile_child">
                    {/* Image */}
                    <Technology className="third_img" />

                    {/* Heading  */}
                    <h2 className="third_title"><span className="third_title_span">Our Technology</span> </h2>

                    {/* Desc */}
                    <p className="third_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur! Nesciunt assumenda dolore neque esse, asperiores enim! Atque, molestias at!</p>
                    {/* Button */}
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>

                </div>

            </div>
        </>
    )
}

export default Products
