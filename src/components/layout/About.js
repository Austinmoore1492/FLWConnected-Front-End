import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<div className='about-page'>
				<div className='landing-inner'>
					<h2 className='large about-text'>Let's Hangout</h2>
					<p className='lead about-para'>
						This is a place the community around Fort Leonard Wood to grow and connect with.
					</p>
				</div>
			</div>

			<div className='profile-grid'>
				<div className='about-what bg-white p-2'>
					<h2 className='text-primary'>What is this place</h2>
					<div>
						<p>
							We know larger social media sites offer alot for everyone, but there is no small town feel
							to it. Here we can share with people from our community and get a better insight as to whats
							going on around our area.
						</p>
					</div>
				</div>
				<div className='about-who bg-white p-2'>
					<h2 className='text-primary'>Who we are</h2>
					<div>
						<p>
							We are just a couple of people from our community that wanted a better place for us to
							connect with those we love to hangout with.
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
