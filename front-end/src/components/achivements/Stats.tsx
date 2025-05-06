import React from 'react';

interface Stat {
    count: string;
    label: string;
    sublabel: string;
}

const Stats: React.FC<Stat> = ({ count, label, sublabel }) => {
    return (
        <div
            className="bg-green-50 rounded-lg p-6 text-center shadow-sm flex justify-center items-center"
        >
            <div className="text-3xl font-bold text-green-700">{count}</div>
            <div className="flex flex-col items-start justify-start ml-4">
                <div className="text-lg text-gray-800 font-medium mt-2">{label}</div>
                <div className="text-sm text-gray-600 font-light mt-1">{sublabel}</div>
            </div>
        </div>
    );
};

export default Stats;