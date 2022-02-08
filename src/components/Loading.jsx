import React from 'react';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="spinner-border text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
