import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import Cart from './Cart';

const Navbar = (props) => {
    useEffect(() => {
        getNumbers();
    }, []);

    const [visible, setVisible] = React.useState(false);

    const handleClick = () => setVisible(true);
    const handleOk = () => setVisible(false);
    const handleCancel = () => setVisible(false);

    return (
        <div>
            <header>
                <div className="overlay"></div>
                <nav>
                    <h2>
                        <Link to="/">Beauty Shop</Link>
                    </h2>
                    <ul>
                        <li></li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Button type="primary" onClick={handleClick}>
                                Cart
                            </Button>
                        </li>
                        <li className="cart">
                            <Link to="/">
                                <i className="fas fa-shopping-basket"></i>
                                <button id="btn">
                                    <span>
                                        {props.basketProps.basketNumbers}
                                    </span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Cart />
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
