import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className='flex flex-row align-center min-h-screen  justify-center px-4 py-6  text-3xl'>
                <div className='flex flex-col space-y-8 my-auto'>
                    <span className='text-8xl'>JERKED COUNTRY CLUB</span>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className='flex flex-row align-center justify-center space-x-6'>
                            <Link
                                href={route('login')}
                                className="inline-flex items-center px-8 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="inline-flex items-center px-8 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                    </div>
               </div>
        </>
    );
}
