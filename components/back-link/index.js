import React from "react";
import Link from 'next/link';

function BackLink() {

    return (
        <section className="layout-row align-items-center justify-content-center">
            <div className="my-5 mx-auto">
                <Link href="/">
                    <p className="outlined small">Back to home page</p>
                </Link>
            </div>
        </section>
    );
}

export default BackLink;

