import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import HomeSection from '../Sections/HomeSection';

function HomePage() {

    let name = localStorage.getItem('name')
  return (
    <div className="bg-darkest  p-5 h-full">
      <Navbar/>
      <HomeSection/>

      <main className="mt-16">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{name?name:'Featured Businesses'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamically render featured businesses */}
            <div className="border p-4 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-medium mb-2">Business Name</h3>
              <p className="text-gray-700">Short description of the business and their funding proposal.</p>
              <Link to="/business" className="inline-block bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">View Proposal</Link>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Recent Proposals</h2>

          <div className="space-y-4">
            {/* Dynamically render recent business proposals */}
            <div className="border p-4 rounded-lg hover:shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-medium">Business Name</h3> 
                <p className="text-sm text-gray-500">Funding goal: $20,000</p>  
              </div>
              <p className="text-gray-700">Short description of the funding proposal...</p>
              <Link to="/proposal" className="inline-block bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">View Proposal</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;