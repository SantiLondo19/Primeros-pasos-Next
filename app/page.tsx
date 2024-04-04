import Link from "next/link";

//Esta seria como la pagina principal de la aplicacion
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>Hola mundo!</span>
      <Link href={'/about'}>
        About Page
      </Link>
    </main>
  )
}
