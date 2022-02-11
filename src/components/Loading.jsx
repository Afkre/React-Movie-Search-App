import React from 'react';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}