import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index';

const inter = Inter({ subsets: ['latin'] }) 

const posts = [
  {title: 'React testing', excerpt:'Learn React Testing'}
]

export default function Home({posts}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="container mx-auto px-4 lg:px-10 mb-8 bg-gray-200 lg:bg-transparent"> 
        <title>Kamalogue</title>   




       <div className="text-center sm:mt-[-50px] mb-8 p-8 relative rounded-lg bg-blue-500 bg-opacity-10">
        <p className="text-lg font-semibold text-gray-700 mb-4">Introducing our latest AI-powered feature - blog summarization!</p>
          <a href="https://kamalogue-summerizer.vercel.app/">
            <button  className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
           Try it now!
            </button>
          </a>
         </div>

        <FeaturedPosts />
        
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'> 
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post , index) =>  <PostCard post={post.node} key={post.title}/>)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>   




 


        {/* Join us  */}

        <div className="mt-10 sm:mt-20 mb-8 p-8 relative rounded-lg bg-blue-500 bg-opacity-10 flex flex-col sm:flex-row items-center">
  <div className="text-center">
    <p className="text-lg ml-5 font-10px font-bold text-black-700 mb-4"> Be a part of thriving blog community with our growing platform !</p> 
    <h2 className='desc text-centre'>Join an active community of developers, tech & sports enthusiasts, historians and creators on Kamalogue. Publish your blogs on Kamalogue, share ideas, and connect with a global audience!</h2>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScdHYmNOxhfk1P2fw-i2qpzb14PivRXgCV8fdGX-Tk2ER3ggQ/viewform?usp=sf_link">
      <button className="transition duration-500 ease transform hover:-translate-y-1 inline-block sm:ml-50 bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-full text-white mt-5 mb-10 px-8 py-3 cursor-pointer">
        Get started for free!
      </button>
    </a>
  </div>
  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643394967065/pOn8uxJFD.png?auto=compress" alt="" className="object-contain max-w-full sm:h-60 sm:w-60 h-auto w-autos ml-auto sm:ml-auto mt-autos sm:mt-auto" />
</div>





  </div>
      <style jsx>{`
        .container {
          padding: 0 16px;
        }

        h1 {
          font-size: 2rem;
        }

        @media (min-width: 640px) {
          h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 768px) {
          .container {
            padding: 0;
          }
        }
      `}</style> 

    

    </main>
  )
} 

export async function getStaticProps() {
  try {
    const posts = (await getPosts() )|| [];
    console.log(posts)
    return {
      props: { posts }
    }
  } catch (error) {
    console.error(error)
    return {
      props: { posts: null }
    }
  }
}
