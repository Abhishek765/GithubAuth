import React from 'react'
import { ReactComponent as Information } from "../../images/first.svg"
import { ReactComponent as Dev } from "../../images/second.svg"
import './Main.css'
const Main = () => {
    return (
        <div>
            <main role="main">

                <div className="container">
                    {/* <!-- Example row of columns --> */}
                    <div className="row first_tile">
                        <div className="col-md-6 first_tile_col">
                            <h2 className="first_title">Making the most of the ever-growing </h2>
                            <h2 className="first_title_span">Information Technology</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauri. </p>
                            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                        </div>
                        <div className="col-md-6">
                            <Information className="info_img1" />
                        </div>

                    </div>
                    <div className="row sec_tile">
                        <div className="col-md-6 info_img_div">
                            <Dev className="info_img2" />
                        </div>
                        <div className="col-md-6 sec_tile_col">
                            <h2 className="sec_title">Welcome to <span className="sec_title_span">Orizon Technologies</span> </h2>

                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauri. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas maxime aliquid quasi eius, sapiente error. Cum vitae officiis impedit. </p>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauri. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas maxime aliquid quasi eius, sapiente error. Cum vitae officiis impedit. </p>
                            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                        </div>


                    </div>

                    <hr></hr>

                </div>

            </main>

        </div>
    )
}

export default Main;
