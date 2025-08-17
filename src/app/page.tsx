import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FiZap } from 'react-icons/fi';
import Jam from "@/components/ui/jam";
import Credit from "@/components/ui/credit";
import FinalProject from "@/components/ui/finalproject";
export default function HomePage() {
  return (
    <>
      <Jam />
      <Credit />
      <FinalProject />
    <section className="container mx-auto flex min-h-screen flex-col items-center justify-center text-center gap-y-4">
      
      <Badge variant="default"><FiZap className="mr-2 h-4 w-4" />
      jack of all trades
      </Badge>

      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl flex items-center justify-center gap-x-4">
        <span>Halo, Saya</span>
        <Avatar className="h-12 w-12 sm:h-20 sm:w-20">
          <AvatarImage src="/paujie.png" alt="paujie" />
          <AvatarFallback>jie</AvatarFallback>
        </Avatar>
        <span>Fauzi Ramadhani</span>
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        seorang <b>Designer x Developer</b> yang senang belajar banyak hal baru.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-4">
        <Link href="/about" passHref>
          <Button variant="outline">Tentang</Button>
        </Link>
        <Link href="/projects" passHref>
          <Button>Lihat Proyek</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button variant="outline">Kontak</Button>
        </Link>
      </div>

    </section>
    </>
  );
}