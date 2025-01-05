import Image from "next/image";
import Queen from '/public/Queenn.jpg'
import Link from "next/link";
import FaArrowRightLong from 'react-icons/fa6'

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full flex-col p-4">
        <div className="flex flex-col items-center justify-center">
          <Image 
          width={250}
          height={250}
          src={Queen}
          alt="Queen"
          className="rounded-md"
          />
          <h1 className="font-bold text-[3em] text-[var(--brown)] text-center">Hello! I'm Queen</h1>
          <p className="text-[24px] text-center">Your (potential) Virtual Assistant.</p>
          <div className="flex items-center justify-center w-full gap-x-8">
          <Link className="p-4 bg-[var(--orange)] rounded text-[20px] hover:bg-[var(--orange-hover)] mt-4 text-center" href={'/about'}>About me</Link> 
          <Link className="p-4 bg-[var(--orange)] rounded text-[20px] hover:bg-[var(--orange-hover)] mt-4 text-center" href={'/explore'}>Explore</Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
