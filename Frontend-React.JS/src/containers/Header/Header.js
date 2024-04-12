import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from "../../utils"

class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        const { processLogout } = this.props;
        let language = this.props.language
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className='languages'>
                    <span className={language === LANGUAGES.VI ? 'language-vie active' : 'language-vie'}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>
                        VIE
                    </span>
                    <span className={language === LANGUAGES.JPN ? 'language-jpn active' : 'language-jpn '}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.JPN)}>
                        JPN
                    </span>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
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
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
