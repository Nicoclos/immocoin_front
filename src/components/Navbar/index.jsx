import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UsergroupAddOutlined, LoginOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../../redux/actions/authActions';
import './index.scss';

const Navbar = () => {

    const dispatch = useDispatch();

    const handleSignOut = () => {
    dispatch(logoutSuccess());
    };

    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    
    return (
        <Layout className="layout">
            
            <div className="app" />
                <Menu theme="dark" className="menu" mode="horizontal" defaultSelectedKeys={["1"]}>
                  
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to={`/`}>ImmoCoin</Link>
                    </Menu.Item> 
                    <Menu.Item key="2"icon={<LoginOutlined />}>
                        <Link to={`/Login`} >Se connecter</Link> 
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
                        <Link to={`/Register`}>Inscription</Link> 
                    </Menu.Item>
                    {isAuthenticated && (
                        <Menu.Item key="4">
                        <Link to="/logout" onClick={handleSignOut}>
                            Sign Out
                        </Link>
                        </Menu.Item>
                    )}

                    {isAuthenticated && (
                        <Menu.Item key="5">
                        <Link to="/profile">My Profile</Link>
                        </Menu.Item>
                    )}

                </Menu>             
             
        </Layout>
    )
};

export default Navbar;