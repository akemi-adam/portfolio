export default function Technologies()
{
    return (
        <div className="bg-slate-900 text-white py-8 lg:pl-32 px-4">
            <h2 className="text-[2rem]">Tecnologias</h2>
            <div className="flex flex-rows gap-24 pl-12 lg:pl-12 mt-8">
                <ul className="list-outside list-disc">
                    <li>Python</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>Node.js</li>
                </ul>
                <ul className="list-outside list-disc">
                    <li>Laravel</li>
                    <li>Sanctum</li>
                    <li>Django</li>
                    <li>JavaFX</li>
                </ul>
                <ul className="list-outside list-disc">
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                </ul>
                <ul className="list-outside list-disc">
                    <li>React.js</li>
                    <li>Linux</li>
                    <li>Debian</li>
                    <li>Windows Server</li>
                </ul>
            </div>
        </div>
    );
}