import React from "react";
import { Card } from "flowbite-react";
import { quotes } from "./Quotes";
import { getRandomString } from "../util/AppUtil";
import { useAppContext } from "../context/AppContextProvider";
import nature1 from "../assets/nature-1.png"

const JackHandyCard: React.FC = () => {
    const { appState} = useAppContext();

    const getQuote = (nada: number) => {
        return getRandomString(quotes);
    }

    return (
        <div className="flex flex-col align-middle justify-center max-w-sm hidden xl:block">
              <Card imgSrc={ nature1 }>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Deep Thoughts
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                      <span className='font-bold text-xl'>&#8220;</span>
                      <span>{ getQuote(appState.turn) }</span>
                      <span className='font-bold text-xl'>&#8221;</span></p>
                  <p><span className='font-semibold text-white'>- Jack Handey</span></p>
              </Card>
          </div>

    );
}

export default JackHandyCard;