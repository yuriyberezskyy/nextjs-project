import React from 'react';
import Link from 'next/link';
import { element } from 'prop-types';

export default function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' }
  ];

  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map(element => (
          <li key={element.id}>
            <Link
              href={{ pathname: '/clients/[id]', query: { id: element.id } }}
            >
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
