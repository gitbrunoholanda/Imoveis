import { Link } from 'react-router-dom';
import Logo from '../assets/img/houses/alugabem3.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between'>
        {/* Logo */}
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        {/* Buttons */}
        <div className='flex items-center gap-6'>
          {/* Log in */}
          <Link className='hover:text-blue-300 transition' to='/login'>
            Log in
          </Link>
          { /* Sign up */}
          <Link className=' bg-cyan-700 hover: bg-cyan-700 text-white px-4 py-3 rounded-lg transition' to='/signup'>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
