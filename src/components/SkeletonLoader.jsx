export const SkeletonLoader = ({ loading }) => (
  loading ? (
    <div className='mt-10 animate-pulse space-y-8'>
      <div className='flex space-x-4'>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-gray-400 rounded'></div>
          <div className='h-4 bg-gray-400 rounded w-5/6'></div>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-gray-400 rounded'></div>
          <div className='h-4 bg-gray-400 rounded w-5/6'></div>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-4 bg-gray-400 rounded'></div>
          <div className='h-4 bg-gray-400 rounded w-5/6'></div>
        </div>
      </div>
    </div>
  ) : null
);
