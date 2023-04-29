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
