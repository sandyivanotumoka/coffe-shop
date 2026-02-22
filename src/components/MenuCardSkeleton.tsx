const MenuCardSkeleton = () => {
  return (
    <div className="border rounded-2xl p-5 space-y-4 animate-pulse">
      <div className="h-40 rounded-xl bg-gray-200" />

      <div className="h-5 bg-gray-200 rounded w-2/3" />

      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />

      <div className="h-10 bg-gray-200 rounded-lg" />
    </div>
  );
};

export default MenuCardSkeleton;
