import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"

class Handbooks extends Component {

    render() {

        return (
            <div className='section-share section-handbooks'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>

                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 3</div>
                            </div >
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbooks"></div>
                                <div>cơ xương khớp 6</div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Handbooks);