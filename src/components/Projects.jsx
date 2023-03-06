import Card from "./Card"

class Project
{
    constructor(name, paragraph, repository, images)
    {
        this.name = name;
        this.paragraph = paragraph;
        this.repository = repository;
        this.images = images;
    }
}

export default function Projects()
{

    const imageUrlBase = 'https://media.discordapp.net/attachments/942819468344713236/'
    const githubUrlBase = 'https://github.com/akemi-adam/'

    const projects = [
        new Project(
            'MangáNet', 'MangáNet é um site produzido em Django com Tailwind para administração e avaliação de mangás, utilizando diversas ferramentas que o framework disponibiliza, como CBV, Models, File Storage etc. Utiliza ainda o banco de dados PostgreSQL.',
            `${githubUrlBase}manganet`,
            [
                `${imageUrlBase}1082015672739045437/image.png?width=1200&height=525`,
                `${imageUrlBase}1082015958689910864/image.png?width=1200&height=451`,
                `${imageUrlBase}1082016152206708837/image.png?width=1200&height=350`,
                `${imageUrlBase}1082016650288705626/image.png?width=1200&height=562`
            ]
        ),
        new Project(
            'Touchfic em React', 'Touchfic foi um projeto desenvolvido como Projeto Integrador do Curso Técnico de Programação para Internet do IFRN campus Caicó, cujo objetivo é ser um site de publicação de fanfics e histórias completo. Esse projeto é uma iniciativa prórpria e única minha de separar o site feito puramente em Laravel com Blade para uma API com Sanctum e uma SPA em React (esse caso). Ainda está em desenvolvimento.',
            `${githubUrlBase}touchfic-frontend`,
            [
                `${imageUrlBase}1082097714797494292/image.png?width=1200&height=508`,
                `${imageUrlBase}1082099898872246334/image.png?width=1200&height=543`,
                `${imageUrlBase}1082100460565037108/image.png?width=1200&height=400`
            ]
        ),
        new Project(
            'Toca da Princesa', 'Toca da princesa é um software desktop feito em Java Utilizando JDBC para o driver MySQL e JavaFX para a Interface Gráfica. O Software foi feito para o projeto final da disciplina de Análise e Programação Orientada a Objetos, propondo simular de forma resumida o cadastro de atendimentos em um PetShop.',
            `${githubUrlBase}toca-da-princesa-desktop`,
            [
                `${imageUrlBase}1082102245434347610/image.png?width=928&height=661`,
                `${imageUrlBase}1082102550314102964/image.png?width=948&height=661`,
                `${imageUrlBase}1082102642903355432/image.png?width=936&height=661`,
                `${imageUrlBase}1082102716949610546/image.png?width=1126&height=662`
            ]
        ),
        new Project(
            'Move Files', 'Programa para desktop em Java feito com o intuito de me ajudar no processo de digitalização de documentos antigos. O programa pega todos os arquivos de uma pasta com um determinado nome e os move para uma outra pasta com um novo nome',
            `${githubUrlBase}move-files`,
            [
                `${imageUrlBase}1082104925598789735/image.png?width=907&height=608`,
                `${imageUrlBase}1082105013108752565/image.png?width=765&height=550`
            ]
        ),
        new Project(
            'Touchfic API com Sanctum', 'API do Touchfic para a SPA em React, feita em Laravel com o pacote Sanctum.',
            `${githubUrlBase}touchfic-backend`,
            []
        ),
        new Project(
            'Touchfic PI', 'Projeto Integrador (PI) das disciplinas Técnicas do curso de Informática para Internet. Touchfic é um site completo para publicação e administração de fanfics e histórias originais, contemplando os principais recursos do framework Laravel, como Controllers, Models, File Storage, Requests, Commands, Events e Listeners, Mail etc. O site ainda conta com a aplicação do Design Pattern Facades para construção de classes auxiliares no desenvolvimento e de outras tecnologias, como PHP Pest para automatização e escrita de testes e Livewire para maior interação assíncrona do usuário com o site.',
            `${githubUrlBase}touchfic-pi`,
            [
                `${imageUrlBase}1082109486895988816/image.png?width=1200&height=560`,
                `${imageUrlBase}1082111242719723630/image.png?width=1200&height=601`,
                `${imageUrlBase}1082111243038498996/image.png?width=1200&height=542`,
                `${imageUrlBase}1082111243290165278/image.png?width=1200&height=605`,
                `${imageUrlBase}1082111243608916018/image.png?width=1007&height=662`,
                `${imageUrlBase}1082111243894145064/image.png?width=1200&height=555`
            ]
        )
    ]

    return (
        <div className="bg-gray-50 py-24">
            <div className="flex flex-row flex-wrap gap-y-8">
                {projects.map((project, index) => {
                    return <Card key={index} project={project} />
                })}
            </div>
        </div>
    )
}