import Image from "next/image";
import React from "react";

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string[];
}

const defaultProps: RecipeProps = {
  title: "Sernik Wiedeński",
  ingredients: [
    "1 kg twarogu",
    "1/2 szklanki cukru",
    "1/2 szklanki masła",
    "4 jajka",
    "1/2 szklanki mąki",
    "1/2 szklanki rodzynek",
    "1/2 szklanki orzechów",
    "1/2 szklanki skórki pomarańczowej",
  ],
  instructions: [
    "Twaróg przetrzeć przez sito.",
    "Dodać cukier, masło, żółtka, mąkę, rodzynki, orzechy i skórkę pomarańczową.",
    "Białka ubić na sztywno i delikatnie wmieszać do masy serowej.",
    "Masę wylać do formy i piec w piekarniku nagrzanym do 180 stopni przez 1 godzinę.",
  ],
};

function Recipe({ title, ingredients, instructions }: RecipeProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-full overflow-scroll">
        <div className="flex flex-row items-center">
          <div className="flex grow flex-col bg-slate-600/50 h-[400px]">
            <span className="grow bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-center text-5xl font-bold text-transparent">
              {title}
            </span>
            <div className="bg-blue-600/50 grow h-full">
              INGRIDIENTS
            </div>
          </div>
          <div className="max-w-[50%]">
            <Image
              alt="title image"
              width={600}
              height={400}
              className="object-contain"
              src={
                "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/528/sernik-z-brzoskwiniami.jpg"
              }
            />
          </div>
        </div>

        <div className="flex max-h-full grow flex-row overflow-hidden bg-blue-600/50">
          <div className="w-[25%] bg-red-600/50">STEPS</div>
          <div className="grow overflow-auto bg-green-600/50">
            <div className="min-h-screen h-[2000px]">STEP INSTRUCTION</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="h-full w-full pl-4">
      <Recipe {...defaultProps} />
    </div>
  );
}

export default Page;
