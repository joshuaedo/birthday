const Paragraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <div className='prose max-w-3xl'>
      <p className=''>{paragraph}</p>
    </div>
  );
};

export { Paragraph };
