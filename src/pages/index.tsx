import Head from "next/head";
import { Blockwithimage } from "@/components/Blockwithimage";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Blockwithimage
        t1={
          <Image
            src="/Syndra_54.jpg"
            width={1215}
            height={717}
            alt="hero"
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          />
        }
        t2="Microdosing synth tattooed vexillologist"
        t3="Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."
        t4="Button"
        t5="Button"
      />
    </>
  );
}
