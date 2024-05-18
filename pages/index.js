"use client";
import { useEffect } from "react";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import { commonMetadata } from "@/app/metadata";
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);

  return (
    <main>
      <h8k-navbar header={commonMetadata.title} />
      <section className="layout-row align-items-center justify-content-center mt-30">
        <div>
          <h2>Click on the following link(s) to view the solution</h2>
          <div className="layout-row justify-content-center my-50">
            <div className="card w-50 mx-5">
              <Link href="/css">
                <p className="card-text text-center py-50">CSS</p>
              </Link>
            </div>
            <div className="card w-50 mx-5">
              <Link href="/react">
                <p className="card-text text-center py-50">React</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
