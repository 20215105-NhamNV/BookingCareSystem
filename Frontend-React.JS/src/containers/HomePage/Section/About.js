import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về Bookingcare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>Sứ mệnh mà Bookingcare.vn hướng tới là với khát vọng xây dựng trí thông minh nhân tạo,
                            phân tích dữ liệu lớn và áp dụng công nghệ chuỗi khối, Bookingcare.vn mong muốn kết nối toàn
                            câu để trở thành hệ sinh thái chăm sóc sức khỏe lớn nhất tại Đông Nam Á, một trợ lý sức khỏe cá
                            nhân, một bệnh viện thông minh tại nhà</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);