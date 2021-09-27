import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>
            <Link to="/">토익 영단어(고급)</Link>
            {/* <a href="/">토익 영단어(고급)</a> */}
            </h1>
            <div className="menu">
                <button>
                <a href="#x" className="link">
                    단어 추가
                </a>
                </button>
                <button>
                <a href="#x" className="link">
                    Day 추가
                </a>
                </button>
            </div>
        </div>
    )
}

export default Header
