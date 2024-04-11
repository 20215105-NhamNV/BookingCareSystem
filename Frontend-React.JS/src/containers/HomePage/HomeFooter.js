import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"

class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p>
                    &copy; 2024 HESPI with Van Nham. More information.
                    <a
                        target='_blank'
                        href='https://youtu.be/FyDQljKtWnI'>
                        &#8594;Click here &#8592;
                    </a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);