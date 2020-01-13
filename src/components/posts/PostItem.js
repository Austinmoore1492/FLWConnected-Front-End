import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions,
}) => (
	<div className='post bg-white p-1 my-1'>
		<div>
			<Link to={`/profile/${user}`}>
				<img className='round-img' src={avatar} alt='' />
				<h4>{name}</h4>
			</Link>
		</div>
		<div>
			<p className='mb-1'>{text}</p>
			<p className='post-date'>
				Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
			</p>

			{showActions && (
				<Fragment>
					{likes.filter((like) => like.user.toString() === auth.user._id).length === 0 ? (
						<button
							onClick={() => addLike(_id)}
							type='button'
							className='btn btn-light'
							style={{ border: 'none' }}
						>
							<i
								className='far fa-heart fa-2x'
								style={{ verticalAlign: 'middle', transition: 'all 0.3s ease' }}
							/>{' '}
							<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
						</button>
					) : (
						<button
							onClick={() => removeLike(_id)}
							type='button'
							className='btn btn-light'
							style={{ border: 'none' }}
						>
							<i
								className='fas fa-heart fa-2x'
								style={{ color: 'red', verticalAlign: 'middle', transition: 'all 0.3s ease' }}
							/>{' '}
							<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
						</button>
					)}

					<Link to={`/posts/${_id}`} className='btn btn-primary'>
						<span>Comments </span>
						{comments.length > 0 && <span className='comment-count'>{comments.length}</span>}
					</Link>
					{!auth.loading &&
					user === auth.user._id && (
						<button onClick={() => deletePost(_id)} type='button' className='btn btn-danger'>
							<i className='fas fa-times' />
						</button>
					)}
				</Fragment>
			)}
		</div>
	</div>
);

PostItem.defaultProps = {
	showActions: true,
};

PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
