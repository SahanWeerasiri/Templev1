import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">පිංකම් එකතුව - ශ්‍රී ජයවර්ධනාරාමය</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link className="hover:underline" to="/">මුල් පිටුව</Link></li>
            <li><Link className="hover:underline" to="/contact">සබඳතා</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;