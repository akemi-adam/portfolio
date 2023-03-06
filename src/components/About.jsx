import Paragraph from "./Paragraph";

export default function About()
{
    const p1 = <>Mosiah Adam Maria de Araújo. 18 anos anos de idade. Gosto de aprender tecnologias e entender de fato como as coisas funcionam, desde o baixo até o alto nível. Desde criança tenho afinidade com computadores e técnologias, apesar de só vim começar a programar de fato aos meus 15 anos.</>;

    const p2 = <>Atualmente estou no período final do curso técnico integrado ao ensino médio de <a href="https://portal.ifrn.edu.br/campus/natalzonanorte/cursos/curso-tecnico-em-informatica-para-internet" target="_brank" className="hover:underline text-sky-600">Informática para Internet do IFRN</a> <span className="italic">campus</span> Caicó. Foi nesse curso onde comecei a programar e descobri minha paixão por isso. Ainda na escola, tive a oportunidade de ser tutor — o equivalente a monitor — na disciplina de <span className="italic">Fundamentos de lógica e algoritmos</span>, o que fez o meu senso de cooperação e de ensinar e aprender com os outros se aprimorar bastante.</>;

    return(
        <div className="bg-gray-50 py-28">
            <div className="flex mx-auto">
                <img src="./myphoto.jpg" alt="Uma foto minha em um dos laboratório do IFRN campus Caicó" className="ml-4 lg:ml-32 border-2 rounded h-80" />
                <div className="mx-4 lg:mx-24 flex flex-col">
                    <h2 className="text-[2rem] font-semibold text-slate-900">Quem sou eu?</h2>
                    <Paragraph content={p1}/>
                    <Paragraph content={p2}/>
                </div>
            </div>
        </div>
    );
}