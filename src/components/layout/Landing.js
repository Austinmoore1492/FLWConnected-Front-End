import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/posts' />;
	}

	return (
		<Fragment>
			<section className='landing'>
				<div className='dark-overlay'>
					<div className='landing-inner'>
						<h1 className='x-large'>FLW Connected</h1>
						<p className='lead'>A place for Fort Leonard Wood to Connect.</p>
						<div className='buttons'>
							<Link to='/register' className='btn btn-primary'>
								Sign Up
							</Link>
							<Link to='/login' className='btn btn-light'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<div className='footer bg-dark'>
					<span />
					<ul>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<a href='#'>Terms</a>
						</li>
						<li>
							<a href='#'>Privacy</a>
						</li>
					</ul>
				</div>
			</footer>
		</Fragment>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
