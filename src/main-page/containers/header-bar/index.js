import React from 'react'

export default function HeaderBar() {
    return (
        <header id="headd">
            <div className="discountBar">
                <div className="container">
                    <img className="w-100" src="./images/brd-1263x60.jpg" alt="discountImg" />
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="./index.php">
                        <img className="fhs__logo" src="./images/fahasa-logo.png" alt />
                    </a>
                    <form className="form-inline my-2 my-lg-0" action="search.php" method="GET">
                        <input className="form-control mr-sm-2 input__zone no-outline" type="search" name="key" placeholder="Tìm kiếm..." aria-label="Search" />
                        <button className="search__btn btn" style={{ top: '5%', right: '0%' }}>
                            <i className="fas fa-search" />
                        </button>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" style={{ marginLeft: 70 }}>
                                <div className="nav__button pl-4" id="navNoti">
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav__button pl-3" id="navCart">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fas fa-shopping-cart" />
                                        <span className="nav-link" style={{ padding: 0, paddingLeft: 15 }} href="#">Giỏ hàng</span>
                                    </a>
                                    <ul className="dropdown-menu" style={{ left: '65%', maxWidth: '20%' }}>
                                        <li className="row selectedItem">
                                            <div className="col-1" />
                                            <span className="col-6 thanh__tien  p-0">
                                                <span className="font-weight-bold p-0" style={{ fontSize: '0.9rem' }}>Tổng tiền: {/*?= number_format($tongtien, 0, ',', '.') ?*/} đ</span>
                                            </span>
                                            <a href="cart/index.php" className="col-4 btn text-white" style={{ backgroundColor: '#f7941e' }}>Giỏ hàng</a>
                                            <div className="col-1" />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav__button pl-3" id="navLogin">
                                    <i className="fas fa-sign-in-alt" />
                                    <a href="./index.php?to=login">
                                        <span className="nav-link" style={{ padding: 0, paddingLeft: 15 }}>Đăng nhập</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}
