import React from 'react';
import 'h8k-components';
import BackLink from '@/components/back-link';
import WebsiteLayout from "@/components/website-layout";

const title = "Website Layout";

export default function ReactPage() {
  return (
    <main>
      <h8k-navbar header={title} />
      <BackLink />
      <WebsiteLayout />
    </main>
  );
}