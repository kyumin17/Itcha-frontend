const FieldBox = ({ fieldName }: { fieldName: string }) => {
  return (
    <div className='text-xs bg-zinc-100 px-2 py-0.5 rounded-xs'>
      {fieldName}
    </div>
  );
}

export default FieldBox;