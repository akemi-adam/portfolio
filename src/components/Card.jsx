import { useState } from "react";
import Paragraph from "./Paragraph";

export default function Card({ project })
{
    const [imageIndex, setImageIndex] = useState(0);

    const prevSlide = () => {
        console.log(imageIndex);
        if ((imageIndex - 1) <= 0)
            setImageIndex(project.images.length - 1);
        
        else
            setImageIndex(imageIndex - 1)
        
    }

    const nextSlide = () => {
        if ((imageIndex + 1) >= project.images.length)
            setImageIndex(0);
        else
            setImageIndex(imageIndex + 1);
    }

    const imgBlock =
    <>
        <img className="w-full h-48" src={project.images[imageIndex]} alt="Capa da obra {{ manga.title }}"/>
        <div className="flex flex-row items-center justify-center my-4">
            <button onClick={(e) => prevSlide()} type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <button onClick={(e) => nextSlide()} type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
            </button>
        </div>
    </>

    return (
        <div>
            <div className="max-w-sm h-full rounded overflow-hidden shadow-lg text-gray-900 mx-28 pb-8">
                {project.images != false &&
                    imgBlock
                }
                <div className="flex flex-col gap-4 mx-4">
                    <h2 className="font-bold hover:underline hover:text-sky-500 hover:transition-all hover:duration-150 ease-in-out"><a href={project.repository} target="_blank">{project.name}</a></h2>
                    <Paragraph content={project.paragraph} />
                </div>
            </div>
        </div>
    );
}