import techPath from '@/data/tech_path.json';

const TechBox = ({ tech }: { tech: string }) => {
  return (
    <img className='h-5 w-5' src={`/image/tech/${techPath[tech]}`} />
  );
};

export default TechBox;