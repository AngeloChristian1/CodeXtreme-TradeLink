import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Footer from '../Sections/Footer';

function User(props) {
  return (
      <div className="flex min-h-[100vh] bg-darkest">
      <SideBar activeTab={props.activeTab}/>
      <main>
      <div className="flex-1 p-5 bg-darker w-[85vw] min-h-[99vh] m-1 rounded-2xl">
        <Outlet/>
       </div>
      </main>
            
          </div>
 
  );
}

export default User;
