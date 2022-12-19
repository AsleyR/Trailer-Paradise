const Loading = () => {
  return (
    <div className="grid">
        <div className="flex gap-5 justify-center">
            <div className="relative flex h-3 w-3">
                <span className="animate-pulse absolute h-full w-full rounded-full bg-gray-100"></span>
            </div>
            <div className="relative flex h-3 w-3">
                <span className="animate-pulse absolute h-full w-full rounded-full bg-gray-100"></span>
            </div>
            <div className="relative flex h-3 w-3">
                <span className="animate-pulse absolute h-full w-full rounded-full bg-gray-100"></span>
            </div>
        </div>
    </div>
  )
}

export default Loading
