import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	useEffect(() => {
		window.onscroll = () => {
			const nav = document.querySelector('#navbar');
			window.scrollY <= 50 ? (nav.style.backgroundColor = '#333') : (nav.style.backgroundColor = '#003b6f');
		};
	});

	const authLinks = (
		<ul>
			<li>
				<Link to='/profiles'>Connect</Link>
			</li>
			<li>
				<Link to='/posts'>Posts</Link>
			</li>
			|
			<li>
				<Link to='/dashboard'>
					<i className='fas fa-user' /> <span className='hide-sm'>Profile</span>
				</Link>
			</li>
			<li>
				<a onClick={logout} href='#!'>
					<i className='fas fa-sign-out-alt' /> <span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to='/profiles'>Connect</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	);

	return (
		<nav id='navbar' className='navbar bg-dark'>
			<h1>
				<Link to='/'>FLW Connected</Link>
			</h1>
			{!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
