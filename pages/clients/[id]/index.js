import { useRouter } from 'next/router';

const ClientProjextsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'karthik', clientprojectid: 'projectk' },
    });
  };

  console.log(router.query);
  return (
    <div>
      <h1>ClientProjectsPage</h1>
      <button onClick={loadProjectHandler}>Project K</button>
    </div>
  );
};

export default ClientProjextsPage;
