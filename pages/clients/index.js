import Link from 'next/link';

const ClientsPage = () => {
  const clients = [
    {
      id: 'karthik',
      name: 'Karthik',
    },
    { id: 'blacky', name: 'Blacky' },
  ];
  return (
    <div>
      <h1>The Clents Page</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{ pathname: '/clients/[id]', query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
