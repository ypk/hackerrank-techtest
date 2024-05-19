import React from 'react';
import 'h8k-components';
import WebsiteLayout from "../components/website-layout";

const title = "Website Layout";

export default function ReactPage() {
  return (
    <main>
      <h8k-navbar header={title} />
      <WebsiteLayout />
    </main>
  );
}