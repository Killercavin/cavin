const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-grey-900">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-violet-600"></div>
            <p className="mt-4 text-lg font-medium">Loading...</p>
          </div>
        </div>
    );
}
export default Loading;