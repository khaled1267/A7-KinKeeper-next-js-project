import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-lg">
        {/* 404 Illustration/Text */}
        <h1 className="text-9xl font-black text-primary opacity-20">
          404
        </h1>
        
        <div className="relative -mt-20">
          <h2 className="text-4xl font-bold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-base-content/60 mb-8">
            The page you are looking for might have been removed, 
            had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Back to Home Button */}
            <Link href="/" className="btn btn-primary px-8 shadow-xl">
              Back to Home
            </Link>
            
            {/* Go Back Button */}
            
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 opacity-20">
          <p>© {new Date().getFullYear()} KinKeeper - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}