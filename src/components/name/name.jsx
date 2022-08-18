import { Link } from 'react-router-dom';
import './name.css';

const Name = (user) => (
    <div className='name__container'>
        <Link to={'user/' + user.id} className='name' key={user.id}>
			{user.userInfos.firstName} {user.userInfos.lastName}
	    </Link>
    </div>
);


export default Name;