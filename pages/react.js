import React from 'react';
import 'h8k-components';
import BackLink from '@/components/back-link';
import NotesApp from '@/components/notes-app';

const title = "Notes App";

export default function ReactPage() {
  return (
    <main>
      <h8k-navbar header={title} />
      <BackLink />
      <NotesApp />
    </main>
  );
}