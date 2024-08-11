import React from 'react';
import { Button } from '@/components/ui/button';

const UserSubscription = () => {
  return (
    <>
<br></br>
            <hr/>
    <div className="m-4 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">LittleInn PRO Lifetime Access</h1>
      <p className="text-center mb-4">
        Get lifetime access to all stories and podcasts available today, plus any new ones we add in the future for a simple one-time price.
      </p>
      <p className="text-center mb-8">
        <span className="font-bold">$80 off for the next 6 customers</span> <br />
        <span className="text-green-500 font-semibold">Use code LITTLEINN80 at checkout</span>
      </p>
      <div className="flex justify-center gap-8">
        {/* PRO Personal */}
        <div className="w-80 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">PRO Personal</h2>
          <p className="text-gray-600 mb-4">For individual listener and creator.</p>
          <div className="text-4xl font-bold mb-4">
            <span>$49</span>
            <span className="text-gray-500 line-through ml-2">$129</span>
          </div>
        
          <Button className="w-full mb-4">Get Lifetime Access →</Button>
          <ul className="list-disc list-inside">
            <li>50+ sections (300 expected)</li>
            <li>2 templates (5 expected)</li>
            <li>1 developer license</li>
            <li>Commercial Use</li>
            <li>Perpetual license</li>
            <li>Lifetime access</li>
            <li>Lifetime updates</li>
          </ul>
        </div>
        {/* PRO Teams */}
        <div className="w-80 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">PRO Teams</h2>
          <p className="text-gray-600 mb-4">For product teams, agencies, and startups.</p>
          <div className="text-4xl font-bold mb-4">
            <span>$349</span>
            <span className="text-gray-500 line-through ml-2">$599</span>
          </div>
                    <Button className="w-full mb-4">Get Lifetime Access →</Button>
          <ul className="list-disc list-inside">
            <li>Everything in Personal, plus:</li>
            <li>10 developer licenses</li>
            <li>Commercial Use</li>
            <li>Perpetual license</li>
            <li>Lifetime access</li>
            <li>Lifetime updates</li>
          </ul>
        </div>
        {/* PRO Enterprise */}
        <div className="w-80 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">PRO Enterprise</h2>
          <p className="text-gray-600 mb-4">For product teams, agencies, and startups.</p>
          <div className="text-4xl font-bold mb-4">
            <span>$1049</span>
            <span className="text-gray-500 line-through ml-2">$1499</span>
          </div>
                    <Button className="w-full mb-4">Get Lifetime Access →</Button>
          <ul className="list-disc list-inside">
            <li>Everything in Personal, plus:</li>
            <li>25+ developer licenses</li>
            <li>Commercial Use</li>
            <li>Perpetual license</li>
            <li>Lifetime access</li>
            <li>Lifetime updates</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserSubscription;
