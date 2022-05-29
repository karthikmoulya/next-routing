import { useRouter } from 'next/router';

const SelectClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a specific Project for a Selected Client.</h1>
    </div>
  );
};

export default SelectClientProjectPage;
