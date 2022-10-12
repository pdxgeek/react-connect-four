import React from "react";
import { Card } from "flowbite-react";
import { quotes } from "./Quotes";
import { useAppContext } from "../context/AppContextProvider";

import { getRandomImage, getRandomString } from "./RandomUtil";
import { images } from "./Images";

const JackHandyCard: React.FC = () => {
    // unused appState pulled in so quotes rotate
    const { appState } = useAppContext();

    const getQuote = () => {
        return getRandomString(quotes);
    }

    return (
        <div className="flex flex-col align-middle justify-center max-w-sm hidden xl:block">
              <Card imgSrc={ getRandomImage(images) }>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Deep Thoughts
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      <span className='font-bold text-xl'>&#8220;</span>
                      <span>{ getQuote() }</span>
                      <span className='font-bold text-xl'>&#8221;</span></p>
                  <p><span className='font-semibold text-white'>- Jack Handey</span></p>
              </Card>
        </div>
    );
}

export default JackHandyCard;