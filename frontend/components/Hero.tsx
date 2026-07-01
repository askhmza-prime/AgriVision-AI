import Link from "next/link";

export default function Hero(){

return(

<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

<h1 className="text-6xl font-black text-green-700">

Detect Crop Diseases

</h1>

<p className="mt-6 text-xl text-gray-600 max-w-2xl">

AI Powered crop disease detection
using Deep Learning.

Upload an image and receive
an instant prediction.

</p>

<Link href="/detect">

<button
className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold">

Upload Crop Image

</button>

</Link>

</section>

)

}
