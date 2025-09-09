import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MdRocketLaunch } from 'react-icons/md'

export default function CardFeature() {

const promocoes = [
    {
        id: 1,
        titulo: 'Plano Essencial',
        texto: 'Ideal para quem está começando sua jornada rumo à produtividade. Organize tarefas, crie lembretes e mantenha seu dia sob controle com funcionalidades simples e eficazes.',
        footer: 'Comece com o básico e sinta a diferença no seu dia a dia.',
        descricao: 'Acesse ferramentas básicas para melhorar sua organização pessoal e manter o foco diário.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Essencial</button>
    },
    {
        id: 2,
        titulo: 'Produtividade Turbo',
        texto: 'Aumente sua performance com técnicas testadas como Pomodoro, controle de metas diárias e análises de produtividade semanais. Transforme esforço em resultados.',
        footer: 'Perfeito para quem busca mais foco e menos distração.',
        descricao: 'Desbloqueie recursos avançados como Pomodoro, metas diárias e relatórios de desempenho.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Turbo</button>
    },
    {
        id: 3,
        titulo: 'Plano Equilíbrio',
        texto: 'Produtividade saudável começa com equilíbrio. Faça pausas inteligentes, sincronize com apps de meditação e garanta uma rotina produtiva sem esgotamento.',
        footer: 'Alcance o pico sem sacrificar seu bem-estar.',
        descricao: 'Alinhe produtividade e bem-estar com sugestões de pausas saudáveis e integração com apps de meditação.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Equilíbrio</button>
    },
    {
        id: 4,
        titulo: 'Zenith Pro',
        texto: 'A versão mais completa do Zenith. Planeje, execute e monitore seus projetos com dashboards visuais, filtros inteligentes e colaboração em tempo real.',
        footer: 'Para quem leva produtividade a sério.',
        descricao: 'Experiência completa com organização de projetos, painéis customizáveis e suporte prioritário.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Pro</button>
    },
    {
        id: 5,
        titulo: 'Equipe Eficiente',
        texto: 'Perfeito para empresas, startups e times ágeis. Compartilhe responsabilidades, acompanhe o progresso coletivo e melhore a comunicação interna.',
        footer: 'Mais colaboração, menos confusão.',
        descricao: 'Ideal para times! Gerencie tarefas colaborativas, defina metas em grupo e acompanhe o progresso da equipe.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Equipe</button>
    },
    {
        id: 6,
        titulo: 'Plano Visionário',
        texto: 'Construa o futuro com clareza. Organize metas de longo prazo, visualize marcos importantes e mantenha uma visão estratégica de tudo que está por vir.',
        footer: 'Para quem pensa grande e planeja melhor.',
        descricao: 'Planeje longo prazo com visão estratégica. Ideal para empreendedores e líderes de projeto.',
        action: <button className="btn"><MdRocketLaunch /> Assinar Visionário</button>
    },
    {
        id: 7,
        titulo: 'Teste Grátis 7 Dias',
        texto: 'Teste todas as funcionalidades premium do Zenith sem custo. Veja como sua rotina pode mudar com foco, organização e praticidade.',
        footer: 'Sem cartão. Sem compromisso. Só resultados.',
        descricao: 'Experimente todos os recursos Premium do Zenith por uma semana, sem compromisso.',
        action: <button className="btn"><MdRocketLaunch /> Começar Teste</button>
    }
];




    return (
        <div className="flex flex-wrap justify-center container mx-auto gap-5 m-10" id="cards">
            {promocoes.map((promocao) => (
                <Card key={promocao.id} className={'w-75 h-90'}>
                    <CardHeader>
                        <CardTitle className={'text-xl italic'}>{promocao.titulo}</CardTitle>
                        <CardDescription>{promocao.descricao}</CardDescription>
                        <CardAction>{promocao.action}</CardAction>
                    </CardHeader>
                    <CardContent>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Ver mais detalhes</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>{promocao.titulo}</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        {promocao.texto}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Fechar</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </CardContent>
                    <CardFooter>
                        <p>{promocao.footer}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}