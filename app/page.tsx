/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import Chef from "@/components/AboutUs/Chef";
import Gallery from "@/components/Gallery/Gallery";
import SpecialMenu from "@/components/Menu/SpecialMenu";
import SubHeading from "@/components/Navbars/SubHeading";
import Intro from "@/components/intro/Intro";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import axios from "axios";
import TypingAnimation from "@/components/TypingAnimation";
//import { error } from "console";


interface ChatMessage {
  type: string;
  message: string;
}

type ChatLogType = ChatMessage[]

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState<ChatLogType>([]);
  const [isLoading, setIsLoading] = useState(false);



  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])

    sendMessage(inputValue);
    setInputValue('');

  }

  const sendMessage = (message: string) => {
    const url = `https://api.openai.com/v1/chat/completions`

    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],

    }
    setIsLoading(true)

    axios.post(url, data, { headers: headers }).then((response) => {
      console.log(response)
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
      setIsLoading(false)

    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
    })

  }
  return (

    <main className="relative flex flex-col min-h-screen">
      <div className=" px-2.5 md:px-20 pb-6 h-auto bg-gray-800">

        <div className="app__wrapper " id="home">
          <div className="app__wrapper_info ">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">Peace in between tree’s</h1>
            <p className="text-[#DCCA87]" style={{ margin: "2rem 0" }}>
              Welcome to Junकिri , your premier destination for an unforgettable dining experience in the heart of Titotama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
              <Link className={buttonVariants()} href="/products">
                Explore Menu{" "}
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="text-white">
                  Chat with Ai
                  <AccordionTrigger>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="container mx-auto max-w-[700px]">
                      <div className="flex flex-col h-screen bg-gray-900">
                        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-xl">Junkari AI</h1>
                        <div className="flex-grow p-6">
                          <div className="flex flex-col space-y-4">
                            {chatLog.map((message, inx) => (
                              <div key="inx" className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
                                }`}>
                                <div className={`${message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                                  } rounded-lg p-4 text-white max-w-sm`}>
                                  {message.message}
                                </div>
                              </div>

                            ))}
                            {
                              isLoading &&
                              <div key={chatLog.length} className="flex justify-start">
                                <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                                  <TypingAnimation />
                                </div>
                              </div>
                            }
                          </div>
                        </div>

                        <form onSubmit={handleFormSubmit} className="flex-none p-6 space-y-4">
                          <div className="flex rounded-lg border border-gray-700 bg-gray-800 ">

                            <input type="text" placeholder="type your message" value={inputValue} onChange={e => setInputValue(e.target.value)} className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none" />

                          </div>
                          <Button type="submit" variant='btn_green' className="">Send</Button>

                        </form>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>

            </div>
          </div>
          <div className="app__wrapper_img">
            <img src="/nav/bg.jpg" alt="images" />
          </div>

        </div>
      </div>
      {/* product */}


      <div>
        <SpecialMenu />
      </div>

      {/* <div>
        <Intro />
      </div> */}
      {/* <div>
        <Gallery />
      </div> */}



    </main>
  );
}
