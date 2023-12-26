import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className='h-[calc(100vh-56px)] flex items-center justify-center'>
      <Loader2 size={30} className='animate-spin' />
    </div>
  );
};

export default Loading;
